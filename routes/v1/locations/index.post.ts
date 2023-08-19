import { AppData } from "../../../utils/data"

export default defineEventHandler(async (event) => {
  const storage = useStorage<AppData>('eat')
  const data = await storage.getItem(APP_DATA_KEY)
  const body = await readBody(event)

  if (!body.name || !body.totalCapacity || !body.currentCapacity) {
    return createError({
      status: 400,
    })
  }

  data.locations.push({
    id: data.locations.length + 1,
    name: body.name,
    totalCapacity: body.totalCapacity,
    currentCapacity: body.currentCapacity,
  });
  data.lastUpdated = Date.now();

  await storage.setItem(APP_DATA_KEY, data)

  setResponseStatus(event, 201)
  
  return true
})
