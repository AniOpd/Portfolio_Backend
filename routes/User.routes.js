import {login,resetPassword} from '../controller/User.controller.js';
import express from 'express';



const router = express.Router();

// router.post('/register',register);
router.post('/login',login);
router.post('/resetPassword/:email',resetPassword);

export default router;