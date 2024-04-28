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