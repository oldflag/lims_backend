import { prisma } from "./prisma.js"
import flattenObject from "./utils/flattenObject.js"

export async function getSeqLibrarys() {
  try {
    const seqLibrarys = await prisma.seqLibrary.findMany({
      include:{
        seqRun:{
          select:{
            name: true,
            seqDate: true,
            machine: true,
            memo: true,
          }
        },
        dnaLibrary:{
          include:{
            dnaLibMultiplex:{
              include:{
                i7Primer: true,
                i5Primer: true,
              }
            }
          }
        },
        rnaLibrary:{
          include:{
            rnaLibMultiplex:{
              include:{
                i7Primer: true,
                i5Primer: true,
              }
            }
          }
        }
      }
    })
    return seqLibrarys.map(aObject => flattenObject(aObject, '') )
  } catch (error) {
    return error
  }
}

export async function createSeqLibrary(seqLibrary) {
  try {
    const seqLibraryFromDB = await prisma.seqLibrary.create({ data: seqLibrary })
    // console.log(seqLibraryFromDB)
    return seqLibraryFromDB
  } catch (error) {
    return error
  }
}


export async function updateSeqLibrary(uid, newdata){
  try{

    const updatedSeqLibrary = await prisma.seqLibrary.update({
      where: {
        id: uid ,
      },
      data: newdata,
    })
    return updatedSeqLibrary

  } catch (error) {
    return error
  }
}


export async function deleteSeqLibrary(uid){
  try{

    const deleted = await prisma.seqLibrary.delete({
      where: {
        id: uid ,
      },
    })
    return deleted

  } catch (error) {
    return error
  }
}

export async function getSeqLibrary(uid){
  try{
      const aSeqLibrary = await prisma.seqLibrary.findUnique({
        where: {
          id: uid ,
        },
        include:{
          seqRun:{
            select:{
              name: true,
              seqDate: true,
              machine: true,
              memo: true,
            }
          },
          dnaLibrary:{
            include:{
              dnaLibMultiplex:{
                include:{
                  i7Primer: true,
                  i5Primer: true,
                }
              }
            }

          },
          rnaLibrary:{
            include:{
              rnaLibMultiplex:{
                include:{
                  i7Primer: true,
                  i5Primer: true,
                }
              }
            }
          }
        }
      })
    return flattenObject(aSeqLibrary, '')

  } catch (error) {
    return error
  }
}