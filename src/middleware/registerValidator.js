// Call Express Validator module
const { check } = require('express-validator');
// Call User Model 
const { User } = require('../database/connectDB');

const validateRegister = [
    check('name')
        .notEmpty().withMessage('Completa tu nombre')
        .isLength({ min: 3 }).withMessage('Tu nombre debe contener minimo 3 letras'),

    check('nickname')
        .notEmpty().withMessage('Completa tu nickname')
        .isLength({ min: 3 }).withMessage('Tu nickname debe contener minimo 3 letras')
        .custom((value) => {
            const nicknameUsed = User.findOne({
                where: {
                    nickname: value
                }
            });
            if (nicknameUsed) {
                throw new Error('Prueba con otro nickname');
            }

            return true;
        }),

    check('email')
        .notEmpty().withMessage('Completa tu email')
        .isEmail().withMessage('Debes ingresar un email valido')
        .custom((value) => {
            const emailUsed = User.findOne({
                where: {
                    email: value
                }
            });

            if (emailUsed) {
                throw new Error('Prueba con otro email');
            }

            return true;
        }),

    check('password')
        .notEmpty().withMessage('Completa tu password')
        .isLength({ min: 8 }).withMessage('La password debe contener minimo 8 caracteres'),

    check('userimage')
        .custom((value, { req }) => {
            let imageFile = req.file;
            let extensions = ['.jpg', '.png'];
            let extensionFile = path.extname(req.file.originalname);

            if (!extensions.includes(extensionFile)) {
                throw new Error('Las extensiones permitidas son ' + extensions.join(', '));
            }

            return true;
        })
]

module.exports = validateRegister;