import classes from './Header.module.css'

const Header = () => {
    return (
        <header className={classes.header}>
          <img className={classes.logo}  src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Logo_TV_2015.svg/1200px-Logo_TV_2015.svg.png"></img>
      </header>
    );
}

export default Header;