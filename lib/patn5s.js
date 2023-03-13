import { prisma } from "./prisma.js"

export async function getPatn5s() {
  try {
    const patn5s = await prisma.patn5.findMany()
    return patn5s
  } catch (error) {
    return error
  }
}

export async function createPatn5(patn5) {
  try {
    // console.log(patn5)
    const patn5FromDB = await prisma.patn5.create({ data: patn5 })
    return patn5FromDB
  } catch (error) {
    return error
  }
}


export async function updatePatn5(uid, newdata){
  try{

    const updatedPatn5 = await prisma.patn5.update({
      where: {
        id: uid ,
      },
      data: newdata,
    })
    return updatedPatn5

  } catch (error) {
    return error
  }
}


export async function deletePatn5(uid){
  try{

    const deleted = await prisma.patn5.delete({
      where: {
        id: uid ,
      },
    })
    return deleted

  } catch (error) {
    return error
  }
}

export async function getPatn5(uid){
  try{
      const aPatn5 = await prisma.patn5.findUnique({
        where: {
          id: uid ,
        },
      })
    return aPatn5

  } catch (error) {
    return error
  }
}
