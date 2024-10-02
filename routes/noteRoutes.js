import express from 'express';
import {
  getAllNotes,
  createNote,
  updateNote,
  deleteNote
} from '../controllers/noteController.js';
import authenticate from '../middleware/auth.js';

const router = express.Router();

// Apply authentication middleware to all routes
router.use(authenticate);

// Get all notes
router.get('/', getAllNotes);

// Create a new note
router.post('/', createNote);

// Update an existing note
router.put('/', updateNote); // Assumes note data is passed in the body for updating

// Delete a note
router.delete('/', deleteNote); // Assumes note data is passed in the body for deletion

export default router;
