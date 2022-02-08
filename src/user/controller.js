const { PrismaClient } = require("@prisma/client");
const res = require("express/lib/response");
const prisma = new PrismaClient();

module.exports = {
    async signIn(user) {
        const result = await prisma.user.findMany({
            where: {
                email: user.email,
                password: user.password,
            },
        });
        console.log(user);
        console.log(result);
        return result.length === 0 ? false : true;
    },
    async getAll() {
        /* const { page = 1 } = req.query; */
        const result = await prisma.user.findMany();
        return result;
    },
    async getById(id) {
        /* const product = await Product.findById(req.params.id); */
        const result = await prisma.user.findUnique({
            where: {
                id: Number(id),
            },
        });

        return result;
    },
    async store(user) {
        const result = await prisma.user.create({
            data: user,
        });
        return result;
    },
    async update(user) {
        const result = await prisma.user.update({
            where: { id: Number(user.id) },
            data: {
                name: user.name,
                email: user.email,
                password: user.password,
            },
        });
        return result;
    },

    async destroy(id) {
        const result = await prisma.user.delete({
            where: { id: id },
        });
        return result;
    },
};
