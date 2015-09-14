var AlbumRelease = React.createClass({displayName: "AlbumRelease",
render: function() {
    return (
	    React.createElement("div", {className: "block darkBlueBack white textCenter bigBelle"}, 
	        React.createElement("div", {className: "downloadGrandfather"}, "grandfather"), 
	        React.createElement("div", {className: "myButton white textCenter centerBlock navyBack"}, "download")
	    )
    );
  }
});