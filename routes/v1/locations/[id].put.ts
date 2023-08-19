import { AppData } from "../../../utils/data"

export default defineEventHandler(async (event) => {
  const { id } = getRouterParams(event)

  const storage = useStorage<AppData>('eat')
  const data = await storage.getItem(APP_DATA_KEY)
  const body = await readBody(event)

  if (!body.name || !body.totalCapacity || !body.currentCapacity) {
    return createError({
      status: 400,
    })
  }

  const locationIdx = data.locations.findIndex((location) => location.id.toString() === id)
  if (locationIdx === -1) {
    return createError({
      status: 404,
      message: 'Location not found'
    })
  }

  data.locations[locationIdx] = {
    id: Number.parseInt(id),
    name: body.name,
    totalCapacity: body.totalCapacity,
    currentCapacity: body.currentCapacity,
  }

  data.lastUpdated = Date.now();

  await storage.setItem(APP_DATA_KEY, data)

  setResponseStatus(event, 201)

  return { ok: true }
})
