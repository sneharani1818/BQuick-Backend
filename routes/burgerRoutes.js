import express from 'express';
import { getAllBurger, getBurgerByName } from '../controllers/burgerController.js';


const router = express.Router();

//get all pizza
router.get('/get-beverage', getAllBurger);

//single product
router.get('/get-beverage/:name', getBurgerByName);


export default router;