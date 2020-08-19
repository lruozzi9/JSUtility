const express = require('express');
const app = express();
const routes = require('./routes');

/**
 * CORS
 * https://web.dev/cross-origin-resource-sharing/
 * https://expressjs.com/en/resources/middleware/cors.html
 */

/**
 * Authentication and Authorization
 * https://serverfault.com/questions/57077/what-is-the-difference-between-authentication-and-authorization
 * https://teamtreehouse.com/library/oauth-authentication-with-passport
 */

app.use(express.json());
app.use('/api', routes);

app.use((req, res, next) => {
    const err = new Error("Not Found");
    err.status = 404;
    next(err);
});

app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.json({
        error: {
            message: err.message
        }
    })
})