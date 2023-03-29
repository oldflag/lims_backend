import { prisma } from "./prisma.js"
import flattenObject from "./utils/flattenObject.js"

export async function getBatchs() {
  try {
    const batchs = await prisma.batch.findMany({
      include:{
        quote:{
          select:{
            name: true,
          }
        }
      }
    })
    return batchs.map(aObject => flattenObject(aObject, '') )
  } catch (error) {
    return error
  }
}

export async function createBatch(batch) {
  try {
    const batchFromDB = await prisma.batch.create({ data: batch })
    return batchFromDB
  } catch (error) {
    return error
  }
}


export async function updateBatch(uid, newdata){
  try{

    const updatedBatch = await prisma.batch.update({
      where: {
        id: uid ,
      },
      data: newdata,
    })
    return updatedBatch

  } catch (error) {
    return error
  }
}


export async function deleteBatch(uid){
  try{

    const deleted = await prisma.batch.delete({
      where: {
        id: uid ,
      },
    })
    return deleted

  } catch (error) {
    return error
  }
}

export async function getBatch(uid){
  try{
      const aBatch = await prisma.batch.findUnique({
        where: {
          id: uid ,
        },
        include:{
          quote:{
            select:{
              name: true,
            }
          }
        }
      })
    return flattenObject(aBatch, '')

  } catch (error) {
    return error
  }
}
