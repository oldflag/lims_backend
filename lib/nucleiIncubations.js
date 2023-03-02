import { prisma } from "./prisma.js"
import flattenObject from "./utils/flattenObject.js"

export async function getNucleiIncubations() {
  try {
    const nucleiIncubations = await prisma.nucleiIncubation.findMany({
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
          }
        },
    })
    return nucleiIncubations.map(aObject => flattenObject(aObject, '') )
  } catch (error) {
    return error
  }
}

export async function createNucleiIncubation(nucleiIncubation) {
  try {
    const nucleiIncubationFromDB = await prisma.nucleiIncubation.create({ data: nucleiIncubation })
    return nucleiIncubationFromDB
  } catch (error) {
    return error
  }
}


export async function updateNucleiIncubation(uid, newdata){
  try{

    const updatedNucleiIncubation = await prisma.nucleiIncubation.update({
      where: {
        id: uid ,
      },
      data: newdata,
    })
    return updatedNucleiIncubation

  } catch (error) {
    return error
  }
}


export async function deleteNucleiIncubation(uid){
  try{

    const deleted = await prisma.nucleiIncubation.delete({
      where: {
        id: uid ,
      },
    })
    return deleted

  } catch (error) {
    return error
  }
}

export async function getNucleiIncubation(uid){
  try{
      const aNucleiIncubation = await prisma.nucleiIncubation.findUnique({
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
          }
        },
      })
    return flattenObject(aNucleiIncubation, '')

  } catch (error) {
    return error
  }
}