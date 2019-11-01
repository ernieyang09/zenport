import React from 'react';
import { SelectPicker, InputNumber } from 'rsuite';

import {
  ErrMsg,
} from 'styles/pages';

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
        err && <ErrMsg>{err}</ErrMsg>
      }
      <div>Please select quantity</div>
      <div>
          <InputNumber
            min={1}
            max={10}
            value={order.quantity}
            onChange={onChangeQuantity}
          />
      </div>
      {ControlBtn}
    </>
  )
}


export default OrderInput;
