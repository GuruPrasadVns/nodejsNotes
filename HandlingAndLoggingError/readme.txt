Handling Error
#######################################################################
 - Send a friendly error
 - Log the exception


Handling Rejected Promises
#######################################################################

    try{

    }
    catch(ex){
       //Log the exception
        res.status(500).send('Something failed')
    }

Express Error Middleware
##########################################################################################
    - We register express error middleware function after all the middleware functions.
    -   app.use(function(err, req, res, next){
            // Log the exception
            res.status(500).send(`Something failed...`);
        });

    - And In every routers
        router.get('/', async (req, res, next)=>{
            try{

            }
            catch(ex){
                next(ex)
            }
        });

    - move the error middleware function to middlewares/error.js file. and in index.js import as error and then
        app.use(error);


Remove Try Catch
#############################################################################################################
async function asyncMiddleware(handler){
   return (req, res, next) =>{
        try{
                await handler(req, res);
            }
            catch(ex){
                next(ex);
            }
   }
}

with this the new router will look like

router.get('/', asyncMiddleware(async (req, res)=>{
    const accounts = await Accounts.find();
    res.send(accounts);
}));

- move to middlewares/async.js file

Express Async Errors
#############################################################################################################
    - npm i express-async-errors
    - Go to index.js => require('express-async-errors')
    - Now remove the asyncMiddleware call from every routes.


Logging Errors
#############################################################################################################
    - winston is a very popular logging library.
    - npm i winston
    - In index.js  const winston = require('winston'); //default logger
    - Every logger object has a transport for console, file, http, MongoDB, CouchDB, Redis and Loggly
    - error, warn, info, verbose, debug, silly

    winston.add(winston.transport.File, {filename : 'logfile.log'});

    - For loggin go to error.js middleware
        const winston = require('winston');

        winston.log('error', err.message);
        Or
        winston.error(err.message, err);

Logging To MongoDB
#############################################################################################################
    - npm i winston-mongodb@3.0.0

Uncaught Exceptions
#############################################################################################################





