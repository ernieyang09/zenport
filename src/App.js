
import React from 'react';
import { Page } from './components';
import 'rsuite/dist/styles/rsuite-default.css';
import {useMappedState} from 'redux-react-hook';
import { uiSelector } from 'store/modules/ui';
import { Step1, Step2, Step3, Step4 } from 'container';

type Props = {}

const App = () => {
  const { step } = useMappedState(uiSelector);

  const renderSwitch = (step) => {
    switch(step) {
      case 0:
        return <Step1 />
      case 1:
        return <Step2 />
      case 2:
        return <Step3 />
      case 3:
        return <Step4 />
      default:
        return null
    }
  }
  return (
    <Page>
      {renderSwitch(step)}
    </Page>
  )
}


export default App;
