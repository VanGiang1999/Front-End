var users = [
    {
        id: 1,
        name: "Test1"
    },
    {
        id: 2,
        name: "Test2"
    },
    {
        id: 3,
        name: "Test3"
    }
]

var comment = [
    {
        id: 1,
        user_id: 1,
        comment: "Test comment"
    },
    {
        id: 2,
        user_id: 2,
        comment: "Test comment"
    }
]



function getComments(){
    var promise = new Promise(function(resolve){
        setTimeout(function(){
            resolve(comment);
        },1000);
    });
    return promise;
};


function getUsersByID(userIds){
     return new Promise(function(resolve){
        var result = users.filter(function(user){
            return userIds.includes(user.id)
        })
        setTimeout(function(){
           resolve(result);
        },1000)
     })
}

getComments()
   .then(function(comment){
        var userId = comment.map(function(comment){
            return  comment.user_id
        });
    
        return getUsersByID(userId).then(function(users){
           return{
            users: users,
            comment: comment,
           }
        });
   })
   .then(function(data){
       console.log(data)
   })
   



