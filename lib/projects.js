import { prisma } from "./prisma.js"
import flattenObject from "./utils/flattenObject.js"

export async function getProjects() {
  try {
    const projects = await prisma.project.findMany({
      include:{
        collaborator:{
          select:{
            name: true,
          }
        }
      }
    })
    return projects.map(aObject => flattenObject(aObject, '') )
  } catch (error) {
    return error
  }
}

export async function createProject(project) {
  try {
    const projectFromDB = await prisma.project.create({ data: project })
    console.log(projectFromDB)
    return projectFromDB
  } catch (error) {
    return error
  }
}


export async function updateProject(uid, newdata){
  try{

    const updatedProject = await prisma.project.update({
      where: {
        id: uid ,
      },
      data: newdata,
    })
    return updatedProject

  } catch (error) {
    return error
  }
}


export async function deleteProject(uid){
  try{

    const deleted = await prisma.project.delete({
      where: {
        id: uid ,
      },
    })
    return deleted

  } catch (error) {
    return error
  }
}

export async function getProject(uid){
  try{
      const aProject = await prisma.project.findUnique({
        where: {
          id: uid ,
        },
        include:{
          collaborator:{
            select:{
              name: true,
            }
          }
        }
      })
    return flattenObject(aProject, '')

  } catch (error) {
    return error
  }
}