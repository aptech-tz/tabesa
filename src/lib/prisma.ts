import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";

if (!process.env.DATABASE_URL) {
  throw new Error("Missing DATABASE_URL environment variable.");
}

function getDatabaseUrl() {
  const url = new URL(process.env.DATABASE_URL!);
  url.searchParams.set("sslmode", "no-verify");

  return url.toString();
}

const adapter = new PrismaPg({
  connectionString: getDatabaseUrl(),
});

const globalForPrisma = globalThis as unknown as {
  prisma?: PrismaClient;
};

export const prisma =
  globalForPrisma.prisma ??
  new PrismaClient({
    adapter,
  });

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma;
}

export default prisma;
