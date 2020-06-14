import express, { request, response } from "express";
import Celebrate, {celebrate, Joi, Segments} from "celebrate";

import LoginController from "./controllers/loginController";
import UserController from "./controllers/userController";
import AddDeliveryController from "./controllers/addDeliveryController";

const routes = express.Router();

const loginController = new LoginController();
const userController = new UserController;
const addDeliveryController = new AddDeliveryController();

routes.post("/login", loginController.login);
routes.post("/create-account", userController.create);
routes.post("/add-delivery", addDeliveryController.create);

routes.get("/timeline/:page?",
    // celebrate({
    //     [Segments.QUERY]: Joi.object().keys({
    //         page: Joi.number(),
    //     })
    // }),
    addDeliveryController.show);

export default routes;
