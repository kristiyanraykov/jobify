import {
  createJob,
  deleteJob,
  getAllJobs,
  updateJob,
  showStats,
} from '../controllers/jobsController.js';

import authenticateUser from '../middleware/auth.js'

import express from 'express'

const router = express.Router()

router.route('/').post(authenticateUser, createJob).get(authenticateUser, getAllJobs)
router.route('/stats').get(authenticateUser, showStats)
router.route('/:id').delete(authenticateUser, deleteJob).patch(authenticateUser, updateJob)


export default router