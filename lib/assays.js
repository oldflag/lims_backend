import { prisma } from "./prisma.js"
import flattenObject from "./utils/flattenObject.js"

export async function getAssays() {
  try {
    const assays = await prisma.assay.findMany({
      include:{
        sample:{
          select:{
            name: true,
          }
        },
        experiment:{
          select:{
            name: true,
          }
        },
        batch:{
          select:{
            name: true,
          }
        },
        antibody:{
          select:{
            name: true,
          }
        }

      }
    })
    return assays.map(aObject => flattenObject(aObject, '') )
  } catch (error) {
    return error
  }
}

export async function createAssay(assay) {
  try {
    const assayFromDB = await prisma.assay.create({ data: assay })
    return assayFromDB
  } catch (error) {
    return error
  }
}


export async function updateAssay(uid, newdata){
  try{

    const updatedAssay = await prisma.assay.update({
      where: {
        id: uid ,
      },
      data: newdata,
    })
    return updatedAssay

  } catch (error) {
    return error
  }
}


export async function deleteAssay(uid){
  try{

    const deleted = await prisma.assay.delete({
      where: {
        id: uid ,
      },
    })
    return deleted

  } catch (error) {
    return error
  }
}

export async function getAssay(uid){
  try{
      const aAssay = await prisma.assay.findUnique({
        where: {
          id: uid ,
        },
        include:{
          sample:{
            select:{
              name: true,
            }
          },
          experiment:{
            select:{
              name: true,
            }
          },
          batch:{
            select:{
              name: true,
            }
          },
          antibody:{
            select:{
              name: true,
            }
          }
        }
      })
    return flattenObject(aAssay, '')

  } catch (error) {
    return error
  }
}