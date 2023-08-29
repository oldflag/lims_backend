import { prisma } from "./prisma.js"
import flattenObject from "./utils/flattenObject.js"

export async function getLinearAmpAnchors() {
  try {
    const linearAmpAnchors = await prisma.linearAmpAnchor.findMany({
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
    return linearAmpAnchors.map(aObject => flattenObject(aObject, '') )
  } catch (error) {
    return error
  }
}

export async function createLinearAmpAnchor(linearAmpAnchor) {
  try {
    const linearAmpAnchorFromDB = await prisma.linearAmpAnchor.create({ data: linearAmpAnchor })
    return linearAmpAnchorFromDB
  } catch (error) {
    return error
  }
}


export async function updateLinearAmpAnchor(uid, newdata){
  try{

    const updatedLinearAmpAnchor = await prisma.linearAmpAnchor.update({
      where: {
        id: uid ,
      },
      data: newdata,
    })
    return updatedLinearAmpAnchor

  } catch (error) {
    return error
  }
}


export async function deleteLinearAmpAnchor(uid){
  try{

    const deleted = await prisma.linearAmpAnchor.delete({
      where: {
        id: uid ,
      },
    })
    return deleted

  } catch (error) {
    return error
  }
}

export async function getLinearAmpAnchor(uid){
  try{
      const aLinearAmpAnchor = await prisma.linearAmpAnchor.findUnique({
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
    return flattenObject(aLinearAmpAnchor, '')

  } catch (error) {
    return error
  }
}