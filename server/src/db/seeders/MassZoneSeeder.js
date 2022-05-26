import { MassZone } from "../../models/index.js";

class MassZoneSeeder {
  static async seed() {
    const massZonesData = [
      {
        zoneName: "1",
      },
      {
        zoneName: "2",
      },
      {
        zoneName: "3",
      },
      {
        zoneName: "4N",
      },
      {
        zoneName: "4S",
      },
      {
        zoneName: "5",
      },
      {
        zoneName: "6",
      },
      {
        zoneName: "7",
      },
      {
        zoneName: "8",
      },
      {
        zoneName: "9",
      },
      {
        zoneName: "10",
      },
      {
        zoneName: "11",
      },
      {
        zoneName: "12",
      },
      {
        zoneName: "13",
      },
      {
        zoneName: "14",
      },
    ];
    for (const singleMassZoneData of massZonesData) {
      const currentMassZone = await MassZone.query().findOne(singleMassZoneData);
      if (!currentMassZone) {
        await MassZone.query().insert(singleMassZoneData);
      }
    }
  }
}

export default MassZoneSeeder;

