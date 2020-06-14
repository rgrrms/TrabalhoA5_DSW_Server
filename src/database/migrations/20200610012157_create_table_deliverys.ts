import * as Knex from "knex";


export async function up(knex: Knex) {
    return knex.schema.createTable('deliveries', table => {
        table.increments('id').primary().unique().notNullable();
        table.string('uf_origin', 2).notNullable();
        table.string('uf_destiny', 2).notNullable();
        table.string('city_origin').notNullable();
        table.string('city_destiny').notNullable();
        table.decimal('height').notNullable();
        table.decimal('width').notNullable();
        table.decimal('length').notNullable();
        table.decimal('weight');
        table.string('observation');
        table.integer('user_id').unsigned();
        table.foreign('user_id').references('id').inTable('users');
        table.timestamp("createdAt").defaultTo(knex.fn.now())
        table.timestamp("updatedAt").defaultTo(knex.fn.now())
    })
}


export async function down(knex: Knex) {
    return knex.schema.dropTable('deliveries');
}

