let articleTemplete = `

<style>

@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@700&display=swap');
*{
    font-family: 'Roboto', sans-serif;;
}

body{
    background-color: #EDF5FA;
}

.title-container{
    width: 100%;
    height: 300px;
    background-color: #3A5768;
}
.article-container{
    width: 40%;
    height: 1200px;
    background-color: white;
    border-radius: 19px;
    margin: auto;
    margin-top: -150px;
    margin-bottom: 150px;
    box-shadow: 1px 1px 8px 2px #888888;
}
.article-title-section{
    background-color: #5792F5;
    width: 100%;
    height: 80px;
    border-top-left-radius: 19px;
    border-top-right-radius: 19px;
}
.article-title{
    text-align: center;
    color: white;
    font-size: 20px;
    padding-top: 30px;
}
.post-container{
    border: 1px solid black;
    width: 95%;
    height: 350px;
    margin: auto;
    margin-top: 4px;
}
.feature-img-container{
    width: 97%;
    height: 95%;
   /* border: 1px solid black;*/
    margin: auto;
    margin-top: 7px;
}
.img5{
    width: 100%;
    height: 100%;
}
.post-title{
    font-size: 20px;
    padding-left: 5px;
    margin-top: -.1px;
}
.post-body{

   /*border: 1px solid black;*/
    width: 95%;
    height: auto;
    margin: auto;
    margin-top: 4px;
}
.comment-section{
     /*  border: 1px solid black; */
       width: 95%;
       height: 320px;
       margin: auto;
       margin-top: 4px;
       background-color: #EDF5FA;
       border-radius: 19px;

}
.comment-box-title{
       text-align: center;
       padding-top: 2px;
}
.comment-items{
    margin-left: 20%;
    width: 60%;
    
}
.comment-btn{
    margin-top: 9px;
    background-color: #5792F5;
    color: white;
    width: 30%;
    border-radius: 4px;
    border: none;
    outline: none;
    font-size: 15px;
}
.comment-btn:hover{
 background-color:#276ce4;
}


.ali{
    height: 13%;
}
.setcolor{
    background-color: #C4C4C4;
    border-radius: 4px;
    border: none;
    outline: none;
}
















.reaction-box{
    display: flex;
   /* border: 1px solid black;*/
    width: 97%;
    height: 12%;
    margin-top: -9px;
    margin-left: 5px;
}
.reaction-btn, .counter{
    margin-left: 9px;
}
.counter{
    font-size: 15px;
}

@media screen and (max-width: 700px){
    .article-container{
        width: 60%;
    }
    .reaction-box{
        margin-top: -23px;
    }


}



@media screen and (max-width: 500px){
    .article-container{
        width: 70%;
    }
    .reaction-box{
        margin-top: -23px;
    }

}


@media screen and (max-width: 360px){
    .article-container{
        width: 80%;
        height: 900px;
    }
    .reaction-box{
        margin-top: -22px;
    }

}




</style>



<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="shortcut icon" href="../images/logo3ff.svg" type="image/x-icon">
    <link rel="stylesheet" href="../css/article.css">
    <title>blog</title>
</head>
<body>
    

    <menu-bar></menu-bar>

  <div class="title-container"></div>
  <div class="article-container">
      <div class="article-title-section"><p class="article-title">5 ways to break into the video game industry</p></div>

      <div class="post-container">
          <div class="feature-img-container">
             <img src="../images/img5.jpg" alt="featured image" class="img5">
          </div>
      </div>
      <div class="post-body">
          <p>I have compiled a showcase of some cool blog comment form designs.  These have different styles and layouts you can be inspired by. You will find very basic comment forms, as well as blog comment form designs with some unique features. Some blogs on this list used a custom made comment form design, which matches the overall website style, while others preferred to use Disqus to gather and manage their comment section. See how they integrated the comment forms in their designs and choose your favorites.</p>
          <p>I have compiled a showcase of some cool blog comment form designs.  These have different styles and layouts you can be inspired by. You will find very basic comment forms, as well as blog comment form designs with some unique features. Some blogs on this list used a custom made comment form design, which matches the overall website style, while others preferred to use Disqus to gather and manage their comment section. See how they integrated the comment forms in their designs and choose your favorites.</p>
      </div>
      <div class="comment-section">
          <p class="comment-box-title">Leave a comment</p>
          <label for="comment" class="comment-items">Comment:</label><br/>
          <textarea name="" id="" cols="30" rows="4" class="comment-items setcolor"></textarea><br/>
          <label for="name" class="comment-items">Name:</label><br/>
          <input type="text" name="name" id="name" class="comment-items ali setcolor"><br/>
          <label for="email" class="comment-items">Email:</label><br/>
          <input type="email" name="email" id="email" class="comment-items ali setcolor"><br/>
          <input type="button" value="Submit" class="comment-items comment-btn ali">

      </div>

          

          

      </div>
     <!--duplicate-->

     
      </div>
  </div>

    <footer-bar></footer-bar>
    <script src="../javaScript/menu.js"></script>
    <script  src="../javaScript/footer.js"></script>


</body>
</html>                 








`