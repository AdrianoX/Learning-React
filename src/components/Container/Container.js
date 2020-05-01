import React from 'react';
import styles from './Container.scss';
import PropTypes from 'prop-types';

const Container = props => (  
  <div className = {styles.component}>
    {props.children}
  </div>
);

Container.propTypes = {
  children: PropTypes.any,
};

export default Container;




// import React from 'react';
// import styles from './Container.scss';
// import PropTypes from 'prop-types';


// class Container extends React.Component {
//   static propTypes = {
//     children: PropTypes.node,
//   };

//   render() {
//     const {children} = this.props;
//     return (
//       <div className={styles.component} >
//         {children} 
//       </div>
//     );
//   }
// }

// export default Container;                 <------- second option ? damaged ?