module.exports = {
    getIndex: (req, res) => {
        res.render('index')
    },
    getHomePage: (req, res) => {
        res.render('home')
    }
}