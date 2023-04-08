let blogs = [
    {
    userId: 1,
    id: 1,
    url: "https://img.freepik.com/free-photo/online-message-blog-chat-communication-envelop-graphic-icon-concept_53876-139717.jpg",
    title: "sunt aut facere repellat ",
    body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
  },
  {
    userId: 1,
    id: 2,
    url: "https://www.shutterstock.com/image-photo/blog-website-article-lifestyle-online-260nw-605950769.jpg",
    title: "qui est esse",
    body: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
  },
  {
    userId: 1,
    id: 3,
    url: "https://thumbs.dreamstime.com/b/blog-information-website-concept-workplace-background-text-view-above-127465079.jpg",
    title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
    body: "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
  },
  {
    userId: 1,
    id: 4,
    url: "https://www.shutterstock.com/image-photo/blog-website-article-lifestyle-online-260nw-605950769.jpg",
    title: "eum et est occaecati",
    body: "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit"
  },
  {
    userId: 1,
    id: 5,
    url: "https://img.freepik.com/free-photo/online-message-blog-chat-communication-envelop-graphic-icon-concept_53876-139717.jpg",
    title: "nesciunt quas odio",
    body: "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque"
  }

]

const formData = document.getElementById("formData");
const blogContainer = document.getElementById("blogContainer");
const title = document.getElementById("title");
const content = document.getElementById("content");
const image= document.getElementById("image");

const templating = (arr) => {
    let result = '';
    arr.forEach(ele => {
        result += `
        <div class="card my-4  text-dark">
            <div class="card-body">
                <img src="${ele.url}" alt="" class='w-100 '>
            </div>
            <div class="card-header">
                <h1>Title : ${ele.title}</h1>
            </div>
            <div class="card-footer">
                <p>Content :${ele.body}</p>
            </div>
        </div>
        `;
    });
    blogContainer.innerHTML= result;
}
templating(blogs);

const onSupmitPost = (eve => {
    eve.preventDefault();
    // console.log('clicked');
    let obj = {
        title : title.value,
        body : content.value,
        url : image.value,
        userId : Math.ceil(Math.random() * 10)
    }
    // console.log(obj);
    blogs.push(obj);
    // console.log(blogs);
    templating(blogs)
    formData.reset();
})


formData.addEventListener("submit", onSupmitPost)