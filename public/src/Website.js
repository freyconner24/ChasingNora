var Website = React.createClass({
  render: function() {
    return (
      <div className='classWebsite'>
        <Header />
        <SplashPic />
        <GrandfatherEP />
        <DownloadGrandfather />
        <GrandfatherVideo5 />
        <GrandfatherVideo4 />
        <GrandfatherVideo3 />
        <GrandfatherVideo2 />
        <GrandfatherVideo />
        <HairCut />
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
