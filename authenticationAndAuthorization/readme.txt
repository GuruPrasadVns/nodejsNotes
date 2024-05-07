Authentication & Authorization
------------------------------------------------------------------------------------------------------------------------
    Authentication
    ***********************************************************************************************
        Authentication is the process of identification of the user who they claim to be they are.
        User sends their username and password to server and server authenticate the user.

    Authorization
    ***************************************************************************************************
        Authorization is the process of determining if the user has the right permission to perform the given operation.


    End Points
    ***********************************************************************************************
        - Register a user (name, email and password)
        - Login a user (Authentication)
        -


    Loadash
    ***********************************************************************************************
        - optimised version of underscore
        - provides important utility functions to work with objects string etc.

    Joi-password-complexity
    ***********************************************************************************************
        - To ensure password complexity
        - npm install joi-password-complexity

    bcrypt
    ***********************************************************************************************
        - npm i bcrypt
        - To decrypt a password we need a salt. A salt is basically a long random string that is added before or after
          the password so that the resultant decrypt password is different.

            without salt 1234 -> abcd

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash('1234', salt);


    jsonwebtoken
    ***********************************************************************************************
        - A long string which identifies a user.
        - server generates the json web token and send to the client.
        - For futrue api calls client sent this web token to the server for server to identify client.
        - For web applications, localstorage is used to store the json web token in every browser.
        - https://jwt.io
        - json web tokens has three parts
            - a) Header(red)
            - b) Payload(purple) : contains public property of a user.
            - c) Digital signature(light blue) : generate based on the private key placed on the server.

        - jwt "iat" property can be used to determine the age of the jwt.

        - To set env variable in window powershell : $env:expbackend_jwtPrivateKey='mySecureKey'




