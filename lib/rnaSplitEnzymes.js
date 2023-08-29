import { prisma } from "./prisma.js"
import flattenObject from "./utils/flattenObject.js"

export async function getRnaSplitEnzymes() {
  try {
    const rnaSplitEnzymes = await prisma.rnaSplitEnzyme.findMany({
      orderBy: [
        {createdAt: 'desc',},
      ],
      include:{
        rnaLibrary:{
          select:{
            name:true,
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
        }  
      }
    })
    return rnaSplitEnzymes.map(aObject => flattenObject(aObject, '') )
  } catch (error) {
    return error
  }
}

export async function createRnaSplitEnzyme(rnaSplitEnzyme) {
  try {
    const rnaSplitEnzymeFromDB = await prisma.rnaSplitEnzyme.create({ data: rnaSplitEnzyme })
    return rnaSplitEnzymeFromDB
  } catch (error) {
    return error
  }
}


export async function updateRnaSplitEnzyme(uid, newdata){
  try{

    const updatedRnaSplitEnzyme = await prisma.rnaSplitEnzyme.update({
      where: {
        id: uid ,
      },
      data: newdata,
    })
    return updatedRnaSplitEnzyme

  } catch (error) {
    return error
  }
}


export async function deleteRnaSplitEnzyme(uid){
  try{

    const deleted = await prisma.rnaSplitEnzyme.delete({
      where: {
        id: uid ,
      },
    })
    return deleted

  } catch (error) {
    return error
  }
}

export async function getRnaSplitEnzyme(uid){
  try{
      const aRnaSplitEnzyme = await prisma.rnaSplitEnzyme.findUnique({
        where: {
          id: uid ,
        },
        include:{
        rnaLibrary:{
          select:{
            name:true,
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
        }  
      }
      })
    return flattenObject(aRnaSplitEnzyme, '')

  } catch (error) {
    return error
  }
}