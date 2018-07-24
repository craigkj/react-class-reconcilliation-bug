var React = require('react');

function Header(props) {
    const classes = `header--${props.name}`;
    return (
        <div className={classes}>
            <p>{props.name}</p>
        </div>
    );
}

export default Header;
