import { Pet, Species } from "../../models/index.js"

class PetSeeder {
  static async seed() {
    const jsonSpecies = await Species.query().findOne({ name: "JSONasuarus" })
    const furgaSpecies = await Species.query().findOne({ name: "Furgalacktopus" })
    const petData = [
      {
        name: "rex",
        available: true,
        weight: 300,
        estimatedAge: 99,
        speciesId: jsonSpecies.id
      },

      {
        name: "Tyler",
        available: false,
        weight: 45,
        estimatedAge: 32,
        speciesId: furgaSpecies.id
      }
    ]
    for (const singlePetData of petData) {
      const currentPet = await Pet.query().findOne({
        name: singlePetData.name
      })
      if (!currentPet) {
        await Pet.query().insert(singlePetData)
      }
    }
  }
}

export default PetSeeder
