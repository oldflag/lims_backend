import { prisma } from "./prisma.js"
import flattenObject from "./utils/flattenObject.js"

export async function getRnaLibrarys() {
  try {
    const rnaLibrarys = await prisma.rnaLibrary.findMany({
      orderBy:[
        {
          createdAt: 'desc',
        },
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
    return rnaLibrarys.map(aObject => flattenObject(aObject, '') )
  } catch (error) {
    return error
  }
}

export async function createRnaLibrary(rnaLibrary) {
  try {
    const rnaLibraryFromDB = await prisma.rnaLibrary.create({ data: rnaLibrary })
    return rnaLibraryFromDB
  } catch (error) {
    return error
  }
}


export async function updateRnaLibrary(uid, newdata){
  try{

    const updatedRnaLibrary = await prisma.rnaLibrary.update({
      where: {
        id: uid ,
      },
      data: newdata,
    })
    return updatedRnaLibrary

  } catch (error) {
    return error
  }
}


export async function deleteRnaLibrary(uid){
  try{

    const deleted = await prisma.rnaLibrary.delete({
      where: {
        id: uid ,
      },
    })
    return deleted

  } catch (error) {
    return error
  }
}

export async function getRnaLibrary(uid){
  try{
      const aRnaLibrary = await prisma.rnaLibrary.findUnique({
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
    return flattenObject(aRnaLibrary, '')

  } catch (error) {
    return error
  }
}