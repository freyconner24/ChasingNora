var MarvinsRoom = React.createClass({displayName: "MarvinsRoom",
  render: function() {
    return (
	    React.createElement("div", {className: "block peachBack white textCenter bigBelle"}, 
	        React.createElement("div", {className: "embed-responsive embed-responsive-16by9"}, 
	            React.createElement("iframe", {className: "embed-responsive-item myPadding", src: "https://www.youtube.com/embed/FoHGuyL46KI", frameBorder: "0", allowFullScreen: true})
	        ), 
	        React.createElement("iframe", {className: "myPadding", width: "100%", height: "166", scrolling: "no", frameBorder: "no", src: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/193251484&color=ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false"}), 
	        React.createElement("div", {className: "marvinsRoom"}, "Marvin's Room"), 
	        React.createElement("a", {href: ""}, React.createElement("div", {className: "myButtonMarv white textCenter centerBlock darkPeachBack", onClick: this.downlodMarvinsRoom}, "download"))
	    )
    );
  },
  downlodMarvinsRoom: function () {
  	console.log("hello");
  	/*$.ajax({
        //url: 'http://54.183.52.112:9000/downloadsong',
        url: 'http://chasingnora.com/downloadsong',
        success: function (data) {
            console.log('Success: ' + data);
        },
        error: function (error) {
            console.log('Error: ' + error.message);
        }
    });*/
  }
});
	