var exports = module.exports;
var aboutOne = '<head><title>About</title></head> <div class="about-banner"> <h1 class="about-header">About</h1> <div id="about-title">';
var aboutTwo = '</div> </div>';
var aboutThree = '<style type="text/css"> .about-header{padding-top: 10px; font-size: 36px; padding:0px; margin: 0px; line-height:100px; text-shadow: 0 -1px 1px rgba(0,0,0,0.25); width:310px; float:left; } #about-title{float: right; margin:75px 20px 0px 0px; font-size: 20px; } .about-banner{width:50%; height: 100px; margin:7px auto; -moz-box-shadow: 0 1px 3px rgba(0,0,0,0.5); -webkit-box-shadow: 0 1px 3px rgba(0,0,0,0.5); -moz-border-radius: 15px; -webkit-border-radius: 15px; padding-left:190px; color:#37535B; background: #b8d8fb no-repeat center left; font-family: "Arial Narrow"; text-transform: uppercase; letter-spacing: 4px; } </style><div class="boxed" style="border: 1px solid #37535B; width: 65%;margin: 0 auto; padding-left:10px; padding-right:10px;">';
var aboutFour = '<h3 style="text-align: left;"><span class="s1">This survey was conducted by ...</span></h3><h3 style="text-align: left;"><span class="s1"><br></span><span class="s1">Survey methodology (time and location, sampling, etc):...</span></h3><h3 style="text-align: left;"><span class="s1"><br></span><span class="s1">Link to survey codebook: ...</span></h3><h3 style="text-align: left;"><span class="s1"><br></span><span class="s1">Suggested citation: ...</span></h3><h3 style="text-align: left;"><span class="s1"><br></span><span class="s1">Point of contact: ... &nbsp;</span></h3><h3 style="text-align: left;"><span class="s1"><br></span><span class="s1">Additional information URL: ...</span></h3><h2><span class="s1"> </span></h2><h2><span class="s1"> </span></h2><h2><span class="s1"> </span></h2><h2><span class="s1"> </span></h2><p style="text-align: left;"><br></p>';
var aboutEnd = '</div>';
var collections = ["default"];
var defaultCol = 0;

exports.getAbout = function(num){
  if(num == 1) {
    return aboutOne;
  }
  else if (num == 2) {
    return aboutTwo;
  }else if (num == 3) {
    return aboutThree;
  }else if (num == 4) {
    return aboutFour;
  }else if (num == 5){
    return aboutEnd;
  }
};

exports.getDefaultCollect = function(){
  return collections[0];
};

exports.getDefaultCol = function(){
  return defaultCol;
}

exports.getCollections = function(){
  return collections;
};
