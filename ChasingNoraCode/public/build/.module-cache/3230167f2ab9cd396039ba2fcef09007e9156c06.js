var Header = React.createclassName({
  render: function() {
    return (
        React.createElement("div", {className: "row block lightBlueBack"}, 
            React.createElement("div", {className: "col-sm-6"}, 
                React.createElement("div", {className: "innerBlock"}, 
                    React.createElement("div", {className: "grandfatherCover"})
                )
            ), 
            React.createElement("div", {className: "col-sm-6"}, 
                React.createElement("div", {className: "innerBlock"}, 
                    React.createElement("div", {className: "soundcloudGrandfather"}, 
                        React.createElement("iframe", {width: "100%", height: "100%", scrolling: "yes", frameborder: "no", src: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/45046790&color=ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false"})
                    )
                )
            )
        )
    );
  }
});
