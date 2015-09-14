var AlbumRelease = React.createClass({displayName: "AlbumRelease",
render: function() {
    return (
	    React.createElement("div", {className: "block albumRelease darkBlueBack white textCenter bigBelle"}, 
	        React.createElement("div", {className: "downloadGrandfather"}, "album coming august 25th"), 
	        React.createElement("div", {className: "grandfatherAlbumArt centerBlock"})
	    )
    );
  }
});