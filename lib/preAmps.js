import { prisma } from "./prisma.js"
import flattenObject from "./utils/flattenObject.js"

export async function getPreAmps() {
  try {
    const preAmps = await prisma.preAmp.findMany({
      orderBy: [
        {createdAt: 'desc',},
      ],
      include:{
        lysis:{
          select:{
            name: true,
            batch: {
              select:{
                name:true,
              }
            }
          }
        }
      }
    })
    return preAmps.map(aObject => flattenObject(aObject, '') )
  } catch (error) {
    return error
  }
}

export async function createPreAmp(preAmp) {
  try {
    const preAmpFromDB = await prisma.preAmp.create({ data: preAmp })
    return preAmpFromDB
  } catch (error) {
    return error
  }
}


export async function updatePreAmp(uid, newdata){
  try{

    const updatedPreAmp = await prisma.preAmp.update({
      where: {
        id: uid ,
      },
      data: newdata,
    })
    return updatedPreAmp

  } catch (error) {
    return error
  }
}


export async function deletePreAmp(uid){
  try{

    const deleted = await prisma.preAmp.delete({
      where: {
        id: uid ,
      },
    })
    return deleted

  } catch (error) {
    return error
  }
}

export async function getPreAmp(uid){
  try{
      const aPreAmp = await prisma.preAmp.findUnique({
        where: {
          id: uid ,
        },
        include:{
          lysis:{
            select:{
              name: true,
              batch: {
                select:{
                  name:true,
                }
              }
            }
          }
        }
      })
    return flattenObject(aPreAmp, '')

  } catch (error) {
    return error
  }
}