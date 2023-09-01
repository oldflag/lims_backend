import { prisma } from "./prisma.js"
import flattenObject from "./utils/flattenObject.js"

export async function getRnaLibMultiplexs() {
  try {
    const rnaLibMultiplexs = await prisma.rnaLibMultiplex.findMany({
      orderBy: [
        {createdAt: 'desc',},
      ],
      orderBy: {
          rnaLibrary: {
            name: 'asc',
          },
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
                    priority:true,
                    subProtocol:true,
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
    return rnaLibMultiplexs.map(aObject => flattenObject(aObject, '') )
  } catch (error) {
    return error
  }
}

export async function createRnaLibMultiplex(rnaLibMultiplex) {
  try {
    const rnaLibMultiplexFromDB = await prisma.rnaLibMultiplex.create({ data: rnaLibMultiplex })
    return rnaLibMultiplexFromDB
  } catch (error) {
    return error
  }
}


export async function updateRnaLibMultiplex(uid, newdata){
  try{

    const updatedRnaLibMultiplex = await prisma.rnaLibMultiplex.update({
      where: {
        id: uid ,
      },
      data: newdata,
    })
    return updatedRnaLibMultiplex

  } catch (error) {
    return error
  }
}


export async function deleteRnaLibMultiplex(uid){
  try{

    const deleted = await prisma.rnaLibMultiplex.delete({
      where: {
        id: uid ,
      },
    })
    return deleted

  } catch (error) {
    return error
  }
}

export async function getRnaLibMultiplex(uid){
  try{
      const aRnaLibMultiplex = await prisma.rnaLibMultiplex.findUnique({
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
                    priority:true,
                    subProtocol:true,
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
    return flattenObject(aRnaLibMultiplex, '')

  } catch (error) {
    return error
  }
}