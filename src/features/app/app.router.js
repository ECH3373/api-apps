import { Router } from 'express';
import { middleware } from 'querymen';
import { controller } from './app.controller.js';
import { query } from './app.query.js';

export const router = Router();
router.get('/', middleware(query.index), controller.index);
router.get('/:id', controller.show);
