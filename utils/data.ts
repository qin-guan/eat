export interface AppData {
  lastUpdated: number
  locations: {
    id: number
    name: string
    totalCapacity: number
    currentCapacity: number
  }[]
}

export const APP_DATA_KEY = 'data'

export const DEFAULT_APP_DATA: AppData = {
  "lastUpdated": 1692165695008,
  "locations": [
    {
      "id": 1,
      "name": "Food Club",
      "totalCapacity": 50,
      "currentCapacity": 45
    },
    {
      "id": 2,
      "name": "Makan Place",
      "totalCapacity": 75,
      "currentCapacity": 50
    },
    { "id": 3, "name": "Munch", "totalCapacity": 30, "currentCapacity": 20 }
  ]
}
