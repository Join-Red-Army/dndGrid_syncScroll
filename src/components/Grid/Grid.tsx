import { useRef, useMemo } from 'react'
import { useAppSelector } from '../../redux/hooks';
import './Grid.css'

// components
import ColumnsWrapper from '../ColumnsWrapper';
import RowsWrapper from '../RowsWrapper';


const Grid = () => {
  const { columnCount, columnWidth } = useAppSelector(state => state.columns);
  const { rowCount, rowHeight } = useAppSelector(state => state.rows);

  const columnsWrapperRef = useRef<HTMLElement>(null);
  const rowsWrapperRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  const style = useMemo(
    () => ({
      width: columnCount * columnWidth + 2,
      height: rowCount * rowHeight + 1, 
    }), [ columnCount, rowCount, columnWidth, rowHeight ]
  );


  return (
    <div 
      className='Grid' 
      ref={ gridRef } 
      style={ style }
    >
      <ColumnsWrapper ref={ columnsWrapperRef } />
      <RowsWrapper ref={ rowsWrapperRef }/>
    </div>
  );
};


export default Grid;