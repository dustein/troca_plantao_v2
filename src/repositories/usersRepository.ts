export interface UserDataCreation {
   email: string;
   name: string;
   apelido: string;
   telefone: string;
}

export interface UsersRepository {
   create: (data: UserDataCreation) => Promise<void>;
}