import { prisma } from "./prisma.js"
import flattenObject from "./utils/flattenObject.js"

export async function getDnaSplitEnzymes() {
  try {
    const dnaSplitEnzymes = await prisma.dnaSplitEnzyme.findMany({
        include:{
          dnaLibrary:{
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
    return dnaSplitEnzymes.map(aObject => flattenObject(aObject, '') )
  } catch (error) {
    return error
  }
}

export async function createDnaSplitEnzyme(dnaSplitEnzyme) {
  try {
    const dnaSplitEnzymeFromDB = await prisma.dnaSplitEnzyme.create({ data: dnaSplitEnzyme })
    return dnaSplitEnzymeFromDB
  } catch (error) {
    return error
  }
}


export async function updateDnaSplitEnzyme(uid, newdata){
  try{

    const updatedDnaSplitEnzyme = await prisma.dnaSplitEnzyme.update({
      where: {
        id: uid ,
      },
      data: newdata,
    })
    return updatedDnaSplitEnzyme

  } catch (error) {
    return error
  }
}


export async function deleteDnaSplitEnzyme(uid){
  try{

    const deleted = await prisma.dnaSplitEnzyme.delete({
      where: {
        id: uid ,
      },
    })
    return deleted

  } catch (error) {
    return error
  }
}

export async function getDnaSplitEnzyme(uid){
  try{
      const aDnaSplitEnzyme = await prisma.dnaSplitEnzyme.findUnique({
        where: {
          id: uid ,
        },
        include:{
          dnaLibrary:{
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
    return flattenObject(aDnaSplitEnzyme, '')

  } catch (error) {
    return error
  }
}