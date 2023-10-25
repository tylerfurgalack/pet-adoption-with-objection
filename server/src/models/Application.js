const Model = require("./Model")

class Application extends Model {
  static get tableName() {
    return "applications"
  }

  static get relationMappings() {
    const { Applicant, Pet } = require("./index.js")
    return {
      applicant: {
        relation: Model.BelongsToOneRelation,
        modelClass: Applicant,
        join: {
          from: "applications.applicantId",
          to: "applicants.id"
        }
      },
      pet: {
        relation: Model.BelongsToOneRelation,
        modelClass: Pet,
        join: {
          from: "applications.petId",
          to: "pets.id"
        }
      }
    }
  }
}

module.exports = Application
