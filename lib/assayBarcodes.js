import { prisma } from "./prisma.js"

export async function getAssayBarcodes() {
  try {
    const assayBarcodes = await prisma.assayBarcode.findMany()
    return assayBarcodes
  } catch (error) {
    return error
  }
}

// export async function createAssayBarcode(assayBarcode) {
//   try {
//     const assayBarcodeFromDB = await prisma.assayBarcode.create({ data: assayBarcode })
//     return assayBarcodeFromDB
//   } catch (error) {
//     return error
//   }
// }


// export async function updateAssayBarcode(uid, newdata){
//   try{

//     const updatedAssayBarcode = await prisma.assayBarcode.update({
//       where: {
//         id: uid ,
//       },
//       data: newdata,
//     })
//     return updatedAssayBarcode

//   } catch (error) {
//     return error
//   }
// }


// export async function deleteAssayBarcode(uid){
//   try{

//     const deleted = await prisma.assayBarcode.delete({
//       where: {
//         id: uid ,
//       },
//     })
//     return deleted

//   } catch (error) {
//     return error
//   }
// }

// export async function getAssayBarcode(uid){
//   try{
//       const aAssayBarcode = await prisma.assayBarcode.findUnique({
//         where: {
//           id: uid ,
//         },
//       })
//     return aAssayBarcode

//   } catch (error) {
//     return error
//   }
// }
