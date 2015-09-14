var YoutubeVids = React.createClass({
  render: function() {
    return (
        <div className='row block creamBack textCenter'>
            <div className='youtubeRow'>
                <div className='col-sm-6'>
                    <div className='innerBlock'>
                        <div className="embed-responsive embed-responsive-16by9">
                            <iframe className='embed-responsive-item' src="https://www.youtube.com/embed/KNrzAkaeWBg" frameBorder="0" allowFullScreen></iframe>
                        </div>
                        <div className='youtubeTitle'>moving mountains</div>
                    </div>
                </div>
                <div className='col-sm-6'>
                    <div className='innerBlock'>
                        <div className="embed-responsive embed-responsive-16by9">
                            <iframe className='embed-responsive-item' src="https://www.youtube.com/embed/UpvnMXsabTI" frameBorder="0" allowFullScreen></iframe>
                        </div>
                        <div className='youtubeTitle'>vibrant dreams</div>
                    </div>
                </div>
            </div>
        </div>
    );
  }
});

