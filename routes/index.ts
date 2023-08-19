export default defineEventHandler(async () => {
  return await useStorage('assets:templates').getItem(`index.html`)
})
