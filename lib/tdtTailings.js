import { prisma } from "./prisma.js"
import flattenObject from "./utils/flattenObject.js"

export async function getTdtTailings() {
  try {
    const tdtTailings = await prisma.tdtTailing.findMany({
      orderBy: [
        {createdAt: 'desc',},
      ],
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
    return tdtTailings.map(aObject => flattenObject(aObject, '') )
  } catch (error) {
    return error
  }
}

export async function createTdtTailing(tdtTailing) {
  try {
    const tdtTailingFromDB = await prisma.tdtTailing.create({ data: tdtTailing })
    return tdtTailingFromDB
  } catch (error) {
    return error
  }
}


export async function updateTdtTailing(uid, newdata){
  try{

    const updatedTdtTailing = await prisma.tdtTailing.update({
      where: {
        id: uid ,
      },
      data: newdata,
    })
    return updatedTdtTailing

  } catch (error) {
    return error
  }
}


export async function deleteTdtTailing(uid){
  try{

    const deleted = await prisma.tdtTailing.delete({
      where: {
        id: uid ,
      },
    })
    return deleted

  } catch (error) {
    return error
  }
}

export async function getTdtTailing(uid){
  try{
      const aTdtTailing = await prisma.tdtTailing.findUnique({
        where: {
          id: uid ,
        },
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
    return flattenObject(aTdtTailing, '')

  } catch (error) {
    return error
  }
}