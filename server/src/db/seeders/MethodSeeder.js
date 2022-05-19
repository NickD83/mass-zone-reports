import { Method } from "../../models/index.js"

class MethodSeeder {
  static async seed() {
    const methodsData = [
      {
        method: "Archery(Zones 10-14)",
        startDate: "2022-10-3",
        endDate: "2022-11-26",
      },
      {
        method: "Archery(Zones 1-9)",
        startDate: "2022-10-17",
        endDate: "2022-11-26",
      },
      {
        method: "Shotgun",
        startDate: "2022-11-28",
        endDate: "2022-12-10"
      },
      {
        method: "Primitive Firearms Season",
        startDate: "2022-12-12",
        endDate: "2022-12-31",
      },
    ]
    for (const singleMethodData of methodsData) {
      const currentMethod = await Method.query().findOne(singleMethodData);
      if (!currentMethod) {
        await Method.query().insert(singleMethodData)
      }
    }
  }
}

export default MethodSeeder; 

