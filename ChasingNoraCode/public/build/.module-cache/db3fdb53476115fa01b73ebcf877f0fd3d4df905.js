var AlbumRelease = React.createClass({displayName: "AlbumRelease",
render: function() {
    return (
	    React.createElement("div", {className: "block albumRelease darkBlueBack white textCenter bigBelle"}, 
	        React.createElement("div", {className: "downloadGrandfather"}, "full alnum coming soon"), 
	        React.createElement("div", {className: "grandfatherAlbumArt centerBlock"})
	    )
    );
  }
});