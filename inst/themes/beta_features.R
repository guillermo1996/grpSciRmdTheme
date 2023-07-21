/*
  document.querySelectorAll('p').each(c => {
    if(c.querySelector("img")){
      c.classList.add("sliderimagep")

      c.insertAdjacentHTML("beforebegin", '<div class="d-flex font-weight-bold" style="font-size: 8pt">Resize image: &emsp;<input class="sliderimageinput" type="range" min="1" max="100" value="100"></div>')


      // const sliderbar = createElementFromHTML('<div class="d-flex font-weight-bold" style="font-size: 8pt">Resize image: &emsp;<input class="sliderimageinput" type="range" min="1" max="100" value="100"></div>')

      sliderbar.parentNode.insertBefore()

      document.createElement("div")
      sliderbar2.addClass("d-flex font-weight-blod")
      const sliderbar = document.createElement('<div class="d-flex font-weight-bold" style="font-size: 8pt">Resize image: &emsp;<input class="sliderimageinput" type="range" min="1" max="100" value="100"></div>')

      c.prepend('<div class="d-flex font-weight-bold" style="font-size: 8pt">Resize image: &emsp;<input class="sliderimageinput" type="range" min="1" max="100" value="100"></div>')
    }
  })
});
/*elements with images

$( "p:has(img)" ).each(function(index,item){
  $(this).addClass( "sliderimagep"+index);
  $(this).prepend('<div class="d-flex font-weight-bold" style="font-size: 8pt">Resize image: &emsp;<input class="sliderimageinput" type="range" min="1" max="100" value="100"></div>');
});*/


  /*elements with div
$( "div:has(img)" ).each(function(index,item){
  $(this).addClass( "sliderimagep"+index);
  $(this).prepend('<div class="d-flex font-weight-bold" style="font-size: 8pt">Resize image: &emsp;<input class="sliderimageinput" type="range" min="1" max="100" value="100"></div>');
});

$(".sliderimageinput").on('input',function(){
  let newwidth = $(this).val();
  $(this).parent().parent().children("img").each(function(index,val){
    $(this).attr('width',newwidth+"%");
  });
});*/

  /*elements with tables*/
  /*
  $( "table" ).each(function(index,item){
    $(this).addClass( "slidertable slidertable"+index);
    $('<div class="d-flex font-weight-bold"><div>Resize table size:&emsp;<input class="slidertableinput" data="'+"slidertable"+index+'" type="range" min="1" max="100" value="100"></div>'+
        '<div>Resize table font:&emsp;<input class="slidertablefont" type="range" min="9" data="'+"slidertable"+index+'" max="50" value="12"></div></div>').insertBefore(this);
  });

$(".slidertableinput").on('input',function(){
  let newwidth = $(this).val();
  $("."+$(this).attr("data")).css("width",$(this).val()+"%");
});

$(".slidertablefont").on('input',function(){
  let newwidth = $(this).val();
  $("."+$(this).attr("data")).css("font-size",$(this).val()+"px");
});
*/


  /*
  document.querySelectorAll('p').forEach(function(item, index){
    if(item.querySelector("img")){
      item.classList.add("sliderimagep"+index)
      item.insertAdjacentHTML("beforebegin", '<div class="d-flex font-weight-bold" style="font-size: 8pt">Resize image: &emsp;<input class="sliderimageinput" type="range" min="1" max="100" value="100"></div>')
    }
  })
*/

