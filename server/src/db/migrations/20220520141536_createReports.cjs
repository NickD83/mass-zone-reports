/**
 * @typedef {import("knex")} Knex
 */

/**
 * @param {Knex} knex
 */
exports.up = async (knex) => {
  return knex.schema.createTable("reports", (table) => {
    table.bigIncrements("id")
    table.bigInteger("massZoneId").notNullable().index().unsigned().references("massZones.id");
    table.bigInteger("userId").notNullable().index().unsigned().references("users.id");
    table.date("reportDate").notNullable();
    table.text("reportText").notNullable();
    table.timestamp("createdAt").notNullable().defaultTo(knex.fn.now());
    table.timestamp("updatedAt").notNullable().defaultTo(knex.fn.now());
  })
}

/**
 * @param {Knex} knex
 */
exports.down = (knex) => {
  return knex.schema.dropTableIfExists("reports");
}
