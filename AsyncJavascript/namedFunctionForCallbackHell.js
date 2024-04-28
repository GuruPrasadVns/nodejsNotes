console.log('Before');
getUser(1, function(user){
  getRepositories(user.gitHubUserName, getRepository);
});

function getUser(user){
  getRepositories(user.gitHubUserName, getRepository);
}

function getRepository(repos){
  getCommits(repos[0], displayCommits);
}

function displayCommits(commits){
  console.log(`Commits for are... ${commits}`)
}

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

function getCommits(repoName, callback){
  setTimeout(()=>{
      console.log(`Simulating to fetch commits for ${repoName} from gitHub...`);
      callback(['commit1', 'commit2', 'commit3']);
  }, 4000);
}