module.exports = {
    development: {
            mongoDB: {
                uri: "mongodb://localhost:27017",
                option: {
                    poolSize: 5,
                    useUnifiedTopology: true,
                    useNewUrlParser: true,
                    useCreateIndex: true,
                }
        },
    }
}