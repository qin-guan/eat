import { APP_DATA_KEY, type AppData } from '../utils/data'

export default defineNitroPlugin(async () => {
  console.log('plugin is running!')
  const storage = useStorage<AppData>('eat')
  const data = await storage.getItem(APP_DATA_KEY)
  console.log('cdata', data)
  if (!data) {
    await storage.setItem(APP_DATA_KEY, DEFAULT_APP_DATA)
  }
})
