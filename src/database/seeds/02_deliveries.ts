import * as Knex from "knex";

export async function seed(knex: Knex): Promise<any> {
    return knex("deliveries").del()
        .then(() => {
            return knex("deliveries").insert([
                { uf_origin: "RS", uf_destiny: "SC", city_origin: "Novo Hamburgo", city_destiny: "Criciuma", height: 1.35, width: 2.10, length: 1.35, weight: 25.30, observation: "Caixa com peças de madeira", user_id: 1 },
                { uf_origin: "RS", uf_destiny: "RS", city_origin: "São Leopoldo", city_destiny: "Canela", height: 1.00, width: 2.00, length: 1.35, weight: 20, observation: "Caixa com eletronicos", user_id: 2 },
            ]);
        });
};
