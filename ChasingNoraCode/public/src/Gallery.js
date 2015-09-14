var Gallery = React.createClass({
  render: function() {
    return (
        <div className='creamBack white textCenter bigBelle'>
            <div className='pictureGallery'>
                <div className='row'>
                    <div className='col-sm-3'>
                        <div className='inner'>
                            <img src='/squares/square1.jpg' className='galleryPic seaFoamBack' ></img>
                        </div>
                    </div>
                    <div className='col-sm-3'>
                        <div className='inner'>
                            <img src='/squares/square2.jpg' className='galleryPic seaFoamBack' ></img>
                        </div>
                    </div>
                    <div className='col-sm-3'>
                        <div className='inner'>
                            <img src='/squares/square3.jpg' className='galleryPic seaFoamBack' ></img>
                        </div>
                    </div>
                    <div className='col-sm-3'>
                        <div className='inner'>
                            <img src='/squares/square4.jpg' className='galleryPic seaFoamBack' ></img>
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-sm-3'>
                        <div className='inner'>
                            <img src='/squares/square5.jpg' className='galleryPic seaFoamBack' ></img>
                        </div>
                    </div>
                    <div className='col-sm-3'>
                        <div className='inner'>
                            <img src='/squares/square6.jpg' className='galleryPic seaFoamBack' ></img>
                        </div>
                    </div>
                    <div className='col-sm-3'>
                        <div className='inner'>
                            <img src='/squares/square7.jpg' className='galleryPic seaFoamBack' ></img>
                        </div>
                    </div>
                    <div className='col-sm-3'>
                        <div className='inner'>
                            <img src='/squares/square8.jpg' className='galleryPic seaFoamBack' ></img>
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-sm-3'>
                        <div className='inner'>
                            <img src='/squares/square9.jpg' className='galleryPic seaFoamBack' ></img>
                        </div>
                    </div>
                    <div className='col-sm-3'>
                        <div className='inner'>
                            <img src='/squares/square10.jpg' className='galleryPic seaFoamBack' ></img>
                        </div>
                    </div>
                    <div className='col-sm-3'>
                        <div className='inner'>
                            <img src='/squares/square11.jpg' className='galleryPic seaFoamBack' ></img>
                        </div>
                    </div>
                    <div className='col-sm-3'>
                        <div className='inner'>
                            <img src='/squares/square12.jpg' className='galleryPic seaFoamBack' ></img>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
  },
  componentDidMount: function() {
    this.resizePhotos();
    $(window).on('resize', this.resizePhotos);
  },

  resizePhotos: function () {
    var width = $('.inner').width();
    $('.galleryPic').height(width);
  }
});






