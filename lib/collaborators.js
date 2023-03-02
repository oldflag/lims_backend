import { prisma } from "./prisma.js"

export async function getCollaborators() {
  try {
    const collaborators = await prisma.collaborator.findMany()
    return collaborators
  } catch (error) {
    return error
  }
}

export async function createCollaborator(collaborator) {
  try {
    const collaboratorFromDB = await prisma.collaborator.create({ data: collaborator })
    return collaboratorFromDB
  } catch (error) {
    return error
  }
}


export async function updateCollaborator(uid, newdata){
  try{

    const updatedCollaborator = await prisma.collaborator.update({
      where: {
        id: uid ,
      },
      data: newdata,
    })
    return updatedCollaborator

  } catch (error) {
    return error
  }
}


export async function deleteCollaborator(uid){
  try{

    const deleted = await prisma.collaborator.delete({
      where: {
        id: uid ,
      },
    })
    return deleted

  } catch (error) {
    return error
  }
}
