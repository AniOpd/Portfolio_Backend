import express from 'express';
const router = express.Router();

import { createExp } from '../controller/exp.controller.js';
import { createProject } from '../controller/project.controller.js';
import { createSkill } from '../controller/skills.controller.js';

router.post('/createExp', createExp);
router.post('/createProject', createProject);
router.post('/createSkills', createSkill);

export default router;
