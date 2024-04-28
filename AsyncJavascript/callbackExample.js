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