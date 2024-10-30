import express from 'express';

const router = express.Router();

export default router;

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
});

/* GET home page2. */
router.get('/home', function(req, res, next) {
  res.render('index', { title: 'Home' });
});

/* GET about page. */
router.get('/aboutMe', function(req, res, next) {
  res.render('content/aboutMe', { title: 'About' });
});

/* GET contact page. */
router.get('/contactMe', function(req, res, next) {
  res.render('content/contactMe', { title: 'Contact' });
});

