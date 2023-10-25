import express from "express"
import { Species } from "../../../models/index.js"
// import petsRouter from "./petsRouter.js"
import speciesPetsRouter from "./speciesPetsRouter.js"

const speciesRouter = new express.Router()

speciesRouter.get("/", async (req, res) => {
  const allSpecies = await Species.query()
  return res.status(200).json({ species: allSpecies })
})

speciesRouter.get("/:id", async (req, res) => {
  const { id } = req.params
  const species = await Species.query().findById(id)
  species.pets = await species.$relatedQuery("pets")
  return res.status(200).json({ species: species })
})

speciesRouter.use("/:speciesId/pets", speciesPetsRouter)

export default speciesRouter
