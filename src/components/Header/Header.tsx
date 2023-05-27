import './Header.css'

import Grid from '../Grid';

const Header = () => {
  return (
    <div className='Header'>
      <div className="header__inner">
        <Grid hideRows={ true }/>
      </div>
    </div>
  );
};

export default Header;