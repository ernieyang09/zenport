import React, { useState } from 'react';
import { Panel, Button } from 'rsuite';
import { useMappedState ,useDispatch} from 'redux-react-hook';

import {
  formSelector,
} from 'store/modules/form';

import {
  clickPrevStep,
} from 'store/modules/ui';

import {
  ButtonPanel,
} from 'styles/pages';

const Step4 = () => {
  const { meal, number, restaurant, orders } = useMappedState(formSelector);

  const dispatch = useDispatch();

  return (
    <div>
      <div>
        <Panel header='Order Confirm' bordered>
          <p>meal:{meal}</p>
          <p>number:{number}</p>
          <p>restaurant:{restaurant}</p>
          <p>orders:</p>
          <Panel>
            {orders.map(o => <p key={o.key}>{`${o.dish.name} - ${o.quantity}`}</p>)}
          </Panel>
        </Panel>
      </div>
      <ButtonPanel>
        <Button
          onClick={()=> { dispatch(clickPrevStep()) }}
        >
          PREV
        </Button>
        <Button
          onClick={()=> {
          }}
        >
          SUBMIT
        </Button>
      </ButtonPanel>
    </div>
  )
}

export default Step4;
