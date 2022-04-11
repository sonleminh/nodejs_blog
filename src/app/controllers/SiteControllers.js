class SiteControllers {
    // [GET] /
    index(req, res) {
        res.render('home');
    }

    // [GET] /news/search
    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteControllers();