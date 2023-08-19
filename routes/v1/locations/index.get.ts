import { AppData } from "../../../utils/data"

export default defineCachedEventHandler(async () => {
  const storage = useStorage<AppData>('eat')
  const data = await storage.getItem(APP_DATA_KEY)
  return data.locations
}, {
  swr: true,
  maxAge: 60
})
