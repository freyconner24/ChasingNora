var Gallery = React.createClass({displayName: "Gallery",

  getInitialState: function () {
    return {startPicHeight: 0, innerPicHeight: 0, endPicHeight: 0};
  },
  render: function() {
    var startPicHeight = this.state.startPicHeight;
    var innerPicHeight = this.state.innerPicHeight;
    var endPicHeight = this.state.endPicHeight;

    return (
        React.createElement("div", {className: "creamBack white textCenter bigBelle"}, 
            React.createElement("div", {className: "pictureGallery"}, 
                React.createElement("div", {className: "row"}, 
                    React.createElement("div", {className: "col-sm-3"}, 
                        React.createElement("div", {className: "innerPicStart"}, 
                            React.createElement("img", {src: "/squares/square1.jpg", className: "galleryPic seaFoamBack", height: startPicHeight})
                        )
                    ), 
                    React.createElement("div", {className: "col-sm-3"}, 
                        React.createElement("div", {className: "innerPic"}, 
                            React.createElement("img", {src: "/squares/square2.jpg", className: "galleryPic seaFoamBack", height: innerPicHeight})
                        )
                    ), 
                    React.createElement("div", {className: "col-sm-3"}, 
                        React.createElement("div", {className: "innerPic"}, 
                            React.createElement("img", {src: "/squares/square3.jpg", className: "galleryPic seaFoamBack", height: innerPicHeight})
                        )
                    ), 
                    React.createElement("div", {className: "col-sm-3"}, 
                        React.createElement("div", {className: "innerPicEnd"}, 
                            React.createElement("img", {src: "/squares/square4.jpg", className: "galleryPic seaFoamBack", height: endPicHeight})
                        )
                    )
                ), 
                React.createElement("div", {className: "row"}, 
                    React.createElement("div", {className: "col-sm-3"}, 
                        React.createElement("div", {className: "innerPicStart"}, 
                            React.createElement("img", {src: "/squares/square5.jpg", className: "galleryPic seaFoamBack", height: startPicHeight})
                        )
                    ), 
                    React.createElement("div", {className: "col-sm-3"}, 
                        React.createElement("div", {className: "innerPic"}, 
                            React.createElement("img", {src: "/squares/square6.jpg", className: "galleryPic seaFoamBack", height: innerPicHeight})
                        )
                    ), 
                    React.createElement("div", {className: "col-sm-3"}, 
                        React.createElement("div", {className: "innerPic"}, 
                            React.createElement("img", {src: "/squares/square7.jpg", className: "galleryPic seaFoamBack", height: innerPicHeight})
                        )
                    ), 
                    React.createElement("div", {className: "col-sm-3"}, 
                        React.createElement("div", {className: "innerPicEnd"}, 
                            React.createElement("img", {src: "/squares/square8.jpg", className: "galleryPic seaFoamBack", height: endPicHeight})
                        )
                    )
                ), 
                React.createElement("div", {className: "row"}, 
                    React.createElement("div", {className: "col-sm-3"}, 
                        React.createElement("div", {className: "innerPicStart"}, 
                            React.createElement("img", {src: "/squares/square9.jpg", className: "galleryPic seaFoamBack", height: startPicHeight})
                        )
                    ), 
                    React.createElement("div", {className: "col-sm-3"}, 
                        React.createElement("div", {className: "innerPic"}, 
                            React.createElement("img", {src: "/squares/square10.jpg", className: "galleryPic seaFoamBack", height: innerPicHeight})
                        )
                    ), 
                    React.createElement("div", {className: "col-sm-3"}, 
                        React.createElement("div", {className: "innerPic"}, 
                            React.createElement("img", {src: "/squares/square11.jpg", className: "galleryPic seaFoamBack", height: innerPicHeight})
                        )
                    ), 
                    React.createElement("div", {className: "col-sm-3"}, 
                        React.createElement("div", {className: "innerPicEnd"}, 
                            React.createElement("img", {src: "/squares/square12.jpg", className: "galleryPic seaFoamBack", height: endPicHeight})
                        )
                    )
                )
            )
        )
    );
  },
  componentDidMount: function() {
    this.setPicHeight();
    $(window).on('resize', this.setPicHeight.bind(this));
  },

  setPicHeight: function () {
    var $root = $(this.getDOMNode());
    var startWidth = $root.find('.col-sm-3').width();
    var innerWidth = $root.find('.col-sm-3').width();
    var endWidth = $root.find('.col-sm-3').width();
    this.setState({startPicHeight: startWidth, innerPicHeight: innerWidth, endPicHeight: endWidth});
  }
});






