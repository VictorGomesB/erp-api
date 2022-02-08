const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

module.exports = {
    async getAll() {
        /* const { page = 1 } = req.query; */
        const result = await prisma.sale.findMany();
        return result;
    },
    async getSaleItems(id) {
        /* const { page = 1 } = req.query; */
        const result = await prisma.saleItem.findMany({
            where: {
                saleId: Number(id),
            },
        });
        return result;
    },
    async getById(id) {
        /* const product = await Product.findById(req.params.id); */
        const result = await prisma.sale.findUnique({
            where: {
                id: Number(id),
            },
        });

        return result;
    },
    async store(sale) {
        const { id } = await prisma.sale.create({
            data: {
                payment: sale.payment,
                date: new Date(sale.date),
                clientId: sale.clientId,
            },
            select: {
                id: true,
            },
        });
        const items = sale.saleItems.map((item) => {
            return {
                productId: item.productId,
                saleId: id,
                quantity: item.quantity,
            };
        });

        const itemsCount = await prisma.saleItem.createMany({
            data: items,
        });

        const result = {
            saleId: id,
            itemsCreated: itemsCount,
        };
        return result;
    },
    async update(sale) {
        const result = await prisma.sale.update({
            where: { id: Number(sale.id) },
            data: {
                payment: sale.payment,
                date: sale.date,
                client: sale.client,
            },
        });
        return result;
    },

    async destroy(id) {
        const result = await prisma.sale.delete({
            where: { id: Number(id) },
        });
        return result;
    },
};
