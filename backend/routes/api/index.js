// backend/routes/api/index.js
// nesting an api folder in your routes folder.
const router = require('express').Router();
const { restoreUser } = require('../../utils/auth.js');

// 2. GET /api/restore-user


router.use(restoreUser);

// router.get(
//   '/restore-user',
//   (req, res) => {
//     return res.json(req.user);
//   }
// );

router.post('/test', function(req, res) {
    res.json({ requestBody: req.body });
});

// // Phase 3 | Test User Auth Middlewares


// 1. Make sure to test this setup by creating the following test route in the api router:
// GET /api/set-token-cookie
const { setTokenCookie } = require('../../utils/auth');
const { User } = require('../../db/models');
router.get('/set-token-cookie', async (_req, res) => {
  const user = await User.findOne({
      where: {
        username: 'Demo-lition'
      }
    });
  setTokenCookie(res, user);
  return res.json({ user: user });
});

// router.use(restoreUser);

// GET /api/require-auth
// const { requireAuth } = require('../../utils/auth');
// router.get(
//   '/require-auth',
//   requireAuth,
//   (req, res) => {
//     return res.json(req.user);
//   }
// );
module.exports = router;
