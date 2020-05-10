import React from 'react';
import {NavLink, Link} from 'react-router-dom';
import styles from './Header.scss';
import Container from '../Container/Container';
import Icon from '../Icon/Icon';
import {settings} from '../../data/dataStore';
import {infoContents, homeContents, faqContents} from '../../data/dataStore';
import Search from '../Search/SearchContainer';
import PropTypes from 'prop-types';



class Header extends React.Component {
    static propTypes = {
      to: PropTypes.node,
      icon: PropTypes.any,
    }

    render() {
      const {icon} = settings.header;    
      return (
        <header className={styles.component}>
          <Container>
            <div className={styles.wrapper}>
              <Link className={styles.logo} to='/'>
                <Icon name={icon} />     
              </Link>
              <Search />
              <nav>
                <NavLink exact to='/' activeClassName='active'>{homeContents.title}</NavLink>
                <NavLink exact to='/info' activeClassName='active'>{infoContents.title}</NavLink>
                <NavLink exact to='/faq'>{faqContents.title}</NavLink>
              </nav>
            </div>
          </Container>
        </header>
      );
    }
}

export default Header;
