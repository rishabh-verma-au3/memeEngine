
  $("#Hum").on('click',function(){    $.ajax({
    url:'https://raw.githubusercontent.com/rishabh-verma-au3/MyJavaStuffs/master/meme.json',
    type:'GET',
     success:function(data){
  // console.log(data);
        window.location.hash = 'Humor';
       data=JSON.parse(data);
         $("#crd").empty();
      //   $('#crd').append("<div class='card-deck' id='deck' style='width:100%;'></div>")
        for(var i=0;i<data.length;i++)
      {  // data=JSON.stringify(data);
          if(data[i].category=="Humor")
          {  // data=JSON.stringify(data);
                    
            //  { $("#deck").append("<div style='display:block;'></div>")}
          //  $('#dec').append('<div class="col-4" style="width:100%;"></div>')
          if ( $('#logout').attr("href") == '/logout')  
          { $("#crd").append("<div class='col-4' style='width:100%;margin-bottom:1%;'><div class='card' style='width: 100%;Height:100%;border-radius:20px;background-color:#E5FFFD;border:.4px solid red;'><a href='/post/"+data[i].id+"'> <img src="+data[i].url+" class='card-img-top' alt='...'style='border-radius:20px 20px 3px 3px;padding:.3px;margin:0px;' width='"+data[i].width+"' height='"+data[i].height+"'></a><div class='card-body' style='height:100%;width:100%;' style='font-size:2vw;'><hr/ style='border-top:1px dashed red;width:100%;padding:0px;margin:0px;'><h5 class='card-title' style='font-size:2vw;padding:0px;margin:0px;'>"+data[i].name+"</h5><hr/ style='border-top:1px dashed red;width:100%;padding:0px;margin:0px;'><div style='margin:10px;'><button type='button' class='btn btn-outline-danger my-2 my-sm-0' style='margin: 10px; color: #fff; border-radius: 25px;background-color: #218599; 'style='width:100%;' style='margin: 10px; color: #fff;border:.4px solid red;' data-toggle='modal' data-src='"+data[i].url+"'data-target='#share'>Share</botton></div></div></div></div>")
        }    
        else{ $("#crd").append("<div class='col-4' style='width:100%;margin-bottom:1%;'><div class='card' style='width: 100%;Height:100%;border-radius:20px;background-color:#E5FFFD;border:.4px solid red;'><a href='/NotLoginPost/"+data[i].id+"'> <img src="+data[i].url+" class='card-img-top' alt='...'style='border-radius:20px 20px 3px 3px;padding:.3px;margin:0px;' width='"+data[i].width+"' height='"+data[i].height+"'></a><div class='card-body' style='height:100%;width:100%;' style='font-size:2vw;'><hr/ style='border-top:1px dashed red;width:100%;padding:0px;margin:0px;'><h5 class='card-title' style='font-size:2vw;padding:0px;margin:0px;'>"+data[i].name+"</h5><hr/ style='border-top:1px dashed red;width:100%;padding:0px;margin:0px;'><div style='margin:10px;'><button type='button' class='btn btn-outline-danger my-2 my-sm-0' style='margin: 10px; color: #fff; border-radius: 25px;background-color: #218599; 'style='width:100%;' style='margin: 10px; color: #fff;border:.4px solid red;' data-toggle='modal' data-src='"+data[i].url+"'data-target='#share'>Share</botton></div></div></div></div>")
      } 

      }

      }

                      }
})});


$("#Humor").on('click',function(){    $.ajax({
  url:'https://raw.githubusercontent.com/rishabh-verma-au3/MyJavaStuffs/master/meme.json',
  type:'GET',
   success:function(data){
// console.log(data);
      window.location.hash = 'Humor';
     data=JSON.parse(data);
       $("#crd").empty();
    //   $('#crd').append("<div class='card-deck' id='deck' style='width:100%;'></div>")
      for(var i=0;i<data.length;i++)
    {  // data=JSON.stringify(data);
        if(data[i].category=="Humor")
        {  // data=JSON.stringify(data);
                  
          //  { $("#deck").append("<div style='display:block;'></div>")}
        //  $('#dec').append('<div class="col-4" style="width:100%;"></div>')
        if ( $('#logout').attr("href") == '/logout')  
        { $("#crd").append("<div class='col-4' style='width:100%;margin-bottom:1%;'><div class='card' style='width: 100%;Height:100%;border-radius:20px;background-color:#E5FFFD;border:.4px solid red;'><a href='/post/"+data[i].id+"'> <img src="+data[i].url+" class='card-img-top' alt='...'style='border-radius:20px 20px 3px 3px;padding:.3px;margin:0px;' width='"+data[i].width+"' height='"+data[i].height+"'></a><div class='card-body' style='height:100%;width:100%;' style='font-size:2vw;'><hr/ style='border-top:1px dashed red;width:100%;padding:0px;margin:0px;'><h5 class='card-title' style='font-size:2vw;padding:0px;margin:0px;'>"+data[i].name+"</h5><hr/ style='border-top:1px dashed red;width:100%;padding:0px;margin:0px;'><div style='margin:10px;'><button type='button' class='btn btn-outline-danger my-2 my-sm-0' style='margin: 10px; color: #fff; border-radius: 25px;background-color: #218599; 'style='width:100%;' style='margin: 10px; color: #fff;border:.4px solid red;' data-toggle='modal' data-src='"+data[i].url+"'data-target='#share'>Share</botton></div></div></div></div>")
      }    
      else{ $("#crd").append("<div class='col-4' style='width:100%;margin-bottom:1%;'><div class='card' style='width: 100%;Height:100%;border-radius:20px;background-color:#E5FFFD;border:.4px solid red;'><a href='/NotLoginPost/"+data[i].id+"'> <img src="+data[i].url+" class='card-img-top' alt='...'style='border-radius:20px 20px 3px 3px;padding:.3px;margin:0px;' width='"+data[i].width+"' height='"+data[i].height+"'></a><div class='card-body' style='height:100%;width:100%;' style='font-size:2vw;'><hr/ style='border-top:1px dashed red;width:100%;padding:0px;margin:0px;'><h5 class='card-title' style='font-size:2vw;padding:0px;margin:0px;'>"+data[i].name+"</h5><hr/ style='border-top:1px dashed red;width:100%;padding:0px;margin:0px;'><div style='margin:10px;'><button type='button' class='btn btn-outline-danger my-2 my-sm-0' style='margin: 10px; color: #fff; border-radius: 25px;background-color: #218599; 'style='width:100%;' style='margin: 10px; color: #fff;border:.4px solid red;' data-toggle='modal' data-src='"+data[i].url+"'data-target='#share'>Share</botton></div></div></div></div>")
    }                                          


    }

    }

                    }
})});



