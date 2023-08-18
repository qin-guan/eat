import { AppData } from "../utils/data"

export default eventHandler(async () => {
  const storage= useStorage<AppData>('eat')
  return await storage.getItem(APP_DATA_KEY)
})
