var Website = React.createClass({
  render: function() {
    return (
      <div className='classWebsite'>
        <Header />
        <SplashPic />
        <GrandfatherVideo4 />
        <GrandfatherVideo3 />
        <GrandfatherVideo2 />
        <GrandfatherVideo />
        <HairCut />
        <AlbumRelease />
        <Gallery />
        <MarvinsRoom />
        <ChasingNoraPic1 />
        <ForWantEP />
        <DownloadForWant />
        <YoutubeVids />
        <ChasingNoraPic2 />
        <Footer />
    </div>
    );
  },
  componentDidMount: function() {
    resizeSquares();
  }
});

React.render(<Website />, document.getElementById('website'));
