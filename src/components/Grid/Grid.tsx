import { useRef, useMemo } from 'react'
import { useAppSelector } from '../../redux/hooks';
import './Grid.css'

// components
import ColumnsWrapper from '../ColumnsWrapper';
import RowsWrapper from '../RowsWrapper';


interface IGrid {
  hideColumns?: boolean
  hideRows?: boolean
}

const Grid: React.FC<IGrid> = (props) => {
  const { 
    hideColumns = false, 
    hideRows = false 
  } = props;

  const { columnCount, columnWidth } = useAppSelector(state => state.columns);
  const { rowCount, rowHeight } = useAppSelector(state => state.rows);

  const columnsWrapperRef = useRef<HTMLElement>(null);
  const rowsWrapperRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  const style = useMemo(
    () => ({
      width: hideColumns ? '' : columnCount * columnWidth + 1,
      height: hideRows ? '' : rowCount * rowHeight + 1, 
    }), [ columnCount, rowCount, columnWidth, rowHeight, hideColumns, hideRows ]
  );


  return (
    <div 
      className='Grid' 
      ref={ gridRef } 
      style={ style }
    >
      { hideColumns ? null : <ColumnsWrapper ref={ columnsWrapperRef } /> }
      { hideRows ? null : <RowsWrapper ref={ rowsWrapperRef }/> }
    </div>
  );
};


export default Grid;