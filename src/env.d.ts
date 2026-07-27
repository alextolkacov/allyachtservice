/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly PUBLIC_SITE_INDEXABLE?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
