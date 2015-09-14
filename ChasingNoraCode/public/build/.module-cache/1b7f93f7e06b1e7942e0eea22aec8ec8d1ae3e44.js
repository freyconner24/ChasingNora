var Gallery = React.createClass({displayName: "Gallery",
  render: function() {
    
    return (
        React.createElement("div", {className: "creamBack white textCenter bigBelle"}, 
            React.createElement("div", {className: "pictureGallery"}, 
                React.createElement("div", {className: "row"}, 
                    React.createElement("div", {className: "col-xs-3"}, 
                        React.createElement("div", {className: "innerPicStart"}, 
                            React.createElement("img", {src: "/squares/square1.jpg", className: "galleryPic seaFoamBack"})
                        )
                    ), 
                    React.createElement("div", {className: "col-sm-3"}, 
                        React.createElement("div", {className: "innerPic"}, 
                            React.createElement("div", {className: "galleryPic seaFoamBack"})
                        )
                    ), 
                    React.createElement("div", {className: "col-sm-3"}, 
                        React.createElement("div", {className: "innerPic"}, 
                            React.createElement("div", {className: "galleryPic darkBlueBack"})
                        )
                    ), 
                    React.createElement("div", {className: "col-sm-3"}, 
                        React.createElement("div", {className: "innerPicEnd"}, 
                            React.createElement("div", {className: "galleryPic seaFoamBack"})
                        )
                    )
                ), 
                React.createElement("div", {className: "row"}, 
                    React.createElement("div", {className: "col-sm-3"}, 
                        React.createElement("div", {className: "innerPicStart"}, 
                            React.createElement("div", {className: "galleryPic seaFoamBack"})
                        )
                    ), 
                    React.createElement("div", {className: "col-sm-3"}, 
                        React.createElement("div", {className: "innerPic"}, 
                            React.createElement("div", {className: "galleryPic darkBlueBack"})
                        )
                    ), 
                    React.createElement("div", {className: "col-sm-3"}, 
                        React.createElement("div", {className: "innerPic"}, 
                            React.createElement("div", {className: "galleryPic seaFoamBack"})
                        )
                    ), 
                    React.createElement("div", {className: "col-sm-3"}, 
                        React.createElement("div", {className: "innerPicEnd"}, 
                            React.createElement("div", {className: "galleryPic darkBlueBack"})
                        )
                    )
                ), 
                React.createElement("div", {className: "row"}, 
                    React.createElement("div", {className: "col-sm-3"}, 
                        React.createElement("div", {className: "innerPicStart"}, 
                            React.createElement("div", {className: "galleryPic darkBlueBack"})
                        )
                    ), 
                    React.createElement("div", {className: "col-sm-3"}, 
                        React.createElement("div", {className: "innerPic"}, 
                            React.createElement("div", {className: "galleryPic seaFoamBack"})
                        )
                    ), 
                    React.createElement("div", {className: "col-sm-3"}, 
                        React.createElement("div", {className: "innerPic"}, 
                            React.createElement("div", {className: "galleryPic darkBlueBack"})
                        )
                    ), 
                    React.createElement("div", {className: "col-sm-3"}, 
                        React.createElement("div", {className: "innerPicEnd"}, 
                            React.createElement("div", {className: "galleryPic seaFoamBack"})
                        )
                    )
                )
            )
        )
    );
  }
});