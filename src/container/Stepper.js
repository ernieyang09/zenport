import React from 'react'
import { Steps } from 'rsuite';
import {useMappedState} from 'redux-react-hook';

import { uiSelector } from 'store/modules/ui';

const Stepper = () => {
  const { step } = useMappedState(uiSelector);

  return (
    <Steps current={step} small>
      <Steps.Item title="Step1" />
      <Steps.Item title="Step2" />
      <Steps.Item title="Step3" />
      <Steps.Item title="Step4" />
    </Steps>
  )
}

export default Stepper;
