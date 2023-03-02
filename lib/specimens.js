import { prisma } from "./prisma.js"
import flattenObject from "./utils/flattenObject.js"

export async function getSpecimens() {
  try {
    const specimens = await prisma.specimen.findMany({
      include:{
        donor:{
          select:{
            name: true,
          }
        }
      }
    })
    return specimens.map(aObject => flattenObject(aObject, '') )
  } catch (error) {
    return error
  }
}

export async function createSpecimen(specimen) {
  try {
    const specimenFromDB = await prisma.specimen.create({ data: specimen })
    return specimenFromDB
  } catch (error) {
    return error
  }
}


export async function updateSpecimen(uid, newdata){
  try{

    const updatedSpecimen = await prisma.specimen.update({
      where: {
        id: uid ,
      },
      data: newdata,
    })
    return updatedSpecimen

  } catch (error) {
    return error
  }
}


export async function deleteSpecimen(uid){
  try{

    const deleted = await prisma.specimen.delete({
      where: {
        id: uid ,
      },
    })
    return deleted

  } catch (error) {
    return error
  }
}

export async function getSpecimen(uid){
  try{
      const aSpecimen = await prisma.specimen.findUnique({
        where: {
          id: uid ,
        },
        include:{
          donor:{
            select:{
              name: true,
            }
          }
        }
      })
    return flattenObject(aSpecimen, '')

  } catch (error) {
    return error
  }
}