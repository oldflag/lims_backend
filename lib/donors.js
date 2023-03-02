import { prisma } from "./prisma.js"
import flattenObject from "./utils/flattenObject.js"

export async function getDonors() {
  try {
    const donors = await prisma.donor.findMany({
      include:{
        collaborator:{
          select:{
            name: true,
          }
        }
      }
    })
    return donors.map(aObject => flattenObject(aObject, '') )
  } catch (error) {
    return error
  }
}

export async function createDonor(donor) {
  try {
    const donorFromDB = await prisma.donor.create({ data: donor })
    return donorFromDB
  } catch (error) {
    return error
  }
}


export async function updateDonor(uid, newdata){
  try{

    const updatedDonor = await prisma.donor.update({
      where: {
        id: uid ,
      },
      data: newdata,
    })
    return updatedDonor

  } catch (error) {
    return error
  }
}


export async function deleteDonor(uid){
  try{

    const deleted = await prisma.donor.delete({
      where: {
        id: uid ,
      },
    })
    return deleted

  } catch (error) {
    return error
  }
}

export async function getDonor(uid){
  try{
      const aDonor = await prisma.donor.findUnique({
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
    return flattenObject(aDonor, '')

  } catch (error) {
    return error
  }
}
