var GrandfatherVideo2 = React.createClass({displayName: "GrandfatherVideo2",
  render: function() {
    return (
      React.createElement("div", {className: "block lightBlueBack white textCenter bigBelle"}, 
          React.createElement("div", {className: "marvinsRoom"}, "\"the marriott\" (video 2)"), 
          React.createElement("div", {className: "embed-responsive embed-responsive-16by9"}, 
              React.createElement("iframe", {className: "embed-responsive-item myPadding", src: "https://www.youtube.com/embed/b3SRB6j_cTw", frameBorder: "0", allowFullScreen: true})
          )
      )
    );
  }
});
  