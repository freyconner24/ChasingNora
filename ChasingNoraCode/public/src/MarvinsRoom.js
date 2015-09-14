var MarvinsRoom = React.createClass({
  render: function() {
    return (
	    <div className='block peachBack white textCenter bigBelle'>
	        <div className="embed-responsive embed-responsive-16by9">
	            <iframe className='embed-responsive-item myPadding' src="https://www.youtube.com/embed/FoHGuyL46KI" frameBorder="0" allowFullScreen></iframe>
	        </div>
	        <iframe className='myPadding' width="100%" height="166" scrolling="no" frameBorder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/193251484&amp;color=ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false"></iframe>
	        <div className='marvinsRoom'>Marvin&#39;s Room</div>
	        <a href='https://soundcloud.com/polarmusicstudios'><div className='myButtonMarv white textCenter centerBlock darkPeachBack' onClick={this.downlodMarvinsRoom}>download</div></a>
	    </div>
    );
  },
  downlodMarvinsRoom: function () {
  	console.log("hello");
  	/*$.ajax({
        //url: 'http://54.183.52.112:9000/downloadsong',
        url: 'http://chasingnora.com/downloadsong',
        success: function (data) {
            console.log('Success: ' + data);
        },
        error: function (error) {
            console.log('Error: ' + error.message);
        }
    });*/
  }
});
	