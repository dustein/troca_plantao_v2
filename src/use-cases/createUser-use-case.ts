import { UsersRepository } from "../repositories/usersRepository";

interface CreateUserUseCaseRequest {
   email: string;
   name: string;
   apelido: string;
   telefone: string;
}

export class CreateUserUseCase {

   constructor(
      private usersRepository: UsersRepository
   ) {}

   async execute(request: CreateUserUseCaseRequest) {
      const {email, name, apelido, telefone} = request;

      await this.usersRepository.create({
         email,
         name,
         apelido,
         telefone
      })
      
   }

}