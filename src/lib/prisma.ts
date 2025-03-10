import { PrismaClient } from "@prisma/client";
import { Return } from "@prisma/client/runtime/library";

const prismaClientSingleton = () => {
  return new PrismaClient();
};

declare const globalThis: {
  prismaGlobal: Return<typeof prismaClientSingleton>;
} & typeof global;

const primsa = globalThis.prismaGlobal ?? prismaClientSingleton();

export default primsa;

if (process.env.NODE_ENV !== "production") {
  globalThis.prismaGlobal = prismaClientSingleton();
}
