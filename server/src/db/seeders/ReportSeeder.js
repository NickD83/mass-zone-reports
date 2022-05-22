import { Report } from "../../models/index.js";

class ReportSeeder {
  static async seed() {
    const reportsData = [ 
      {
        massZoneId: 10,
        userId: 1,
        reportDate: "2022-10-03",
        reportText: "Opening day. Really warm and the bugs were biting.",
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