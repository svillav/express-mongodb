module.exports = {
    port: process.env.PORT || 3000,
    db: process.env.MONGODB || 'mongodb+srv://SantiagoVilla-505:5697965mdb@cluster0.qr7pl.mongodb.net/vue-express?retryWrites=true&w=majority',
    SECRET_TOKEN: 'tokenkey'
}