import { prisma } from "./prisma.js"
import flattenObject from "./utils/flattenObject.js"

export async function getRnaRTs() {
  try {
    const rnaRTs = await prisma.rnaRT.findMany({
        orderBy: [
          {createdAt: 'desc',},
        ],
        include:{
          assay:{
            select:{
              tubeNum: true,
              batch: {
                select:{
                  name: true,
                }
              }
            }
          }
        },
    })
    return rnaRTs.map(aObject => flattenObject(aObject, '') )
  } catch (error) {
    return error
  }
}

export async function createRnaRT(rnaRT) {
  try {
    const rnaRTFromDB = await prisma.rnaRT.create({ data: rnaRT })
    return rnaRTFromDB
  } catch (error) {
    return error
  }
}


export async function updateRnaRT(uid, newdata){
  try{

    const updatedRnaRT = await prisma.rnaRT.update({
      where: {
        id: uid ,
      },
      data: newdata,
    })
    return updatedRnaRT

  } catch (error) {
    return error
  }
}


export async function deleteRnaRT(uid){
  try{

    const deleted = await prisma.rnaRT.delete({
      where: {
        id: uid ,
      },
    })
    return deleted

  } catch (error) {
    return error
  }
}

export async function getRnaRT(uid){
  try{
      const aRnaRT = await prisma.rnaRT.findUnique({
        where: {
          id: uid ,
        },
        include:{
          assay:{
            select:{
              tubeNum: true,
              batch: {
                select:{
                  name: true,
                }
              }
            }
          }
        },
      })
    return flattenObject(aRnaRT, '')

  } catch (error) {
    return error
  }
}