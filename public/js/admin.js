document.getElementById('createPost').onsubmit = function(event){
    event.preventDefault();
    const target = event.target.elements;
    fetch('/',{
        method:'POST',
        headers:{
            'Content-type': 'application/json'
        },
        body:JSON.stringify({title:target.title.value,subTitle:target.subTitle.value,author:target.author.value,postBody:target.postBody.value})
    })
    .then(res => console.log(res));
}