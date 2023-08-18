//https://nitro.unjs.io/config
export default defineNitroConfig({
  storage: {
    'eat': {
      driver: 'cloudflare-kv-binding',
      binding: 'KV_EAT'
    }
  },
  devStorage: {
    'eat': {
      driver: 'memory',
    }
  }
});
