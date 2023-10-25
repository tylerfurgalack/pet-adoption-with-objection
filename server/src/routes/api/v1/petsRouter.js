import express from "express"
import { Pet } from "../../../models/index.js"

const petsRouter = new express.Router()

petsRouter.get("/:id", async (req, res) => {
  const petId = req.params.id
  const pet = await Pet.query().findById(petId)
  pet.applicants = await pet.$relatedQuery("applicants")
  return res.status(200).json({ pet: pet })
})

export default petsRouter
