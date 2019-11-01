import React, { useState } from 'react';
import { SelectPicker, InputNumber, Button } from 'rsuite';
import { useMappedState ,useDispatch} from 'redux-react-hook';

import {
  clickNextStep,
} from 'store/modules/ui';

import {
  formSelector,
  setMeal,
} from 'store/modules/form';

const Step1 = () => {
  const dispatch = useDispatch();
  const { meal, number } = useMappedState(formSelector);

  const [select, setSelect] = useState(meal);
  const [inputNumber, setInputNumber] = useState(number);
  const [valid, setValid] = useState({ meal: true, number: true });

  const validate = () => {
    const meal = (select !== null);
    const number = (inputNumber !== 0);
    setValid({ meal, number });
    return meal && number;
  }
  
  return (
    <div>
      <div>
        <div>Please select a meal</div>
        <div>
          <SelectPicker
            data={[
              {
                label: 'breakfast',
                value: 'breakfast',
              },
              {
                label: 'lunch',
                value: 'lunch',
              },
              {
                label: 'dinner',
                value: 'dinner',
              }
            ]}
            searchable={false}
            value={select}
            onChange={(val) => { setSelect(val); }}
          />
        </div>
        {
          !valid.meal && <div>Please select a meal</div>
        }
      </div>
      <div>
        <div>Please Enter Number of people</div>
        <div>
          <InputNumber
            value={inputNumber}
            onChange={(val) => { setInputNumber(val); }}
          />
        </div>
        {
          !valid.number && <div>Please input the number</div>
        }
        
      </div>
      <div>
        <Button
          onClick={()=> {
            if (validate()) {
              dispatch(setMeal({ meal: select, number: inputNumber}))
              dispatch(clickNextStep())
            }
          }}
        >
          NEXT
        </Button>
      </div>
    </div>
  )
}

export default Step1;
