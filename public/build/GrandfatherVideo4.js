var GrandfatherVideo4 = React.createClass({displayName: "GrandfatherVideo4",
  render: function() {
    return (
      React.createElement("div", {className: "block darkBlueBack white textCenter bigBelle"}, 
          React.createElement("div", {className: "marvinsRoom"}, "\"the dead, they waltz\" (video 4)"), 
          React.createElement("div", {className: "embed-responsive embed-responsive-16by9"}, 
              React.createElement("iframe", {className: "embed-responsive-item myPadding", src: "https://www.youtube.com/embed/PR2KcT9Ilo0", frameBorder: "0", allowFullScreen: true})
          )
      )
    );
  }
});
