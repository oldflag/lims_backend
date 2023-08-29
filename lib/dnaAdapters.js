import { prisma } from "./prisma.js"
import flattenObject from "./utils/flattenObject.js"

export async function getDnaAdapters() {
  try {
    const dnaAdapters = await prisma.dnaAdapter.findMany({
      orderBy: [
        {createdAt: 'desc',},
      ],
      include:{
        dnaLibrary:{
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
    return dnaAdapters.map(aObject => flattenObject(aObject, '') )
  } catch (error) {
    return error
  }
}

export async function createDnaAdapter(dnaAdapter) {
  try {
    const dnaAdapterFromDB = await prisma.dnaAdapter.create({ data: dnaAdapter })
    return dnaAdapterFromDB
  } catch (error) {
    return error
  }
}


export async function updateDnaAdapter(uid, newdata){
  try{

    const updatedDnaAdapter = await prisma.dnaAdapter.update({
      where: {
        id: uid ,
      },
      data: newdata,
    })
    return updatedDnaAdapter

  } catch (error) {
    return error
  }
}


export async function deleteDnaAdapter(uid){
  try{

    const deleted = await prisma.dnaAdapter.delete({
      where: {
        id: uid ,
      },
    })
    return deleted

  } catch (error) {
    return error
  }
}

export async function getDnaAdapter(uid){
  try{
      const aDnaAdapter = await prisma.dnaAdapter.findUnique({
        where: {
          id: uid ,
        },
        include:{
          dnaLibrary:{
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
    return flattenObject(aDnaAdapter, '')

  } catch (error) {
    return error
  }
}