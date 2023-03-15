import { prisma } from "./prisma.js"
import flattenObject from "./utils/flattenObject.js"

export async function getSeqRuns() {
  try {
    const seqRuns = await prisma.seqRun.findMany()
    return seqRuns
  } catch (error) {
    return error
  }
}

export async function createSeqRun(seqRun) {
  try {
    const seqRunFromDB = await prisma.seqRun.create({ data: seqRun })
    return seqRunFromDB
  } catch (error) {
    return error
  }
}


export async function updateSeqRun(uid, newdata){
  try{

    const updatedSeqRun = await prisma.seqRun.update({
      where: {
        id: uid ,
      },
      data: newdata,
    })
    return updatedSeqRun

  } catch (error) {
    return error
  }
}


export async function deleteSeqRun(uid){
  try{

    const deleted = await prisma.seqRun.delete({
      where: {
        id: uid ,
      },
    })
    return deleted

  } catch (error) {
    return error
  }
}

export async function getSeqRun(uid){
  try{
      const aSeqRun = await prisma.seqRun.findUnique({
        where: {
          id: uid ,
        },
      })
    return aSeqRun

  } catch (error) {
    return error
  }
}