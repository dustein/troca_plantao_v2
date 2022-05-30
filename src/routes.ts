import { Router } from "express";
import { PrismaUsersRepository } from "./repositories/prisma/prisma-usersRepository";
import { CreateUserUseCase } from "./use-cases/createUser-use-case";

export const routes = Router();

routes.get("/", (req, res) => {
   res.send({router: "Rotas ativa - pasta raiz"})
})

routes.post("/user", async (req, res) => {
   const { email, name, apelido, telefone } = req.body;

   const prismaUsersRepository = new PrismaUsersRepository();
   const createUserCase = new CreateUserUseCase(
      prismaUsersRepository,
   );

   await createUserCase.execute({
      email,
      name,
      apelido,
      telefone
   })

   return res.status(201).send({usuario: "usuario criado"})
})

