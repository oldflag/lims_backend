import { prisma } from "./prisma.js"
import flattenObject from "./utils/flattenObject.js"

export async function getTapeStations() {
  try {
    const tapeStations = await prisma.tapeStation.findMany({
      orderBy: [
        {createdAt: 'desc',},
      ],
      include:{
        dnaLibrary:{
          select:{
            name:true,
            lysis:{
              select:{
                batch:{
                  select:{
                    name:true
                  }
                }
              }
            }
          }
        },
        rnaLibrary:{
          select:{
            name:true,
            lysis:{
              select:{
                batch:{
                  select:{
                    name:true
                  }
                }
              }
            }
          }
        },
      }
    })
    return tapeStations.map(aObject => flattenObject(aObject, '') ) 
  } catch (error) {
    return error
  }
}

export async function createTapeStation(tapeStation) {
  try {
    const tapeStationFromDB = await prisma.tapeStation.create({ data: tapeStation })
    return tapeStationFromDB
  } catch (error) {
    return error
  }
}

export async function updateTapeStation(uid, newdata){
  try{

    const updatedTapeStation = await prisma.tapeStation.update({
      where: {
        id: uid ,
      },
      data: newdata,
    })
    return updatedTapeStation

  } catch (error) {
    return error
  }
}


export async function deleteTapeStation(uid){
  try{

    const deleted = await prisma.tapeStation.delete({
      where: {
        id: uid ,
      },
    })
    return deleted

  } catch (error) {
    return error
  }
}

export async function getTapeStation(uid) {
  try {
    const aTapeStation = await prisma.tapeStation.findUnique({
      where: {
        id: uid ,
      },
      include:{
        dnaLibrary:{
          select:{
            name:true,
            lysis:{
              select:{
                batch:{
                  select:{
                    name:true
                  }
                }
              }
            }
          }
        },
        rnaLibrary:{
          select:{
            name:true,
            lysis:{
              select:{
                batch:{
                  select:{
                    name:true
                  }
                }
              }
            }
          }
        },
      }
    })
    return flattenObject(aTapeStation, '')
  } catch (error) {
    return error
  }
}
