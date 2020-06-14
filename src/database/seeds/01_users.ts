import * as Knex from "knex";

exports.seed = function(knex: Knex) {
    return knex('users').del()
        .then(function () {
            return knex('users').insert([
                {name: "admin", phone: "99999999", email: "admin@admin.com", pass: "admin" },
                {name: "teste", phone: "88888888", email: "teste@teste.com", pass: "teste" },
                {name: "teste1", phone: "77777777", email: "teste@admin.com", pass: "teste1" },
            ]);
        });
};
