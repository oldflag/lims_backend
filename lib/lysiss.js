import { prisma } from "./prisma.js"
import flattenObject from "./utils/flattenObject.js"

export async function getLysiss() {
  try {
    const lysiss = await prisma.lysis.findMany({
      include:{
        batch:{
          select:{
            name: true,
          }
        }
      }
    })
    return lysiss.map(aObject => flattenObject(aObject, '') )
  } catch (error) {
    return error
  }
}

export async function createLysis(lysis) {
  try {
    const lysisFromDB = await prisma.lysis.create({ data: lysis })
    return lysisFromDB
  } catch (error) {
    return error
  }
}


export async function updateLysis(uid, newdata){
  try{

    const updatedLysis = await prisma.lysis.update({
      where: {
        id: uid ,
      },
      data: newdata,
    })
    return updatedLysis

  } catch (error) {
    return error
  }
}


export async function deleteLysis(uid){
  try{

    const deleted = await prisma.lysis.delete({
      where: {
        id: uid ,
      },
    })
    return deleted

  } catch (error) {
    return error
  }
}

export async function getLysis(uid){
  try{
      const aLysis = await prisma.lysis.findUnique({
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
    return flattenObject(aLysis, '')

  } catch (error) {
    return error
  }
}