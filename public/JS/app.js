function populateUserTable(users){
    var html = "";
    for(var i = 0; i < users.length; i++){
        html +=`
        <tr>
        <td>${users[i].id}</td>
        <td>${users[i].title}</td>
        <td><button onClick="fetchTodos(${users[i].id})" class="bttn" >Load Image</button></td>
        </tr>
        `
    }
    document.getElementById("userTableBody").innerHTML = html;
  }
  function fetchUser(){
   fetch('https://jsonplaceholder.typicode.com/photos?albumId=1&fbclid=IwAR3yQRxSBF4IIqqIsjU4TYP_wi-puDIFVd8ucOckvHXbyi8va4e-kLz7Lpo')
   .then(function(res){
       console.log(res, "response");
       return res.json();
   }).then(function(users){
       console.log(users, "users");
       populateUserTable(users);
   }).catch(err => {console.log(err, "error")});
  }
  function populateTodosTable(todos){
      var html = "";
      for(var i =0; i< todos.length; i++){
          html += `
          <div class="gallery" id="tabs-1">
          <a href="${todos[i].url}"  data-lightbox="mygallery" rel="lightbox" >
              <img src="${todos[i].url}" height="180" width="185" ></a> </div>`
      }
      document.getElementById("imageBody").innerHTML = html;
  }
  const ul = document.getElementById("imageList");
  function fetchTodos(id){
      fetch(`https://jsonplaceholder.typicode.com/photos?albumId=1&fbclid=IwAR3yQRxSBF4IIqqIsjU4TYP_wi-puDIFVd8ucOckvHXbyi8va4e-kLz7Lpo/todos?id=${id}`)
   .then(function(res){
       console.log(res, "response");
       return res.json();
  }).then(function(todos){
       console.log(todos, "todos");
       populateTodosTable(todos);
  })
  .catch(err => {console.log(err, "error")});
  } 
  window.onload = function(){
      document.getElementById('loadUsersButton').addEventListener('click' , function(){
        fetchUser();
      })
  }
  
  
  
  
  
  
  
  
  
  