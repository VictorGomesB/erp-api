const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

module.exports = {
    async getAll() {
        /* const { page = 1 } = req.query; */
        const result = await prisma.client.findMany();
        return result;
    },
    async getById(id) {
        const result = await prisma.client.findUnique({
            where: {
                id: Number(id),
            },
        });

        return result;
    },
    async store(client) {
        const result = await prisma.client.create({
            data: client,
        });
        return result;
    },
    async update(client) {
        const result = await prisma.client.update({
            where: { id: Number(client.id) },
            data: {
                name: client.name,
                document: client.document,
                email: client.email,
            },
        });
        return result;
    },

    async destroy(id) {
        const result = await prisma.client.delete({
            where: { id: Number(id) },
        });
        return result;
    },
};
