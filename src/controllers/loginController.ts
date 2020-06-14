import { Request, Response } from "express";
import knex from '../database/connection';

class LoginController {

    async login(request: Request, response:Response){
        const {email, pass} = request.body;

        const results = await knex("users")
            .where("email", email)
            .andWhere("pass", pass)
            .select("name","id")
            .first();

        if (!results){
            return response.status(400).json({ error: "Email ou senha informado estão errados!" });
        }
        return response.json(results);
    }
}

export default LoginController;
