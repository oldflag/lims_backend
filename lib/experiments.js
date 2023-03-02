import { prisma } from "./prisma.js"
import flattenObject from "./utils/flattenObject.js"

export async function getExperiments() {
  try {
    const experiments = await prisma.experiment.findMany({
      include:{
        project:{
          select:{
            name: true,
          }
        }
      }
    })
    return experiments.map(aObject => flattenObject(aObject, '') )
  } catch (error) {
    return error
  }
}

export async function createExperiment(experiment) {
  try {
    const experimentFromDB = await prisma.experiment.create({ data: experiment })
    console.log(experimentFromDB)
    return experimentFromDB
  } catch (error) {
    return error
  }
}


export async function updateExperiment(uid, newdata){
  try{

    const updatedExperiment = await prisma.experiment.update({
      where: {
        id: uid ,
      },
      data: newdata,
    })
    return updatedExperiment

  } catch (error) {
    return error
  }
}


export async function deleteExperiment(uid){
  try{

    const deleted = await prisma.experiment.delete({
      where: {
        id: uid ,
      },
    })
    return deleted

  } catch (error) {
    return error
  }
}

export async function getExperiment(uid){
  try{
      const aExperiment = await prisma.experiment.findUnique({
        where: {
          id: uid ,
        },
        include:{
          project:{
            select:{
              name: true,
            }
          }
        }
      })
    return flattenObject(aExperiment, '')

  } catch (error) {
    return error
  }
}