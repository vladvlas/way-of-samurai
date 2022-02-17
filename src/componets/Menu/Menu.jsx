import { NavLink } from 'react-router-dom';
import classes from './Menu.module.css'

const Menu = () => {
    return (
        <nav className={classes.menu}>
        <li className={classes.item}><NavLink activeClassName={classes.active} to="/profile">Profile</NavLink></li>
        <li className={classes.item}><NavLink activeClassName={classes.active} to="/dialogs">Messages</NavLink></li>
        <li className={classes.item}><NavLink activeClassName={classes.active} to="/news">News</NavLink></li>
        <li className={classes.item}><NavLink activeClassName={classes.active} to="/music">Music</NavLink></li>
        <li className={classes.item}><NavLink activeClassName={classes.active} to="/settings">Settings</NavLink></li>
      </nav>
    );
}

export default Menu;