"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DisplayAboutPage = DisplayAboutPage;
exports.DisplayHomePage = DisplayHomePage;
exports.DisplayContactPage = DisplayContactPage;
function DisplayAboutPage(req, res, next) {
    res.render('content/aboutMe', { title: 'About' });
}
function DisplayHomePage(req, res, next) {
    res.render('index', { title: 'Home' });
}
function DisplayContactPage(req, res, next) {
    res.render('content/contactMe', { title: 'Contact' });
}
//# sourceMappingURL=index.js.map