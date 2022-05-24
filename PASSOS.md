npm init -y
npm i typescript 
npm i @types/node 
npm i ts-node-dev -D
npx tsc --init
tsconfig: target 2020. rootDir ./src outDir ./dist
npx tsc
npm i express
npm i @types/express -D
PostgreSQL ativar linux (sudo systemctl start postgresql | sudo -i -u postgres | psql - eduardo lopes) - criei o BD plantao com comandos no terminal postgres
npm i prisma -D
npm i @pryima/client
npx prisma init
npm i uuid
Configurar schema.prisma criando o model para o BD
npx prisma migrate dev
ver no npx prisma studio que a tabela ja esta pronta
