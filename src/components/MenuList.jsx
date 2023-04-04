import React from 'react';
import MenuItems from './MenuItems';

function MenuList({ props }) {
  // console.log("list   ",props);
  return (
    <div>
      {props.map(el => {
        return <MenuItems props = {el} key={el.itemName}/>
      })
    }
    </div>
  );
}

export default MenuList;