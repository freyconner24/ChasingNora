var GrandfatherEP = React.createClass({
  render: function() {
    return (
        <div className='row block darkBlueBack'>
            <div className='col-sm-6'>
                <div className='innerBlock'>
                    <div className='grandfatherCover'></div>
                </div>
            </div>
            <div className='col-sm-6'>
                <div className='innerBlock'>
                    <div className='soundcloudGrandfather'>
                        <iframe width="100%" height="100%" scrolling="yes" frameBorder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/157970444&amp;color=ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false"></iframe>
                    </div>
                </div>
            </div>
        </div>
    );
  }
});
