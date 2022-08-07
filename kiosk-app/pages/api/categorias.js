import {Prisma, PrismaClient} from '@prisma/client'
const prisma = new PrismaClient
export default async function handler(req, res) {
  const categorias = await prisma.categoria.findMany({
   // Esto lo que hace es que nuetra api se trae los productos realacionados a la caategoriax
    include:{
      productos:true
    }
  });
  res.status(200).json(categorias)  


}
