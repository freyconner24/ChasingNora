var GrandfatherEP = React.createClass({displayName: "GrandfatherEP",
  render: function() {
    return (
        React.createElement("div", {className: "row block darkBlueBack white textCenter bigBelle"}, 
            React.createElement("div", {className: "marvinsRoom"}, 
                "grandfather (november 3rd, 2015)"
            ), 
            React.createElement("div", {className: "col-sm-6"}, 
                React.createElement("div", {className: "innerBlock"}, 
                    React.createElement("div", {className: "grandfatherCover"})
                )
            ), 
            React.createElement("div", {className: "col-sm-6"}, 
                React.createElement("div", {className: "innerBlock"}, 
                    React.createElement("div", {className: "soundcloudGrandfather"}, 
                        React.createElement("iframe", {width: "100%", height: "100%", scrolling: "yes", frameBorder: "no", src: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/157970444&color=ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false"})
                    )
                )
            )
        )
    );
  }
});
