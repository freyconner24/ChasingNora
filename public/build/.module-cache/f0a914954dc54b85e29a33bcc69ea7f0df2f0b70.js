var AlbumRelease = React.createClass({displayName: "AlbumRelease",
render: function() {
    return (
	    React.createElement("div", {className: "block darkBlueBack white textCenter bigBelle"}, 
	        React.createElement("div", {className: "downloadGrandfather"}, "album coming august 25th"), 
	        React.createElement("div", {className: "myButton white textCenter centerBlock navyBack"}, "download")
	    )
    );
  }
});