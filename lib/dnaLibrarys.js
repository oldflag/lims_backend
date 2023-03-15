import { prisma } from "./prisma.js"
import flattenObject from "./utils/flattenObject.js"

export async function getDnaLibrarys() {
  try {
    const dnaLibrarys = await prisma.dnaLibrary.findMany({
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
    return dnaLibrarys.map(aObject => flattenObject(aObject, '') )
  } catch (error) {
    return error
  }
}

export async function createDnaLibrary(dnaLibrary) {
  try {
    const dnaLibraryFromDB = await prisma.dnaLibrary.create({ data: dnaLibrary })
    return dnaLibraryFromDB
  } catch (error) {
    return error
  }
}


export async function updateDnaLibrary(uid, newdata){
  try{

    const updatedDnaLibrary = await prisma.dnaLibrary.update({
      where: {
        id: uid ,
      },
      data: newdata,
    })
    return updatedDnaLibrary

  } catch (error) {
    return error
  }
}


export async function deleteDnaLibrary(uid){
  try{

    const deleted = await prisma.dnaLibrary.delete({
      where: {
        id: uid ,
      },
    })
    return deleted

  } catch (error) {
    return error
  }
}

export async function getDnaLibrary(uid){
  try{
      const aDnaLibrary = await prisma.dnaLibrary.findUnique({
        where: {
          id: uid ,
        },
        include:{
          lysis:{
            name: true,
            select:{
              batch: {
                select:{
                  name:true,
                }
              }
            }
          }
        }
      })
    return flattenObject(aDnaLibrary, '')

  } catch (error) {
    return error
  }
}