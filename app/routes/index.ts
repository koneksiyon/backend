import express, { Router } from 'express';
import employeeRoute from './employee.route';
import customerRoute from './customer.route';
import branchRoute from './branch.route';
import categoryRoute from './category.route';
import jobTitleRoute from './jobTitle.route';
import productRoute from './product.route';
import authRoute from './auth.route';

const router = express.Router();

router.use('/auth', authRoute);
router.use('/branch', branchRoute);
router.use('/category', categoryRoute);
router.use('/employee', employeeRoute);
router.use('/customer', customerRoute);
router.use('/jobTitle', jobTitleRoute);
router.use('/product', productRoute);

export default router;
