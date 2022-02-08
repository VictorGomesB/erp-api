const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

module.exports = {
    async getAll() {
        /* const { page = 1 } = req.query; */
        const result = await prisma.product.findMany();
        return result;
    },
    async getById(id) {
        /* const product = await Product.findById(req.params.id); */
        const result = await prisma.product.findUnique({
            where: {
                id: Number(id),
            },
        });

        return result;
    },
    async store(product) {
        const result = await prisma.product.create({
            data: product,
        });
        return result;
    },
    async update(product) {
        const result = await prisma.product.update({
            where: { id: Number(product.id) },
            data: {
                name: product.name,
                description: product.description,
                value: product.value,
            },
        });
        return result;
    },

    async destroy(id) {
        const result = await prisma.product.delete({
            where: { id: id },
        });
        return result;
    },
};
