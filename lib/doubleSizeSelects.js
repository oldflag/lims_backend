import { prisma } from "./prisma.js"
import flattenObject from "./utils/flattenObject.js"

export async function getDoubleSizeSelects() {
  try {
    const doubleSizeSelects = await prisma.doubleSizeSelect.findMany({
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
    return doubleSizeSelects.map(aObject => flattenObject(aObject, '') )
  } catch (error) {
    return error
  }
}

export async function createDoubleSizeSelect(doubleSizeSelect) {
  try {
    const doubleSizeSelectFromDB = await prisma.doubleSizeSelect.create({ data: doubleSizeSelect })
    return doubleSizeSelectFromDB
  } catch (error) {
    return error
  }
}


export async function updateDoubleSizeSelect(uid, newdata){
  try{

    const updatedDoubleSizeSelect = await prisma.doubleSizeSelect.update({
      where: {
        id: uid ,
      },
      data: newdata,
    })
    return updatedDoubleSizeSelect

  } catch (error) {
    return error
  }
}


export async function deleteDoubleSizeSelect(uid){
  try{

    const deleted = await prisma.doubleSizeSelect.delete({
      where: {
        id: uid ,
      },
    })
    return deleted

  } catch (error) {
    return error
  }
}

export async function getDoubleSizeSelect(uid){
  try{
      const aDoubleSizeSelect = await prisma.doubleSizeSelect.findUnique({
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
    return flattenObject(aDoubleSizeSelect, '')

  } catch (error) {
    return error
  }
}