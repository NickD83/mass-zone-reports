/* eslint-disable no-console */
import { connection } from "../boot.js"
import UserSeeder from "./seeders/UserSeeder.js";
import MassZoneSeeder from "./seeders/MassZoneSeeder.js"
import MethodSeeder from "./seeders/MethodSeeder.js";
import ReportSeeder from "./seeders/ReportSeeder.js";

class Seeder {
  static async seed() {
    // include individual seed commands here

    console.log("seeding users");
    await UserSeeder.seed();

    console.log("seeding zones");
    await MassZoneSeeder.seed();

    console.log("seeding methods");
    await MethodSeeder.seed();

    console.log("seeding reports");
    await ReportSeeder.seed();

    console.log("Done!")
    await connection.destroy()
  }
}

export default Seeder