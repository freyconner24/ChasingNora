var Gallery = React.createClass({displayName: "Gallery",
  render: function() {
    var divStyle = {
        width: '100%',
        height: '230px'
    };
    return (
        React.createElement("div", {className: "creamBack white textCenter bigBelle"}, 
            React.createElement("div", {className: "pictureGallery"}, 
                React.createElement("div", {className: "row"}, 
                    React.createElement("div", {className: "col-xs-3"}, 
                        React.createElement("div", {className: "innerPicStart"}, 
                            React.createElement("div", {className: "galleryPic darkBlueBack", style: divStyle})
                        )
                    ), 
                    React.createElement("div", {className: "col-sm-3"}, 
                        React.createElement("div", {className: "innerPic"}, 
                            React.createElement("div", {className: "galleryPic seaFoamBack", style: divStyle})
                        )
                    ), 
                    React.createElement("div", {className: "col-sm-3"}, 
                        React.createElement("div", {className: "innerPic"}, 
                            React.createElement("div", {className: "galleryPic darkBlueBack", style: divStyle})
                        )
                    ), 
                    React.createElement("div", {className: "col-sm-3"}, 
                        React.createElement("div", {className: "innerPicEnd"}, 
                            React.createElement("div", {className: "galleryPic seaFoamBack", style: divStyle})
                        )
                    )
                ), 
                React.createElement("div", {className: "row"}, 
                    React.createElement("div", {className: "col-sm-3"}, 
                        React.createElement("div", {className: "innerPicStart"}, 
                            React.createElement("div", {className: "galleryPic seaFoamBack", style: divStyle})
                        )
                    ), 
                    React.createElement("div", {className: "col-sm-3"}, 
                        React.createElement("div", {className: "innerPic"}, 
                            React.createElement("div", {className: "galleryPic darkBlueBack", style: divStyle})
                        )
                    ), 
                    React.createElement("div", {className: "col-sm-3"}, 
                        React.createElement("div", {className: "innerPic"}, 
                            React.createElement("div", {className: "galleryPic seaFoamBack", style: divStyle})
                        )
                    ), 
                    React.createElement("div", {className: "col-sm-3"}, 
                        React.createElement("div", {className: "innerPicEnd"}, 
                            React.createElement("div", {className: "galleryPic darkBlueBack", style: divStyle})
                        )
                    )
                ), 
                React.createElement("div", {className: "row"}, 
                    React.createElement("div", {className: "col-sm-3"}, 
                        React.createElement("div", {className: "innerPicStart"}, 
                            React.createElement("div", {className: "galleryPic darkBlueBack", style: divStyle})
                        )
                    ), 
                    React.createElement("div", {className: "col-sm-3"}, 
                        React.createElement("div", {className: "innerPic"}, 
                            React.createElement("div", {className: "galleryPic seaFoamBack", style: divStyle})
                        )
                    ), 
                    React.createElement("div", {className: "col-sm-3"}, 
                        React.createElement("div", {className: "innerPic"}, 
                            React.createElement("div", {className: "galleryPic darkBlueBack", style: divStyle})
                        )
                    ), 
                    React.createElement("div", {className: "col-sm-3"}, 
                        React.createElement("div", {className: "innerPicEnd"}, 
                            React.createElement("div", {className: "galleryPic seaFoamBack", style: divStyle})
                        )
                    )
                )
            )
        )
    );
  }
});