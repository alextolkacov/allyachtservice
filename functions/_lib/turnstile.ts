interface TurnstileVerification {
  success: boolean;
  hostname?: string;
  action?: string;
  'error-codes'?: string[];
}

interface TurnstileVerificationInput {
  secret: string;
  token: string;
  remoteIp?: string;
  expectedHostnames: string;
}

export interface TurnstileVerificationResult {
  success: boolean;
  reason?: string;
}

function isTurnstileVerification(
  value: unknown,
): value is TurnstileVerification {
  return (
    typeof value === 'object' &&
    value !== null &&
    'success' in value &&
    typeof value.success === 'boolean'
  );
}

export async function verifyTurnstile(
  input: TurnstileVerificationInput,
): Promise<TurnstileVerificationResult> {
  const body: Record<string, string> = {
    secret: input.secret,
    response: input.token,
    idempotency_key: crypto.randomUUID(),
  };

  if (input.remoteIp) body.remoteip = input.remoteIp;

  try {
    const response = await fetch(
      'https://challenges.cloudflare.com/turnstile/v0/siteverify',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
        signal: AbortSignal.timeout(8000),
      },
    );
    const result: unknown = await response.json();

    if (!response.ok || !isTurnstileVerification(result) || !result.success) {
      return {
        success: false,
        reason:
          isTurnstileVerification(result) && result['error-codes']?.length
            ? result['error-codes'].join(',')
            : 'siteverify-failed',
      };
    }

    if (result.action !== 'contact') {
      return {
        success: false,
        reason: 'unexpected-action',
      };
    }

    const expectedHostnames = new Set(
      input.expectedHostnames
        .split(',')
        .map((hostname) => hostname.trim().toLowerCase())
        .filter(Boolean),
    );
    const hostname = result.hostname?.toLowerCase();

    if (!hostname || !expectedHostnames.has(hostname)) {
      return {
        success: false,
        reason: 'unexpected-hostname',
      };
    }

    return { success: true };
  } catch {
    return {
      success: false,
      reason: 'siteverify-unavailable',
    };
  }
}
