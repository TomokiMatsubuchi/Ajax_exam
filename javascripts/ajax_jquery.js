$(function() {
  const button = $("#btn");
  const videoArea = $("#video");
  const titleArea = $("#title");
  const contentArea = $("#content");
  let number = 0;

  function getData(){
    return $.ajax('/javascripts/ajax.json',{
      type: 'GET',
    })
  };

  function changeVideo(){
    button.click(function(){
      getData().then(function(data){
        titleArea.html(data[number].title);
        contentArea.html(data[number].content);
        videoArea.attr('src', data[number].url);
        number == 2 ? number = 0 : number++;
      })
    });
  };

  changeVideo();

})

