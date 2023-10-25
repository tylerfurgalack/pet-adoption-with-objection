import express from "express"
import objection from "objection"
const { ValidationError } = objection

import Pet from "../../../models/Pet.js"
import cleanUserInput from "../../../services/cleanUserInput.js"

const speciesPetsRouter = new express.Router({ mergeParams: true })
//mergeParams = speciesId

speciesPetsRouter.post("/", async (req, res) => {
  console.log(req.body)
  const { body } = req
  const formInput = cleanUserInput(body)
  const { name, weight, estimatedAge, available } = formInput
  const { speciesId } = req.params

  try {
    const newPet = await Pet.query().insertAndFetch({
      name,
      weight,
      estimatedAge,
      available,
      speciesId
    })
    return res.status(201).json({ pet: newPet })
  } catch (err) {
    if (err instanceof ValidationError) {
      res.status(422).json({ errors: err.data })
    } else {
      console.log(err)
      return res.status(500).json({ errors: err })
    }
  }
})

export default speciesPetsRouter
