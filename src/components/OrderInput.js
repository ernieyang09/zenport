import React from 'react';
import { SelectPicker, InputNumber } from 'rsuite';

const OrderInput = ({dishes, order, onChangeOrder, onChangeQuantity, ControlBtn}) => {
  return (
    <>
      <div>Please select a meal</div>
      <div>
        <SelectPicker
          data={dishes.map(d => ({ label: d.name, value: d }))}
          searchable={false}
          value={order.dish}
          onChange={onChangeOrder}
        />
      </div>
      <div>Please select quantity</div>
      <div>
          <InputNumber
            value={order.quantity}
            onChange={onChangeQuantity}
          />
      </div>
      {ControlBtn}
    </>
  )
}


export default OrderInput;
