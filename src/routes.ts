import { Router } from "express";

export const routes = Router();

routes.get("/", (req, res) => {
   res.send({router: "Rotas ativa - pasta raiz"})
})

routes.post("/user", async (req, res) => {
   const { email, name, apelido, telefone } = req.body;

   const newUser = 
})

