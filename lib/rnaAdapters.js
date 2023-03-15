import { prisma } from "./prisma.js"
import flattenObject from "./utils/flattenObject.js"

export async function getRnaAdapters() {
  try {
    const rnaAdapters = await prisma.rnaAdapter.findMany({
      include:{
        rnaLibrary:{
          select:{
            name:true,
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
        }  
      }
    })
    return rnaAdapters.map(aObject => flattenObject(aObject, '') )
  } catch (error) {
    return error
  }
}

export async function createRnaAdapter(rnaAdapter) {
  try {
    const rnaAdapterFromDB = await prisma.rnaAdapter.create({ data: rnaAdapter })
    return rnaAdapterFromDB
  } catch (error) {
    return error
  }
}


export async function updateRnaAdapter(uid, newdata){
  try{

    const updatedRnaAdapter = await prisma.rnaAdapter.update({
      where: {
        id: uid ,
      },
      data: newdata,
    })
    return updatedRnaAdapter

  } catch (error) {
    return error
  }
}


export async function deleteRnaAdapter(uid){
  try{

    const deleted = await prisma.rnaAdapter.delete({
      where: {
        id: uid ,
      },
    })
    return deleted

  } catch (error) {
    return error
  }
}

export async function getRnaAdapter(uid){
  try{
      const aRnaAdapter = await prisma.rnaAdapter.findUnique({
        where: {
          id: uid ,
        },
        include:{
        rnaLibrary:{
          select:{
            name:true,
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
        }  
      }
      })
    return flattenObject(aRnaAdapter, '')

  } catch (error) {
    return error
  }
}