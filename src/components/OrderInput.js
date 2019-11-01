import React from 'react';
import { SelectPicker, InputNumber } from 'rsuite';

const OrderInput = ({dishes, order, onChangeOrder, onChangeQuantity, err, ControlBtn}) => {
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
      {
        err && <div>{err}</div>
      }
      <div>Please select quantity</div>
      <div>
          <InputNumber
            min={1}
            value={order.quantity}
            onChange={onChangeQuantity}
          />
      </div>
      {ControlBtn}
    </>
  )
}


export default OrderInput;
