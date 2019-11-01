import React, { useState, useCallback, useRef } from 'react';
import { Button } from 'rsuite';
import { useMappedState ,useDispatch} from 'redux-react-hook';

import {
  clickPrevStep,
  clickNextStep,
} from 'store/modules/ui';

import {
  formSelector,
} from 'store/modules/form';

import {
  dishesSelector,
} from 'store/modules/dishes';

import {
  OrderInput,
} from 'components';


const Step3 = () => {
  const { restaurant, orders } = useMappedState(formSelector);

  const mapState = useCallback((state) => {
    const dishes = dishesSelector(state);
    const filterDishes = dishes
      .filter(d => d.restaurant === restaurant)
      .map(d => ({id: d.id, name: d.name}))
    return filterDishes;
  }, [restaurant]);

  const dishes = useMappedState(mapState);
  
  const [currentOrder, setCurrentOrder] = useState(orders);

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
            />
          ))
        }
      </div>
      <div>
        <Button
          onClick={()=> { dispatch(clickPrevStep()) }}
        >
          PREV
        </Button>
        <Button
          onClick={()=> { 
            // if (!validate()) {
            //   return
            // }
            // dispatch(setRestaurant({ restaurant: select }));
            dispatch(clickNextStep())
          }}
        >
          NEXT
        </Button>
      </div>
    </div>
  )
}

export default Step3;
