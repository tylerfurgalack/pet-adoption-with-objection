/* eslint-disable no-console */
import { connection } from "../boot.js"
import SpeciesSeeder from "./seeders/SpeciesSeeder.js"
import PetSeeder from "./seeders/PetSeeder.js"
import ApplicantSeeder from "./seeders/ApplicantSeeder.js"
import ApplicationSeeder from "./seeders/ApplicationsSeeder.js"

class Seeder {
  static async seed() {
    // include individual seed commands here
    console.log("seeding species...")
    await SpeciesSeeder.seed()

    console.log("seeding pets...")
    await PetSeeder.seed()

    console.log("seeding applicants...")
    await ApplicantSeeder.seed()

    console.log("seeding applications...")
    await ApplicationSeeder.seed()

    console.log("Done!")
    await connection.destroy()
  }
}

export default Seeder
