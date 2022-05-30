import { prisma } from "../../prisma";

import { UserDataCreation, UsersRepository } from "../usersRepository";

export class PrismaUsersRepository implements UsersRepository {

   async create({email, name, apelido, telefone}: UserDataCreation) {

      await prisma.user.create({
         data: {
            email,
            name,
            apelido,
            telefone
         }
      })

   }

}