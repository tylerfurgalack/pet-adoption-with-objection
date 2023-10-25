import { Applicant } from "../../models/index.js"

class ApplicantSeeder {
  static async seed() {
    const applicantData = [
      {
        firstName: "Jason",
        lastName: "Berk"
      },
      {
        firstName: "Tyler",
        lastName: "Furgalack"
      }
    ]

    for (const singleApplicant of applicantData) {
      const currentApplicant = await Applicant.query().findOne({
        firstName: singleApplicant.firstName
      })
      if (!currentApplicant) {
        await Applicant.query().insert(singleApplicant)
      }
    }
  }
}

export default ApplicantSeeder
