import Header from '../Header';
import Body from '../Body';
import Aside from '../Aside';
import './MainWrapper.css'

const MainWrapper = () => {
  return (
    <div className='mainWrapper'>
      <Header />
      <Aside />
      <Body />
    </div>
  );
};


export default MainWrapper;