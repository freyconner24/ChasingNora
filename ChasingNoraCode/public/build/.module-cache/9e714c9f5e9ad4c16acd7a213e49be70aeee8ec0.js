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
                        React.createElement("div", {className: "inner"}, 
                            React.createElement("img", {src: "/squares/square1.jpg", className: "galleryPic seaFoamBack"})
                        )
                    ), 
                    React.createElement("div", {className: "col-sm-3"}, 
                        React.createElement("div", {className: "inner"}, 
                            React.createElement("img", {src: "/squares/square2.jpg", className: "galleryPic seaFoamBack"})
                        )
                    ), 
                    React.createElement("div", {className: "col-sm-3"}, 
                        React.createElement("div", {className: "inner"}, 
                            React.createElement("img", {src: "/squares/square3.jpg", className: "galleryPic seaFoamBack"})
                        )
                    ), 
                    React.createElement("div", {className: "col-sm-3"}, 
                        React.createElement("div", {className: "inner"}, 
                            React.createElement("img", {src: "/squares/square4.jpg", className: "galleryPic seaFoamBack"})
                        )
                    )
                ), 
                React.createElement("div", {className: "row"}, 
                    React.createElement("div", {className: "col-sm-3"}, 
                        React.createElement("div", {className: "inner"}, 
                            React.createElement("img", {src: "/squares/square5.jpg", className: "galleryPic seaFoamBack"})
                        )
                    ), 
                    React.createElement("div", {className: "col-sm-3"}, 
                        React.createElement("div", {className: "inner"}, 
                            React.createElement("img", {src: "/squares/square6.jpg", className: "galleryPic seaFoamBack"})
                        )
                    ), 
                    React.createElement("div", {className: "col-sm-3"}, 
                        React.createElement("div", {className: "inner"}, 
                            React.createElement("img", {src: "/squares/square7.jpg", className: "galleryPic seaFoamBack"})
                        )
                    ), 
                    React.createElement("div", {className: "col-sm-3"}, 
                        React.createElement("div", {className: "inner"}, 
                            React.createElement("img", {src: "/squares/square8.jpg", className: "galleryPic seaFoamBack"})
                        )
                    )
                ), 
                React.createElement("div", {className: "row"}, 
                    React.createElement("div", {className: "col-sm-3"}, 
                        React.createElement("div", {className: "inner"}, 
                            React.createElement("img", {src: "/squares/square9.jpg", className: "galleryPic seaFoamBack"})
                        )
                    ), 
                    React.createElement("div", {className: "col-sm-3"}, 
                        React.createElement("div", {className: "inner"}, 
                            React.createElement("img", {src: "/squares/square10.jpg", className: "galleryPic seaFoamBack"})
                        )
                    ), 
                    React.createElement("div", {className: "col-sm-3"}, 
                        React.createElement("div", {className: "inner"}, 
                            React.createElement("img", {src: "/squares/square11.jpg", className: "galleryPic seaFoamBack"})
                        )
                    ), 
                    React.createElement("div", {className: "col-sm-3"}, 
                        React.createElement("div", {className: "inner"}, 
                            React.createElement("img", {src: "/squares/square12.jpg", className: "galleryPic seaFoamBack"})
                        )
                    )
                )
            )
        )
    );
  },
  componentDidMount: function() {
    //this.setPicHeight();
    //$(window).on('resize', this.setPicHeight.bind(this));
    this.resizePhotos();
    $(window).on('resize', this.resizePhotos());
  },

  resizePhotos: function () {
            var width = $('.inner').width();
            $('.galleryPic').height(width);
        } ,

  setPicHeight: function () {
    var $root = $(this.getDOMNode());
    var startWidth = $root.find('.inner').width();
    var innerWidth = $root.find('.inner').width();
    var endWidth = $root.find('.inner').width();
    this.setState({startPicHeight: startWidth, innerPicHeight: innerWidth, endPicHeight: endWidth});
  }
});






