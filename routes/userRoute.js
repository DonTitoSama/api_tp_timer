const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const jwtMiddleware = require('../middlewares/jwtMiddleware');

/**
 * @swagger
 * tags:
 *   name: Users
 *   description: API for user operations
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       properties:
 *         email:
 *           type: string
 *         password:
 *           type: string
 *         role:
 *          type: boolean
 *       required:
 *         - email
 *         - password
 *         - role
 *     Timer:
 *       type: object
 *       properties:
 *         time:
 *           type: number
 *       required:
 *         - time
 */

/**
 * @swagger
 * /users/register:
 *   post:
 *     summary: Register a new user
 *     tags:
 *       - Users
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       201:
 *         description: User created successfully
 *         content:
 *           application/json:
 *             example:
 *               message: 'Utilisateur créé : user@example.com, id: 123'
 */

/**
 * @swagger
 * /users/login:
 *   post:
 *     summary: Login a user
 *     tags:
 *       - Users
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       201:
 *         description: User login successfully
 *         content:
 *           application/json:
 *             example:
 *               message: 'Utilisateur connecté : id: 123'
 */

/**
 * @swagger
 * /users/user_id:
 *   get:
 *     summary: Information of a user
 *     tags:
 *       - Users
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       201:
 *         description: User informations successfully
 *         content:
 *           application/json:
 *             example:
 *               message: 'Utilisateur informations : id : 123, email : user@example.com, role : admin/user'
 */

/**
 * @swagger
 * /users/user_id:
 *   delete:
 *     summary: Delete a user
 *     tags:
 *       - Users
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       201:
 *         description: Deleted User successfully
 *         content:
 *           application/json:
 *             example:
 *               message: 'Utilisateur supprimé !'
 */

/**
 * @swagger
 * /users/user_id:
 *   put:
 *     summary: Edit a user
 *     tags:
 *       - Users
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       201:
 *         description: Edited User successfully
 *         content:
 *           application/json:
 *             example:
 *               message: 'Utilisateur modifié !'
 */

/**
 * @swagger
 * /users/user_id:
 *   patch:
 *     summary: Edit a user
 *     tags:
 *       - Users
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       201:
 *         description: Edited User successfully
 *         content:
 *           application/json:
 *             example:
 *               message: 'Utilisateur modifié !'
 */

/**
 * @swagger
 * /users/user_id/timer:
 *   get:
 *     summary: Information timer about a user
 *     tags:
 *       - Users
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Timer'
 *     responses:
 *       201:
 *         description: User timer informatinons successfully
 *         content:
 *           application/json:
 *             example:
 *               message: 'Utilisateur informations : id : 123, email : user@example.com, role : admin/user, timer : 1000ms'
 */

/**
 * @swagger
 * /users/user_id/timer:
 *   post:
 *     summary: Put timer in ms in a user
 *     tags:
 *       - Users
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Timer'
 *     responses:
 *       201:
 *         description: Put timer in ms in a user successfully
 *         content:
 *           application/json:
 *             example:
 *               message: 'Temps ajouté ! 1000ms'
 */

/**
 * @swagger
 * /users/user_id/averageTimer:
 *   post:
 *     summary: Get the average of total timer about a user
 *     tags:
 *       - Users
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Timer'
 *     responses:
 *       201:
 *         description: Average of total timer about a user successfully
 *         content:
 *           application/json:
 *             example:
 *               message: 'Moyenne des temps : 10000ms'
 */

router
    .route('/register')
    .post(userController.userRegister)

router
    .route('/login')
    .post(userController.userLogin)

router
    .route('/:user_id')
    .all(jwtMiddleware.verifiyToken)
    .delete(userController.deleteUser)
    .put(userController.putUser)
    .patch(userController.patchUser)
    .get(userController.getUser)

router
    .route('/:user_id/timer')
    .get(userController.GetAllTimerUser)
    .post(jwtMiddleware.verifiyToken, userController.timerUser)

router
    .route('/:user_id/averageTimer')
    .get(userController.AverageTimerUser)

module.exports = router;