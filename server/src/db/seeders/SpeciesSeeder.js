import { Species } from "../../models/index.js"

class SpeciesSeeder {
  static async seed() {
    const speciesData = [
      {
        name: "JSONasuarus"
      },
      {
        name: "Furgalacktopus"
      }
    ]
    for (const singleSpeciesData of speciesData) {
      const currentSpecies = await Species.query().findOne({ name: singleSpeciesData.name })
      if (!currentSpecies) {
        await Species.query().insert(singleSpeciesData)
      }
    }
    console.log("seeded species")
  }
}

export default SpeciesSeeder
