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