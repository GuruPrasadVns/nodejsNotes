getUser(1)
  .then(user => getRepositories(user.gitHubUserName))
  .then(repos => getCommits(repos[0]))
  .then(commits => console.log(commits))
  .catch(err => console.log(err.message));

function getUser(id){
  return new Promise((resolve, reject)=>{
      setTimeout(()=>{
          console.log('Simulating to get user details from db using userId...');
          resolve({ id : id , gitHubUserName : 'guruvns'});
      },2000);
  });
}

function getRepositories(userName){
  return new Promise((resolve, reject)=>{
    setTimeout(()=>{
        console.log(`Simulating to get repositories of a user from GithubApi using userName....${userName}`);
        resolve(['repo1', 'repo2', 'repo3']);
    }, 3000);
  });
}

function getCommits(repo){
  return new Promise((resolve, reject)=>{
      setTimeout(()=>{
        console.log(`Simulating to get commits of a repo from GithubApi using repo....${repo}`);
        resolve(['commits1', 'commits2', 'commits3', 'commits4']);
      }, 4000);
  });
}