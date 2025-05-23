let  post=[]
let  user=[]

      async function fetchPosts() {
        try {
          const Post = await fetch('https://jsonplaceholder.typicode.com/posts');
          const res = await Post.json();
          console.log(res)
        } catch (error) {
          error
        }
      }

      async function fetchUser() {
        try {
          const user = await fetch('https://jsonplaceholder.typicode.com/users');
          const userdata = await user.json();
          console.log(userdata)
        } catch (error) {
          console.log(error)
        }
      }

      fetchPosts()

      fetchUser()
      let form = document.querySelector("form")
      let div1 = document.querySelector(".div1")
      let div2 = document.querySelector(".div2")
      let input = document.getElementById("input")
      let postbtn=document.querySelector(".postbtn")
      form.addEventListener("submit", (event) => {
        event.preventDefault()
         userid=parseInt(input.value.trim()) 
        if (isNaN(userid)) {
div1.innerHTML=`<h2>Not Found<h2>`;
  return;
        }
       
        const user = users.filter((u) => u.id === userId);
        if(user){
            div1.innerHTML=`<div class="card p-3">${user.name} <br> ${user.email}</div>`
        }else{
          div1.innerHTML=`<div class="card p-3">not found</div>`

        }
        div2.innerHTML=""
      })

let btn=document.querySelector("#btn")
userid=parseInt(input.value.trim()) 

btn.addEventListener("click",(event)=>{

event.preventDefault()
if(isNaN(userid)){
  div2.innerHTML=`<div class="card p-3"> Please enter a vaile number </div>`
}
const post=res.filter(post => post.id ===userid)

if (post.length > 0) {
          div2.innerHTML = `
            <h5>Posts by User ID ${userId}</h5>
            <ul class="list-group">
              ${userPosts
                .map(
                  (post) =>
                    `<li class="list-group-item">
                      <strong>${post.title}</strong><br />
                      ${post.body}
                    </li>`
                )
                .join("")}
            </ul>
          `;
        } else {
          postsResultDiv.innerHTML = `<div class="alert alert-info">No posts found for this user.</div>`;
        }

})




















