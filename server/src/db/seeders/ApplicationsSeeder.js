import { Applicant, Application, Pet } from "../../models/index.js"

class ApplicationSeeder {
  static async seed() {
    const jason = await Applicant.query().findOne({ firstName: "Jason" })
    const tyler = await Applicant.query().findOne({ firstName: "Tyler" })

    const rex = await Pet.query().findOne({ name: "rex" })
    rex.applicants = await rex.$relatedQuery("applicants").relate(jason)

    const applicationData = [
      {
        applicantId: jason.id,
        petId: rex.id
      }
    ]

    for (const singleApplication of applicationData) {
      const currentApplication = await Application.query().findOne({
        applicantId: singleApplication.applicantId
      })
      if (!currentApplication) {
        await Application.query().insert(singleApplication)
      }
    }
  }
}

export default ApplicationSeeder
