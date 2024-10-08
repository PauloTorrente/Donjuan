import express from 'express';
import { getWishlist, addToWishlist, removeFromWishlist } from './wishlist.controller.js';
import { protect } from '../../middlewares/auth.middleware.js';

const router = express.Router();

// Protected routes for wishlist actions
router.get('/:userId', protect, getWishlist);
router.patch('/add', protect, addToWishlist);
router.patch('/remove', protect, removeFromWishlist);

export default router;
