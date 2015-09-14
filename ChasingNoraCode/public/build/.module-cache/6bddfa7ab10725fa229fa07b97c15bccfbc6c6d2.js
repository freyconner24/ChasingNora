var Footer = React.createClass({displayName: "Footer",
  render: function() {
    var style = {
        color: '#333',
        textDecoration: 'underline'
    };
    return (
        React.createElement("div", {className: "myFooter peachBack textCenter"}, 
            React.createElement("div", {className: "footerLinks"}, 
                React.createElement("div", {className: "headerItem inlineBlock"}, React.createElement("a", {href: "https://www.facebook.com/chasingnora?ref=hl"}, "facebook")), 
                React.createElement("div", {className: "headerItem inlineBlock"}, React.createElement("a", {href: "http://polarmusicstudios.com/view/"}, "website")), 
                React.createElement("div", {className: "headerItem inlineBlock"}, React.createElement("a", {href: "https://twitter.com/PolarMuse"}, "twitter")), 
                React.createElement("div", {className: "headerItem inlineBlock"}, React.createElement("a", {href: ""}, "contact"))
            ), 
            React.createElement("div", {className: "line centerBlock darkGrayBack"}), 
            React.createElement("div", {className: "sqs-block-content"}, 
                React.createElement("div", {className: "josefin"}, "Site by ", React.createElement("a", {className: "blackLink", href: "https://www.linkedin.com/in/connerfrey", style: style}, "Conner Frey"), " · Music Recoded At ", React.createElement("a", {className: "blackLink", href: "http://polarmusicstudios.com", style: style}, "Polar Music Studios")
                )
            )
        )
    );
  }
});


