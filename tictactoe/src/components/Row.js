import React from 'react';
import Cell from './Cell';

function Row({clicks}) {
  return (
    <div className='row'>
        <Cell passDown={clicks}/>
        <Cell passDown={clicks}/>
        <Cell passDown={clicks}/>
    </div>
  )
}

export default Row