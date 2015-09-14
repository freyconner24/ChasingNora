$(document).ready(function() {
    //setTimeout(resize, 1000);
    resize();

    $( window ).resize(function() {
        resize();
    });
});

function resize() {
    var height = $( window ).height();
    var width = $( window ).width();

    $('.headerCont').css('height', height);
    $('.chasingNoraImg').css('height', height);
    $('.chasingNoraImg2').css('height', height);
    
    if (width / height > 1.778) {
        $('.backGif').css({
            'background-size' :  '100% auto'
        });    
    } else  {
        $('.backGif').css({
            'background-size' : 'auto 100%'
        });  
    }

    if (width / height > 1.5) {
        $('.backPic').css({
            'background-size' :  '100% auto'
        });    
    } else  {
        $('.backPic').css({
            'background-size' : 'auto 100%'
        });  
    }
}

var Header = React.createClass({displayName: "Header",
  render: function() {
    return (
	    React.createElement("div", {className: "myHeader centerBlock textCenter white"}, 
	        React.createElement("div", {className: "headerItem inlineBlock"}, React.createElement("a", {href: "https://soundcloud.com/polarmusicstudios"}, "soundcloud")), 
	        React.createElement("div", {className: "headerItem inlineBlock"}, React.createElement("a", {href: "https://chasingnora.bandcamp.com/"}, "bandcamp")), 
	        React.createElement("div", {className: "headerItem inlineBlock"}, React.createElement("a", {href: "https://www.youtube.com/channel/UC1vJTvUDmBuOp82kBUtf6-Q"}, "youtube")), 
	        React.createElement("div", {className: "headerItem inlineBlock"}, React.createElement("a", {href: "https://instagram.com/polarmusicstudios/"}, "instagram"))
	    )
    );
  }
});