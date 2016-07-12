var paraStr = '{"y_axis":"awardnumber","selected_Id":78,"x_axis":"awardnumber","string_filters":[],"num_filters":[],"view":"map"}';

$(document).ready(function(){
  var mc = new MainController();
  var query = URI.parseQuery(querys);

  /*
  if (window.location.href.indexOf('para=')>0)
    var parts = window.location.href.split('para=', 2);
    paraStr = parts[1].split('%20').join(' ');
    paraStr = paraStr.split('%22').join('"');
  */

  var suave_ifr = document.createElement('iframe');
  suave_ifr.id = 'pivot_window';
  suave_ifr.src = '/loading.html?'+querys;
  suave_ifr.style.width="100%";
  suave_ifr.style.height="95%";
  suave_ifr.style.margin="0";
  suave_ifr.style.padding="0";
  suave_ifr.style.border="0";
  suave_ifr.frameborder ='0';
  document.body.appendChild(suave_ifr);

  var aboutTitle;
  var aboutPath = "../surveys/";

  if(query.file.endsWith(".csv")){
    aboutPath = aboutPath + (query.file).replace('.csv', '')+ "about.html";
  }else if(query.file.endsWith(".zip")){
    aboutPath = aboutPath + (query.file).replace('.zip', '')+ "about.html";
  }else if(query.file.endsWith(".cxml")){
    aboutPath = aboutPath + (query.file).replace('.cxml', '')+ "about.html";
  }
  $("#help").attr("onclick", "window.open('"+aboutPath+"','_blank')");
  $("<header>").load(aboutPath + " #about-title", function(){
    aboutTitle = "About " + $(this).text() + " Survey";
    $('.tagline').text($(this).text());
  });


});
