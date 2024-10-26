//
// import { PrismaClient } from "@prisma/client";
// export function PrismaClientDefine() {
//
//   const prisma = new PrismaClient();
// }

// import { PrismaClient } from '@prisma/client'
//
// const prismaClientSingleton = () => {
//   return new PrismaClient()
// }
//
// export default prisma
// declare const globalThis: {
//   prismaGlobal: ReturnType<typeof prismaClientSingleton>;
// } & typeof global;
//
// const prisma = globalThis.prismaGlobal ?? prismaClientSingleton()
//
//
// if (process.env.NODE_ENV !== 'production') globalThis.prismaGlobal = prisma
//

// import { PrismaClient } from '@prisma/client';
//
// const prismaClientSingleton = () => {
//   return new PrismaClient();
// };
//
// type PrismaClientSingleton = ReturnType<typeof prismaClientSingleton>;
//
// // eslint-disable-next-line
// const globalForPrisma = globalThis as unknown as {
//   prisma: PrismaClientSingleton | undefined;
// };
//
// const prisma = globalForPrisma.prisma ?? prismaClientSingleton();
//
// export default prisma;
//
// if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;
