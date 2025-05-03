function getDatat(username){
    return fetch(`https://api.github.com/users/${username}`).then(response => response.json())
}
function getrepodetails(username){
    return fetch(`https://api.github.com/users/${username}/repos`).then(response => response.json())   
}
     let btn= document.querySelector(".sub");
    let subbtn = document.querySelector(".sub")
    let avtar = document.querySelector('.avtar')
    let  follow = document.querySelector('#Follower')
    let follwing= document.querySelector('#Follwing')
    let center=document.querySelector('.center')
    

    let nam=document.querySelector(".hei")
    btn.addEventListener('click',(event)=>{
        let sum = ''
        event.preventDefault()
        const username = document.querySelector('.ch').value;
            getDatat(username).then((data)=>{
            info=data
            // console.log(data)
            nam.innerHTML=`Name:- ${data.name}`;
            follow.innerHTML=`Follwer:- ${data.followers}`
            follwing.innerHTML=`Follwing:- ${data.following}`
            avtar.setAttribute('src', `${data.avatar_url}`)
   
        })
        getrepodetails(username).then((repo)=>{

            repo.forEach(element => {
                sum = sum+` <div class="container">
                <p>Repo name:-${element.name}</p>
                 <b>Language:- ${element.language}</b>
                <p>url :-  <a  class="link" href=${element.html_url} >${element.html_url}</a></p>
                <p>⭐ Start - ${element.stargazers_count}</p>
            </div>`
            });
            center.innerHTML=sum;
        })
})

           