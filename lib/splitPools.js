import { prisma } from "./prisma.js"
import flattenObject from "./utils/flattenObject.js"

export async function getSplitPools() {
  try {
    const splitPools = await prisma.splitPool.findMany({
      include:{
        batch:{
          select:{
            name: true,
          }
        }
      }
    })
    return splitPools.map(aObject => flattenObject(aObject, '') )
  } catch (error) {
    return error
  }
}

export async function createSplitPool(splitPool) {
  try {
    const splitPoolFromDB = await prisma.splitPool.create({ data: splitPool })
    return splitPoolFromDB
  } catch (error) {
    return error
  }
}


export async function updateSplitPool(uid, newdata){
  try{

    const updatedSplitPool = await prisma.splitPool.update({
      where: {
        id: uid ,
      },
      data: newdata,
    })
    return updatedSplitPool

  } catch (error) {
    return error
  }
}


export async function deleteSplitPool(uid){
  try{

    const deleted = await prisma.splitPool.delete({
      where: {
        id: uid ,
      },
    })
    return deleted

  } catch (error) {
    return error
  }
}

export async function getSplitPool(uid){
  try{
      const aSplitPool = await prisma.splitPool.findUnique({
        where: {
          id: uid ,
        },
        include:{
          batch:{
            select:{
              name: true,
            }
          }
        }
      })
    return flattenObject(aSplitPool, '')

  } catch (error) {
    return error
  }
}