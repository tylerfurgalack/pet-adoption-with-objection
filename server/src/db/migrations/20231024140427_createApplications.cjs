/**
 * @typedef {import("knex")} Knex
 */

/**
 * @param {Knex} knex
 */
exports.up = async (knex) => {
  return knex.schema.createTable("applications", (table) => {
    table.bigIncrements("id")
    table.bigInteger("applicantId").notNullable().unsigned().index().references("applications.id")
    table.bigInteger("petId").notNullable().unsigned().index().references("pets.id")
    table.timestamp("createdAt").notNullable().defaultTo(knex.fn.now())
    table.timestamp("updatedAt").notNullable().defaultTo(knex.fn.now())
  })
}

/**
 * @param {Knex} knex
 */
exports.down = async (knex) => {
  return knex.schema.dropTableIfExists("applications")
}
