var AlbumRelease = React.createClass({displayName: "AlbumRelease",
render: function() {
    return (
	    React.createElement("div", {className: "block albumRelease darkBlueBack white textCenter bigBelle"}, 
	        React.createElement("div", {className: "downloadGrandfather"}, "next video aug 12th"), 
	        React.createElement("div", {className: "grandfatherAlbumArt centerBlock"})
	    )
    );
  }
});