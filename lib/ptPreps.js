import { prisma } from "./prisma.js"
import flattenObject from "./utils/flattenObject.js"

export async function getPtPreps() {
  try {
    const ptPreps = await prisma.ptPrep.findMany({
      orderBy: [
        {createdAt: 'desc',},
      ],
      include:{
        assay:{
          select:{
            tubeNum: true,
            batch: {
              select:{
                name: true,
              }
            }
          }
        },
        nucleiIncubation:{
          select:{
            status:true,
          }
        },
        washAndTag:{
          select:{
            status:true,
          }
        },
        rnaRT:{
          select:{
            status:true,
          }
        }
      },
    })
    return ptPreps.map(aObject => flattenObject(aObject, '') )
  } catch (error) {
    return error
  }
}

export async function createPtPrep(ptprep) {
  try {
    const ptPrepFromDB = await prisma.ptPrep.create({ data: ptprep })
    return ptPrepFromDB
  } catch (error) {
    return error
  }
}


export async function updatePtPrep(uid, newdata){
  try{

    const updatedPtPrep = await prisma.ptPrep.update({
      where: {
        id: uid ,
      },
      data: newdata,
    })
    return updatedPtPrep

  } catch (error) {
    return error
  }
}


export async function deletePtPrep(uid){
  try{

    const deleted = await prisma.ptPrep.delete({
      where: {
        id: uid ,
      },
    })
    return deleted

  } catch (error) {
    return error
  }
}

export async function getPtPrep(uid){
  try{
      const aPtPrep = await prisma.ptPrep.findUnique({
        where: {
          id: uid ,
        },
        include:{
          assay:{
            select:{
              tubeNum: true,
              batch: {
                select:{
                  name: true,
                }
              }
            }
          },
          nucleiIncubation:{
            select:{
              status:true,
            }
          },
          washAndTag:{
            select:{
              status:true,
            }
          },
          rnaRT:{
            select:{
              status:true,
            }
          }
        },
      })
    return flattenObject(aPtPrep, '')

  } catch (error) {
    return error
  }
}