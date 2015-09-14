var GrandfatherVideo = React.createClass({displayName: "GrandfatherVideo",
  render: function() {
    return (
      React.createElement("div", {className: "block lightBlueBack white textCenter bigBelle"}, 
          React.createElement("div", {className: "marvinsRoom"}, "\"this time i'm gone\" (video 1)"), 
          React.createElement("div", {className: "embed-responsive embed-responsive-16by9"}, 
              React.createElement("iframe", {className: "embed-responsive-item myPadding", src: "https://www.youtube.com/embed/b3SRB6j_cTw", frameBorder: "0", allowFullScreen: true})
          )
      )
    );
  },
  downlodMarvinsRoom: function () {
    console.log("hello");
    $.ajax({
        url: 'http://chasingnora.com/downloadsong',
        type: 'GET',
        success: function (data) {
            console.log('Success: ' + data);
        },
        error: function (error) {
            console.log('Error: ' + error.message);
        }
    });
  }
});
  