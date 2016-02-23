var Header = React.createClass({displayName: "Header",
      render: function() {
        return (
            React.createElement("div", {className: "myHeader centerBlock textCenter white"},
                React.createElement("div", {className: "headerItem inlineBlock"}, React.createElement("a", {href: "https://soundcloud.com/chasingnora"}, "soundcloud")), 
                React.createElement("div", {className: "headerItem inlineBlock"}, React.createElement("a", {href: "https://chasingnora.bandcamp.com/music"}, "bandcamp")),
                React.createElement("div", {className: "headerItem inlineBlock"}, React.createElement("a", {href: "https://www.youtube.com/channel/UCu0T4YHejamtgCc1aQjqdSg"}, "youtube")),
                React.createElement("div", {className: "headerItem inlineBlock"}, React.createElement("a", {href: "https://instagram.com/chasingnora/"}, "instagram"))
            )
        );
      }
});
