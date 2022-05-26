import { Report } from "../../models/index.js";

class ReportSeeder {
  static async seed() {
    const reportsData = [ 
      {
        massZoneId: 1,
        userId: 1,
        reportDate: "2022-10-03",
        reportText: "Test.",
      },
      {
        massZoneId: 2,
        userId: 1,
        reportDate: "2022-10-03",
        reportText: "Test.",
      },
      {
        massZoneId: 3,
        userId: 1,
        reportDate: "2022-10-03",
        reportText: "Test.",
      },
      {
        massZoneId: 4,
        userId: 1,
        reportDate: "2022-10-03",
        reportText: "Test.",
      },
      {
        massZoneId: 5,
        userId: 1,
        reportDate: "2022-10-03",
        reportText: "Test.",
      },
      {
        massZoneId: 6,
        userId: 1,
        reportDate: "2022-10-03",
        reportText: "Test.",
      },
      {
        massZoneId: 7,
        userId: 1,
        reportDate: "2022-10-03",
        reportText: "Test.",
      },
      {
        massZoneId: 8,
        userId: 1,
        reportDate: "2022-10-03",
        reportText: "Test.",
      },
      {
        massZoneId: 9,
        userId: 1,
        reportDate: "2022-10-03",
        reportText: "Test.",
      },
      {
        massZoneId: 10,
        userId: 1,
        reportDate: "2022-10-03",
        reportText: "Test.",
      },
      {
        massZoneId: 11,
        userId: 1,
        reportDate: "2022-10-03",
        reportText: "Test.",
      },
      {
        massZoneId: 10,
        userId: 1,
        reportDate: "2022-10-03",
        reportText: "Test.",
      },
      {
        massZoneId: 12,
        userId: 1,
        reportDate: "2022-10-03",
        reportText: "Test.",
      },
      {
        massZoneId: 13,
        userId: 1,
        reportDate: "2022-10-03",
        reportText: "Test.",
      },
      {
        massZoneId: 14,
        userId: 1,
        reportDate: "2022-10-03",
        reportText: "Test.",
      },
      {
        massZoneId: 15,
        userId: 1,
        reportDate: "2022-10-03",
        reportText: "Test.",
      }
    ];
    for (const singleReportData of reportsData) {
      const currentReport = await Report.query().findOne(singleReportData);
      if (!currentReport) {
        await Report.query().insert(singleReportData);
      }
    }
  }
}

export default ReportSeeder;