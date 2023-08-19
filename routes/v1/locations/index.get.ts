import { AppData } from "../../../utils/data"

export default defineEventHandler(async () => {
  const storage = useStorage<AppData>('eat')
  const data = await storage.getItem(APP_DATA_KEY)
  return data.locations
})
