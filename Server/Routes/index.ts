import express from 'express';
import { DisplayAboutPage, DisplayContactPage, DisplayHomePage } from '../Controllers';

const router = express.Router();

export default router;

/* GET home page. */
router.get('/', DisplayHomePage);

/* GET home page2. */
router.get('/home', DisplayHomePage);

/* GET about page. */
router.get('/aboutMe', DisplayAboutPage);

/* GET contact page. */
router.get('/projects', DisplayContactPage);

