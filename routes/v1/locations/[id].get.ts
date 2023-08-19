import { AppData } from "../../../utils/data"

export default defineCachedEventHandler(async (event) => {
  const { id } = getRouterParams(event)

  const storage = useStorage<AppData>('eat')
  const data = await storage.getItem(APP_DATA_KEY)
  const location = data.locations.find((location) => location.id.toString() === id)

  return location ?? createError({
    status: 404,
    message: 'Location not found'
  })
}, {
  swr: true,
  maxAge: 60
})
