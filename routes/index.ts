import { AppData } from "../utils/data"

export default eventHandler(async () => {
  const storage= useStorage<AppData>('eat')
  const data = await storage.getItem(APP_DATA_KEY)
  console.log('cdata2', data)
  return data
})
