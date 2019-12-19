$(document).ready(function(){
       $.ajax({
    url:'/blog',
    type:'GET',
    success:function(data){
        console.log(data);
       //window.location.hash = 'userUpload';
       $("#crd").empty();
      // data=JSON.parse(data);
        //  $('#crd').append("<div class='card-deck' id='dec' style='width:100%;'></div>")
           
         for(var i=0;i<data.length;i++)
           {  // data=JSON.stringify(data);
        
                 //  { $("#deck").append("<div style='display:block;'></div>")}
               //  $('#dec').append('<div class="col-4" style="width:100%;"></div>')
               console.log($("#uname").text());
               if(data[i].username==$("#uname").text())
               {$("#crd").append("<img src="+data[i].url+" class='img-fluid rounded shadow-sm row d-flex'>").css({"display":"inline-block"});
           }                        
  
  
           }
  
                           }
  })});