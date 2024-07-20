import express from 'express';
import {updateProfile } from '../controller/profile.controller.js';
import {updateProject} from '../controller/project.controller.js';
import { updateExp } from '../controller/exp.controller.js';
import { updateSkill } from '../controller/skills.controller.js';
const router = express.Router();

router.put('/update/:id', updateProfile);
router.put('/updateProject/:id', updateProject);
router.put('/updateExp/:id', updateExp);
router.put('/updateSkills/:id', updateSkill);

export default router;
