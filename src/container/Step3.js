import React, { useState, useCallback, useRef } from 'react';
import { Button } from 'rsuite';
import { useMappedState ,useDispatch} from 'redux-react-hook';

import {
  clickPrevStep,
  clickNextStep,
} from 'store/modules/ui';

import {
  formSelector, setOrder,
} from 'store/modules/form';

import {
  dishesSelector,
} from 'store/modules/dishes';

import {
  OrderInput,
} from 'components';

import {
  ButtonPanel,
} from 'styles/pages';


const Step3 = () => {
  const { number, restaurant, orders } = useMappedState(formSelector);

  const mapState = useCallback((state) => {
    const dishes = dishesSelector(state);
    const filterDishes = dishes
      .filter(d => d.restaurant === restaurant)
      .map(d => ({id: d.id, name: d.name}))
    return filterDishes;
  }, [restaurant]);

  const dishes = useMappedState(mapState);
  
  const [currentOrder, setCurrentOrder] = useState(orders);
  const [valid, setValid] = useState({});

  let tempCount = useRef(currentOrder.length - 1);

  const dispatch = useDispatch();

  const AddButton = () => (
    <Button
      onClick={()=> { setCurrentOrder([...currentOrder, { key: ++tempCount.current, dish: null, quantity: 1 }]) }}
    >
      Add
    </Button>
  )
  
  const DelButton = ({ id }) => (
    <Button
      onClick={()=> { setCurrentOrder(currentOrder.filter(o => o.key !== id )) }}
    >
      Del
    </Button>
  )

  const onChangeOrder = key => order => {
    for(const o of currentOrder) {
      if (o.key === key) {
        o.dish = order;
        break
      }
    }
    setCurrentOrder([...currentOrder]);
  }

  const onChangeQuantity = key => number => {
    for(const o of currentOrder) {
      if (o.key === key) {
        o.quantity = parseInt(number);
        break
      }
    }
    setCurrentOrder([...currentOrder]);
  }

  const validate = () => {
    const map = new Map([[null, []]]);
    let total = 0;

    currentOrder.forEach((o) => {
      if (!o.dish) {
        map.get(null).push(o.key);
      } else if (map.has(o.dish.id)) {
        map.get(o.dish.id).push(o.key);
      } else {
        map.set(o.dish.id, [o.key]);
      }
      total += o.quantity;
    });

    let result = {};

    for (var [key, arr] of map.entries()) {
      if (key === null) {
        result = arr.reduce((s, k) => ({...s, [k]: 'Please select a dish'}), result);
      } else if (arr.length > 1) {
        result = arr.reduce((s, k) => ({...s, [k]: 'Can\'t select the same dish'}), result);
      }
    }

    if (total < number) {
      result['number'] = 'You need more food';
    }

    setValid(result);

    return !Object.keys(result).length
  }


  return (
    <div>
      <div>
        {
          currentOrder.map((o, k) => (
            <OrderInput
              key={o.key}
              dishes={dishes}
              order={o}
              onChangeOrder={onChangeOrder(o.key)}
              onChangeQuantity={onChangeQuantity(o.key)}
              ControlBtn={k === currentOrder.length - 1 ? <AddButton /> : <DelButton id={o.key} />}
              err={valid[o.key]}
            />
          ))
        }
      </div>
      {
        valid.number && <div>{valid.number}</div>
      }
      <ButtonPanel>
        <Button
          onClick={()=> { dispatch(clickPrevStep()) }}
        >
          PREV
        </Button>
        <Button
          onClick={()=> {
            if (!validate()) {
              return
            }
            dispatch(setOrder({ orders: currentOrder }));
            dispatch(clickNextStep())
          }}
        >
          NEXT
        </Button>
      </ButtonPanel>
    </div>
  )
}

export default Step3;
