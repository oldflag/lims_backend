import { prisma } from "./prisma.js"

export async function getI5Primers() {
  try {
    const i5Primers = await prisma.i5Primer.findMany()
    return i5Primers
  } catch (error) {
    return error
  }
}
