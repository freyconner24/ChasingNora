var YoutubeVids = React.createClass({displayName: "YoutubeVids",
  render: function() {
    return (
        React.createElement("div", {className: "row block creamBack textCenter"}, 
            React.createElement("div", {className: "youtubeRow"}, 
                React.createElement("div", {className: "col-sm-6"}, 
                    React.createElement("div", {className: "innerBlock"}, 
                        React.createElement("div", {className: "embed-responsive embed-responsive-16by9"}, 
                            React.createElement("iframe", {className: "embed-responsive-item", src: "https://www.youtube.com/embed/KNrzAkaeWBg", frameBorder: "0", allowFullScreen: true})
                        ), 
                        React.createElement("div", {className: "youtubeTitle"}, "moving mountains")
                    )
                ), 
                React.createElement("div", {className: "col-sm-6"}, 
                    React.createElement("div", {className: "innerBlock"}, 
                        React.createElement("div", {className: "embed-responsive embed-responsive-16by9"}, 
                            React.createElement("iframe", {className: "embed-responsive-item", src: "https://www.youtube.com/embed/UpvnMXsabTI", frameBorder: "0", allowFullScreen: true})
                        ), 
                        React.createElement("div", {className: "youtubeTitle"}, "vibrant dreams")
                    )
                )
            )
        )
    );
  }
});

