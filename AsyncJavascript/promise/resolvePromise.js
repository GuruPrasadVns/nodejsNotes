const promise = new Promise((resolve, reject)=>{
  setTimeout(()=>{
    console.log('Simulating to fetch user data from database...');
    resolve({ id : 1, name : 'guruvns'})
  },2000)
});

promise.then(result => console.log(result))
        .catch(err => console.log(err.message));