import React from 'react';
import { Stepper } from 'container';

const Page = (props) => {
  return (
    <div>
      <div>
        <Stepper />
      </div>
      <div>
        {props.children}
      </div>
    </div>
  )
}


export default Page;
