//https://nitro.unjs.io/config
export default defineNitroConfig({
  storage: {
    cache: {
      driver: 'cloudflare-kv-binding',
      binding: 'KV_EAT'
    },
    'eat': {
      driver: 'cloudflare-kv-binding',
      binding: 'KV_EAT'
    }
  },
  devStorage: {
    'eat': {
      driver: 'memory',
    }
  },
  serverAssets: [
    {
      baseName: 'templates',
      dir: './templates'
    }
  ]
});
