const Model = require("./Model.js")

class Applicant extends Model {
  static get tableName() {
    return "applicants"
  }

  static get jsonSchema() {
    return {
      type: "object",
      required: ["firstName", "lastName"],
      properties: {
        firstName: { type: "string" },
        lastName: {
          type: "string"
        }
      }
    }
  }

  static get relationMappings() {
    const { Pet, Application } = require("./index.js")
    return {
      pets: {
        relation: Model.ManyToManyRelation,
        modelClass: Pet,
        join: {
          from: "applicants.id",
          through: {
            from: "applications.applicantId",
            to: "applications.petId"
          },
          to: "pets.id"
        }
      },
      applications: {
        relation: Model.HasManyRelation,
        modelClass: Application,
        join: {
          from: "applicant.id",
          to: "applications.applicantId"
        }
      }
    }
  }
}

module.exports = Applicant
