import { Request, Response } from "express";
import knex from "../database/connection";

class UserController {

    async create(request: Request, response: Response){
        const { name, email, phone, pass } = request.body;

        await knex("users").insert({
            name,
            email,
            phone,
            pass
        })

        return response.json( "Cadastrado com Sucesso!" );
    }
}


export default UserController;
