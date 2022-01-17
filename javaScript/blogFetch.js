// function liking(){
//     for(let i=0;i<localStorage.length;i++){
//         let key = localStorage.key(i)
//         console.log(key)
    


    
//     //let displayer = document.getElementById("hhh");
//     let arr = JSON.parse(localStorage.getItem(key))
//     let title = arr.titleInfo;
//     let img   = arr.imgUrlInfo;
//     let like = parseInt(arr.likes);
//     let fullArticle = arr.fullArticleInfo;





//     let articleData = {
//             titleInfo: `${title}`,
//             fullArticleInfo: `${fullArticle}`,
//             imgUrlInfo: `${img}`,
//             type:`posts`,
//             likes:`${like+1}`,
//         }
    
    
//         localStorage.setItem(key, JSON.stringify(articleData))

//     }

// location.reload()
// }



//delete avove


function blogFetch(){

//looping through
    for(let i=0;i<localStorage.length;i++){
        let key = localStorage.key(i)
        console.log(key)
    



    let displayer = document.getElementById("hhh");
    let arr = JSON.parse(localStorage.getItem(key))
    let title = arr.titleInfo;
    let img   = arr.imgUrlInfo;
    let like = parseInt(arr.likes);
    let type = arr.type;


  if(type == `posts`) {


    //function liking(){
        // let articleData = {
        //     titleInfo: `${title}`,
        //     fullArticleInfo: `${fullArticle}`,
        //     imgUrlInfo: `${img}`,
        //     type:`posts`,
        //     likes:`${like+1}`,
        // }
    
        // localStorage.setItem(key, JSON.stringify(articleData))
        
    //}



   

   







    let temp = `
    <div class="post-container post1">
    <div class="feature-img-container">
     <a href="./article.html">  <img src="${img}" alt="featured image" class="img5"></a>
    </div>
    <p class="post-title" contenteditable="false">${title}</p>
    <div class="reaction-box">
        <img src="../images/like.svg" alt="like" class="like-btn reaction-btn" onclick="liking()" id="like-btn">
        <p class="like-counter counter">${like}</p>
        <img src="../images/comment.svg" alt="comment" class="comment-btn reaction-btn">
        <p class="comment-counter counter" id="kk">0</p>
    </div>
    
    `
    displayer.innerHTML += temp;

}
    }
}
blogFetch();