import { MassZone } from "../../models/index.js";

class MassZoneSeeder {
  static async seed() {
    const massZonesData = [
      {
        zoneName: "1",
        zoneInfo: "Youth Deer Hunt Day: Oct. 1, 2022",
      },
      {
        zoneName: "2",
        zoneInfo: "Youth Deer Hunt Day: Oct. 1, 2022",
      },
      {
        zoneName: "3",
        zoneInfo: "Youth Deer Hunt Day: Oct. 1, 2022",
      },
      {
        zoneName: "4N",
        zoneInfo: "Youth Deer Hunt Day: Oct. 1, 2022",
      },
      {
        zoneName: "4S",
        zoneInfo: "Youth Deer Hunt Day: Oct. 1, 2022",
      },
      {
        zoneName: "5",
        zoneInfo: "Youth Deer Hunt Day: Oct. 1, 2022",
      },
      {
        zoneName: "6",
        zoneInfo: "Youth Deer Hunt Day: Oct. 1, 2022",
      },
      {
        zoneName: "7",
        zoneInfo: "Youth Deer Hunt Day: Oct. 1, 2022",
      },
      {
        zoneName: "8",
        zoneInfo: "Youth Deer Hunt Day: Oct. 1, 2022",
      },
      {
        zoneName: "9",
        zoneInfo: "Youth Deer Hunt Day: Oct. 1, 2022",
      },
      {
        zoneName: "10",
        zoneInfo: "Youth Deer Hunt Day: Oct. 1, 2022",
      },
      {
        zoneName: "11",
        zoneInfo: "Youth Deer Hunt Day: Oct. 1, 2022",
      },
      {
        zoneName: "12",
        zoneInfo: "Youth Deer Hunt Day: Oct. 1, 2022",
      },
      {
        zoneName: "13",
        zoneInfo: "Youth Deer Hunt Day: Oct. 1, 2022",
      },
      {
        zoneName: "14",
        zoneInfo: "Youth Deer Hunt Day: Oct. 1, 2022",
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

