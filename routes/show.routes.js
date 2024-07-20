import express from 'express';
const router = express.Router();

import {getProfile} from '../controller/profile.controller.js';
import { getExp } from '../controller/exp.controller.js';
import { getSkills } from '../controller/skills.controller.js';
import { getProjects,getPorject } from '../controller/project.controller.js';


router.get('/profile', getProfile);
router.get('/exp', getExp);
router.get('/skills', getSkills);
router.get('/projects', getProjects);
router.get('/project/:id', getPorject);

export default router;