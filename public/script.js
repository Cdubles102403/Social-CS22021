$(function(){
    $("header").load('header.html')
    $("footer").load('footer.html')

    $.ajax({
        type:"POST",
        url:"getPosts",
        success: function (res){
            console.log(res);
            for(var i=0; i<res.length;i++){
                console.log('running')
                var comments = String(res[i].comments).substring(2,String(res[i].comments).length-2);
                var commentsArray = comments.split(",");
                console.log(commentsArray)
                var finalComments;
                for(var y=0;y<commentsArray.length;y++){
                    finalComments+=`<p>${commentsArray[y]}</p> <br>`
                }
                console.log(finalComments)
                $("#posts").append(`
                    <div class='post'>
                    <p>username:${res[i].username}</p> <br>
                    <hr>
                    <p>${res[i].content}</p> <br>
                    <p>date posted: ${res[i].datePosted} | likes: ${res[i].likes}</p>
                    <div class='comments>${finalComments}</div> 
                    </div>
                `)
            }
        }
    })
})