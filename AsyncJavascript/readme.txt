Synchronous Code Example
------------------------------------------------------------------------------------------
console.log('Before');
console.log('After');

The above code is Synchronous or blocking code because until the first line of code finish its execution the
second line has to wait.


Asynchronous Code Example
------------------------------------------------------------------------------------------
console.log('Before');
setTimeout(()=>{
  console.log('simulating action to read a user from a database.....');
}, 2000);
console.log('After');

The above code output is
*********************************************************************************************
  Before
  After
  simulating action to read a user from a database.....


  ** Asynchronous does not mean concurrent or multithreaded. In the above example we have a single threaded.
  First the thread displays Before on the console then it will scheduled a task in event queue which will perform
  after two seconds then it displays After and since after that the thread is free it will perform the function
  scheduled in Event queue.

  ** In node whenever you perform any disk or network operations you have to write Asynchronous code because
    these operations always take some time. You need to write Asynchronous code in a clean and maintainable way.

  
Patterns For Dealing Asynchronous Code
##########################################################################################################

console.log('Before');
const user = getUser(1);
console.log(user);

console.log('After');

function getUser(id){
  setTimeout(()=>{
    console.log('Simulating to read a user from a database....');
    return {id, gitHubUserName : 'guruvns'}
  }, 2000);
}

The output of the above code is 
************************************************************
Before
undefined
After
Simulating to read a user from a database....

** There are three patterns available in javascript to handle these scenarios
  a) CallBacks
  b) Promises
  c) Async Await (Which is nothing but a syntactical sugar over Promises)


Callbacks
##########################################################################################################
Callback is basically a function which will execute when the result of an async operation is ready.

console.log('Before');
const user = getUser(1, function(user){
  console.log('User: ', user);
});

console.log('After');

function getUser(id, callback){
  setTimeout(()=>{
    console.log('Simulating to read a user from a database....');
    callback({id, gitHubUserName : 'guruvns'});
  }, 2000);
}

CallBack Hell
##########################################################################################################
getUser(1, function(user){
  //Now fetching github repos for user by userName
  getRepositories(user.gitHubUserName, (repos)=>{
      //Now fetching the commits of repo[0]
      getCommits(repos[0], (commits)=>{
          console.log(`Commits for ${repos[0]} are... ${commits}`)
      })
  });
});

The above code consists multiple callbacks which we refer as callback hell or christmas tree problem.


Named Function To Rescue CallBack Hell Problem
##########################################################################################################

The technique is to replace the anonymous function to named function.