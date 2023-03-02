import { prisma } from "./prisma.js"

export async function getAntibodies() {
  try {
    const antibodies = await prisma.antibody.findMany()
    return antibodies
  } catch (error) {
    return error
  }
}

export async function createAntibody(antibody) {
  try {
    const antibodyFromDB = await prisma.antibody.create({ data: antibody })
    return antibodyFromDB
  } catch (error) {
    return error
  }
}


export async function updateAntibody(uid, newdata){
  try{

    const updatedAntibody = await prisma.antibody.update({
      where: {
        id: uid ,
      },
      data: newdata,
    })
    return updatedAntibody

  } catch (error) {
    return error
  }
}


export async function deleteAntibody(uid){
  try{

    const deleted = await prisma.antibody.delete({
      where: {
        id: uid ,
      },
    })
    return deleted

  } catch (error) {
    return error
  }
}
