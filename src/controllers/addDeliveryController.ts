import { Request, Response } from "express";
import knex from "../database/connection";

class AddDeliveryController {

    async create(request: Request, response: Response){
        const { uf_origin, uf_destiny, city_origin, city_destiny, height, width, length, weight, observation, user_id } = request.body;

        await knex("deliveries").insert({
            uf_origin,
            uf_destiny,
            city_origin,
            city_destiny,
            height,
            width,
            length,
            weight,
            observation,
            user_id
        });

        return response.json( "Cadastrado com Sucesso!" );
    }

    async show(request: Request, response: Response){

        const { page = 1 } = request.query;

        const [count] = await knex('deliveries').count();

        console.log(count);

        const result = await knex("deliveries")
            .join("users", 'users.id', '=', 'deliveries.user_id')
            .select([
                'deliveries.*',
                'users.name',
                'users.email',
                'users.phone',
            ])
            .orderBy("deliveries.id", "desc");

        response.header('X-Total-Count', count['count(*)']);

        return response.json(result);
    }

}

export default AddDeliveryController;
