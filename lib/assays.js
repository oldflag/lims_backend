import { prisma } from "./prisma.js"
import flattenObject from "./utils/flattenObject.js"

export async function getAssays() {
  try {
    const assays = await prisma.assay.findMany({
      orderBy: [
        {createdAt: 'desc',},
      ],
      include:{
        sample:{
          select:{
            name: true,
          }
        },
        experiment:{
          select:{
            name: true,
          }
        },
        batch:{
          select:{
            id: true,
            name: true,
          }
        },
        antibody:{
          select:{
            name: true,
            target: true,
          }
        }

      }
    })
    return assays.map(aObject => flattenObject(aObject, '') )
  } catch (error) {
    return error
  }
}

export async function createAssay(assay) {
  try {
    const assayFromDB = await prisma.assay.create({ data: assay })
    return assayFromDB
  } catch (error) {
    return error
  }
}


export async function importAssay(assay) {
  // console.log(assay)
  try {
    const assayFromDB = await prisma.assay.create({ 
      data: {
        sample: {
          connect: {
            //where: {
              name: assay.sample_name,
            //},
          },
        },
        experiment: {
          connect: {
            //where: {
              name: assay.experiment_name,
            //},
          },
        },
        batch: {
          connect: {
            //where: {
              name: assay.batch_name,
            //},
          },
        },
        antibody: {
          connect: {
            //where: {
              name: assay.antibody_name,
            //},
          },
        },
        // loadPatn5Name: {
        //   connect: {
        //     where: {
        //       loadName: assay.loadPatn5_name,
        //     }
        //   }
        // },
        numOfNuclei: assay.numOfNuclei,
        tubeNum: +assay.tubeNum,
        barcode: assay.barcode,
        antibodyConcentration:assay.antibodyConcentration,
        antibodyConcUnit: assay.antibodyConcUnit,
        antibodyVolume: assay.antibodyVolume,
        antibodyVolUnit: assay.antibodyVolUnit,
        assayDate: assay.assayDate,
      },
    })
    return assayFromDB
  } catch (error) {
    // console.log(error)
    return error
  }
}



export async function updateAssay(uid, newdata){
  try{

    const updatedAssay = await prisma.assay.update({
      where: {
        id: uid ,
      },
      data: newdata,
    })
    return updatedAssay

  } catch (error) {
    return error
  }
}


export async function deleteAssay(uid){
  try{

    const deleted = await prisma.assay.delete({
      where: {
        id: uid ,
      },
    })
    return deleted

  } catch (error) {
    return error
  }
}

export async function getAssay(uid){
  try{
      const aAssay = await prisma.assay.findUnique({
        where: {
          id: uid ,
        },
        include:{
          sample:{
            select:{
              name: true,
            }
          },
          experiment:{
            select:{
              name: true,
            }
          },
          batch:{
            select:{
              id: true,
              name: true,
            }
          },
          antibody:{
            select:{
              name: true,
              target: true,
            }
          }
        }
      })
    return flattenObject(aAssay, '')

  } catch (error) {
    return error
  }
}