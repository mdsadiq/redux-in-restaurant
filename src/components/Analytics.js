import React from 'react';
// functional or stateless component
export default function InventoryAnalytics(){
  return(
    <div className="inventory" style={{flex: 1}}>
          <h2>Inventory Analysis</h2>
          <hr /><hr />
          <p>Total Burger Sold : 22</p>
          <p>Total Pizza Sold : 14</p>
          <p>Total Crab Sold : 8</p>
          <p>Total Mac and Cheese Sold : 17</p>
        </div>
  )
}