var postApi = "https://jsonplaceholder.typicode.com/users/1/posts";

fetch(postApi)
 .then(function(response){
     return response.json();
 })
 .then(function(posts){
    console.log(posts);
    // Viết code hiển thị ra html tùy ý muốn
 })
 .catch(function(err){
    console.log(err)
 })