var Footer = React.createClass({
  render: function() {
    var style = {
        color: '#333',
        textDecoration: 'underline'
    };
    return (
        <div className='myFooter peachBack textCenter'>
            <div className='footerLinks'>
                <div className='headerItem inlineBlock'><a href="https://www.facebook.com/chasingnora?ref=hl">facebook</a></div>
                <div className='headerItem inlineBlock'><a href="http://polarmusicstudios.com/view/">website</a></div>
                <div className='headerItem inlineBlock'><a href="https://twitter.com/PolarMuse">twitter</a></div>
                <div className='headerItem inlineBlock'><a href="">contact</a></div>
            </div>
            <div className='line centerBlock darkGrayBack'></div>
            <div className="sqs-block-content">
                <div className='josefin'>Site by <a className='blackLink' href="https://www.linkedin.com/in/connerfrey" style={style}>Conner Frey</a> &middot; Music Recoded At <a className='blackLink' href="http://polarmusicstudios.com" style={style}>Polar Music Studios</a>
                </div>
            </div>
        </div>
    );
  }
});


