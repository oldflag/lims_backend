import { prisma } from "./prisma.js"
import flattenObject from "./utils/flattenObject.js"

export async function getSamples() {
  try {
    const samples = await prisma.sample.findMany({
      include:{
        specimen:{
          select:{
            name: true,
          }
        }
      }
    })
    return samples.map(aObject => flattenObject(aObject, '') )
  } catch (error) {
    return error
  }
}

export async function createSample(sample) {
  try {
    const sampleFromDB = await prisma.sample.create({ data: sample })
    return sampleFromDB
  } catch (error) {
    return error
  }
}


export async function updateSample(uid, newdata){
  try{

    const updatedSample = await prisma.sample.update({
      where: {
        id: uid ,
      },
      data: newdata,
    })
    return updatedSample

  } catch (error) {
    return error
  }
}


export async function deleteSample(uid){
  try{

    const deleted = await prisma.sample.delete({
      where: {
        id: uid ,
      },
    })
    return deleted

  } catch (error) {
    return error
  }
}

export async function getSample(uid){
  try{
      const aSample = await prisma.sample.findUnique({
        where: {
          id: uid ,
        },
        include:{
          specimen:{
            select:{
              name: true,
            }
          }
        }
      })
    return flattenObject(aSample, '')

  } catch (error) {
    return error
  }
}