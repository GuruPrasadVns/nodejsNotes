console.log('Before');
getUser(1, function(user){
  console.log('User: ', user);
  //Now fetching github repos for user by userName
  getRepositories(user.gitHubUserName, (repos)=>{
      console.log(`GitHub repos for user ${user.gitHubUserName} are ... ${repos}`);
      //Now fetching the commits of repo[0]
      getCommits(repos[0], (commits)=>{
          console.log(`Commits for ${repos[0]} are... ${commits}`)
      })
  });
});

console.log('After');

function getUser(id, callback){
  setTimeout(()=>{
    console.log('Simulating to read a user from a database....');
    callback({id, gitHubUserName : 'guruvns'});
  }, 2000);
}

function getRepositories(userName, callback){
  setTimeout(()=>{
    console.log(`Simulating to read github repo from github api for user...${userName}`);
    callback(['repo1', 'repo2', 'repo3']);
  }, 3000);
}