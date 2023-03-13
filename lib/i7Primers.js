import { prisma } from "./prisma.js"

export async function getI7Primers() {
  try {
    const i7Primers = await prisma.i7Primer.findMany()
    return i7Primers
  } catch (error) {
    return error
  }
}
