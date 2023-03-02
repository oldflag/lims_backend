import { prisma } from "./prisma.js"
import flattenObject from "./utils/flattenObject.js"

export async function getWashAndTags() {
  try {
    const washAndTags = await prisma.washAndTag.findMany({
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
    return washAndTags.map(aObject => flattenObject(aObject, '') )
  } catch (error) {
    return error
  }
}

export async function createWashAndTag(washAndTag) {
  try {
    const washAndTagFromDB = await prisma.washAndTag.create({ data: washAndTag })
    return washAndTagFromDB
  } catch (error) {
    return error
  }
}


export async function updateWashAndTag(uid, newdata){
  try{

    const updatedWashAndTag = await prisma.washAndTag.update({
      where: {
        id: uid ,
      },
      data: newdata,
    })
    return updatedWashAndTag

  } catch (error) {
    return error
  }
}


export async function deleteWashAndTag(uid){
  try{

    const deleted = await prisma.washAndTag.delete({
      where: {
        id: uid ,
      },
    })
    return deleted

  } catch (error) {
    return error
  }
}

export async function getWashAndTag(uid){
  try{
      const aWashAndTag = await prisma.washAndTag.findUnique({
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
    return flattenObject(aWashAndTag, '')

  } catch (error) {
    return error
  }
}