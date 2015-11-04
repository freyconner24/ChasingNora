var Website = React.createClass({displayName: "Website",
  render: function() {
    return (
      React.createElement("div", {className: "classWebsite"}, 
        React.createElement(Header, null), 
        React.createElement(SplashPic, null), 
        React.createElement(GrandfatherVideo5, null), 
        React.createElement(GrandfatherVideo4, null), 
        React.createElement(GrandfatherVideo3, null), 
        React.createElement(GrandfatherVideo2, null), 
        React.createElement(GrandfatherVideo, null), 
        React.createElement(HairCut, null), 
        React.createElement(AlbumRelease, null), 
        React.createElement(Gallery, null), 
        React.createElement(MarvinsRoom, null), 
        React.createElement(ChasingNoraPic1, null), 
        React.createElement(ForWantEP, null), 
        React.createElement(DownloadForWant, null), 
        React.createElement(YoutubeVids, null), 
        React.createElement(ChasingNoraPic2, null), 
        React.createElement(Footer, null)
    )
    );
  },
  componentDidMount: function() {
    resizeSquares();
  }
});

React.render(React.createElement(Website, null), document.getElementById('website'));
