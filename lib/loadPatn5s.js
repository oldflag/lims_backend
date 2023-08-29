import { prisma } from "./prisma.js"
import flattenObject from "./utils/flattenObject.js"


export async function getLoadPatn5s() {
  try {
    const loadPatn5s = await prisma.loadPatn5.findMany({
      orderBy: [
        {createdAt: 'desc',},
      ],
      include:{
          patn5:{
            select:{
              name: true,
            }
          }
      }
    })
    return loadPatn5s.map(aObject => flattenObject(aObject, '') )
  } catch (error) {
    return error
  }
}

export async function createLoadPatn5(loadPatn5) {
  try {
    const loadPatn5FromDB = await prisma.loadPatn5.create({ data: loadPatn5 })
    return loadPatn5FromDB
  } catch (error) {
    return error
  }
}


export async function updateLoadPatn5(uid, newdata){
  try{

    const updatedLoadPatn5 = await prisma.loadPatn5.update({
      where: {
        id: uid ,
      },
      data: newdata,
    })
    return updatedLoadPatn5

  } catch (error) {
    return error
  }
}


export async function deleteLoadPatn5(uid){
  try{

    const deleted = await prisma.loadPatn5.delete({
      where: {
        id: uid ,
      },
    })
    return deleted

  } catch (error) {
    return error
  }
}

export async function getLoadPatn5(uid){
  try{
      const aLoadPatn5 = await prisma.loadPatn5.findUnique({
        where: {
          id: uid ,
        },
        include:{
              patn5:{
                select:{
                  name: true,
                }
              }
          }
      })
    return flattenObject(aLoadPatn5, '')

  } catch (error) {
    return error
  }
}
