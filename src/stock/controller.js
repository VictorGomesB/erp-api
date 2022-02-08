const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

module.exports = {
    async getAll() {
        /* const { page = 1 } = req.query; */
        const result = await prisma.stock.findMany();
        return result;
    },
    async getById(id) {
        /* const product = await Product.findById(req.params.id); */
        const result = await prisma.stock.findUnique({
            where: {
                id: Number(id),
            },
        });

        return result;
    },
    async getItems(id) {
        const result = await prisma.stockItem.findMany({
            where: {
                stockId: Number(id),
            },
        });

        return result;
    },
    async store(stock) {
        const result = await prisma.stock.create({
            data: stock,
        });
        return result;
    },
    async storeItems(stockItems) {
        const result = await prisma.stockItem.createMany({
            data: stockItems,
        });
        return result;
    },
    async update(stock) {
        const result = await prisma.stock.update({
            where: { id: Number(stock.id) },
            data: {
                name: stock.name,
            },
        });
        return result;
    },

    async destroy(id) {
        const result = await prisma.stock.delete({
            where: { id: Number(id) },
        });
        return result;
    },

    async destroyItem(id) {
        const result = await prisma.stockItem.delete({
            where: { id: Number(id) },
        });
        return result;
    },
};
