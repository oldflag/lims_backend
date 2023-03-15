import { prisma } from "./prisma.js"
import flattenObject from "./utils/flattenObject.js"

export async function getDnaLibMultiplexs() {
  try {
    const dnaLibMultiplexs = await prisma.dnaLibMultiplex.findMany({
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
          },
          i7Primer:{
            select:{
              rcSeq: true,
            }
          },
          i5Primer:{
            select:{
              fSeq: true,
            }   
          }
        }
    })
    return dnaLibMultiplexs.map(aObject => flattenObject(aObject, '') )
  } catch (error) {
    return error
  }
}

export async function createDnaLibMultiplex(dnaLibMultiplex) {
  try {
    const dnaLibMultiplexFromDB = await prisma.dnaLibMultiplex.create({ data: dnaLibMultiplex })
    return dnaLibMultiplexFromDB
  } catch (error) {
    return error
  }
}


export async function updateDnaLibMultiplex(uid, newdata){
  try{

    const updatedDnaLibMultiplex = await prisma.dnaLibMultiplex.update({
      where: {
        id: uid ,
      },
      data: newdata,
    })
    return updatedDnaLibMultiplex

  } catch (error) {
    return error
  }
}


export async function deleteDnaLibMultiplex(uid){
  try{

    const deleted = await prisma.dnaLibMultiplex.delete({
      where: {
        id: uid ,
      },
    })
    return deleted

  } catch (error) {
    return error
  }
}

export async function getDnaLibMultiplex(uid){
  try{
      const aDnaLibMultiplex = await prisma.dnaLibMultiplex.findUnique({
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
          },
          i7Primer:{
            select:{
              rcSeq: true,
            }
          },
          i5Primer:{
            select:{
              fSeq: true,
            }   
          }  
        }
      })
    return flattenObject(aDnaLibMultiplex, '')

  } catch (error) {
    return error
  }
}