import { prisma } from "./prisma.js"
import flattenObject from "./utils/flattenObject.js"

export async function getQuotes() {
  try {
    const quotes = await prisma.quote.findMany({
      include:{
        collaborator:{
          select:{
            name: true,
          }
        }
      }
    })
    return quotes.map(aObject => flattenObject(aObject, '') )
  } catch (error) {
    return error
  }
}

export async function createQuote(quote) {
  try {
    // console.log(quote)
    const quoteFromDB = await prisma.quote.create({ data: quote })
    // console.log(quoteFromDB)
    return quoteFromDB
  } catch (error) {
    return error
  }
}

export async function createQuotes(quotes) {
  try {
    const quotesFromDB = await prisma.quote.createMany({ data: quotes, skipDuplicates: true,  })
    return quotesFromDB
  } catch (error) {
    return error
  }
}


export async function updateQuote(uid, newdata){
  try{

    const updatedQuote = await prisma.quote.update({
      where: {
        id: uid ,
      },
      data: newdata,
    })
    return updatedQuote

  } catch (error) {
    return error
  }
}


export async function deleteQuote(uid){
  try{

    const deleted = await prisma.quote.delete({
      where: {
        id: uid ,
      },
    })
    return deleted

  } catch (error) {
    return error
  }
}

export async function getQuote(uid){
  try{
      const aQuote = await prisma.quote.findUnique({
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
    return flattenObject(aQuote, '')

  } catch (error) {
    return error
  }
}
