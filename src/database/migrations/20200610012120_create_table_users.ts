import * as Knex from "knex";

export async function up(knex: Knex) {
    return knex.schema.createTable("users", table => {
        table.increments("id").unique().notNullable().primary()
        table.text("name").notNullable()
        table.text("phone").unique().notNullable()
        table.text("email").unique().notNullable()
        table.text("pass").notNullable()

        table.timestamp("createdAt").defaultTo(knex.fn.now())
        table.timestamp("updatedAt").defaultTo(knex.fn.now())
    })
}


export async function down(knex: Knex) {
    return knex.schema.dropTable("users");
}


