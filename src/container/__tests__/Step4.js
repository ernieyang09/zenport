import React from 'react';
import {StoreContext} from 'redux-react-hook';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';

import Step2 from '../Step2';

import {
  clickNextStep,
} from 'store/modules/ui';

import {
  setRestaurant,
} from 'store/modules/form';

const mockStore = configureStore([]);

const fakeStore = {
  dishes: [
    {
      id: 1,
      name: 'Chicken Burger',
      restaurant: 'Mc Donalds',
      availableMeals: [
        'lunch',
        'dinner'
      ]
    },
    {
      id: 2,
      name: 'Ham Burger',
      restaurant: 'Mc Donalds',
      availableMeals: [
        'lunch',
        'dinner'
      ]
    },
    {
      id: 3,
      name: 'Cheese Burger',
      restaurant: 'Mc Donalds',
      availableMeals: [
        'lunch',
        'dinner'
      ]
    },
    {
      id: 4,
      name: 'Fries',
      restaurant: 'Mc Donalds',
      availableMeals: [
        'lunch',
        'dinner'
      ]
    },
    {
      id: 5,
      name: 'Egg Muffin',
      restaurant: 'Mc Donalds',
      availableMeals: [
        'breakfast'
      ]
    },
    {
      id: 6,
      name: 'Burrito',
      restaurant: 'Taco Bell',
      availableMeals: [
        'lunch',
        'dinner'
      ]
    },
    {
      id: 7,
      name: 'Tacos',
      restaurant: 'Taco Bell',
      availableMeals: [
        'lunch',
        'dinner'
      ]
    },
    {
      id: 8,
      name: 'Quesadilla',
      restaurant: 'Taco Bell',
      availableMeals: [
        'lunch',
        'dinner'
      ]
    },
    {
      id: 9,
      name: 'Steak',
      restaurant: 'BBQ Hut',
      availableMeals: [
        'dinner'
      ]
    },
    {
      id: 10,
      name: 'Yakitori',
      restaurant: 'BBQ Hut',
      availableMeals: [
        'dinner'
      ]
    },
    {
      id: 11,
      name: 'Nankotsu',
      restaurant: 'BBQ Hut',
      availableMeals: [
        'dinner'
      ]
    },
    {
      id: 12,
      name: 'Piman',
      restaurant: 'BBQ Hut',
      availableMeals: [
        'dinner'
      ]
    },
    {
      id: 13,
      name: 'Vegan Bento',
      restaurant: 'Vege Deli',
      availableMeals: [
        'lunch'
      ]
    },
    {
      id: 14,
      name: 'Coleslaw Sandwich',
      restaurant: 'Vege Deli',
      availableMeals: [
        'breakfast'
      ]
    },
    {
      id: 15,
      name: 'Grilled Sandwich',
      restaurant: 'Vege Deli',
      availableMeals: [
        'breakfast'
      ]
    },
    {
      id: 16,
      name: 'Veg. Salad',
      restaurant: 'Vege Deli',
      availableMeals: [
        'lunch',
        'dinner'
      ]
    },
    {
      id: 17,
      name: 'Fruit Salad',
      restaurant: 'Vege Deli',
      availableMeals: [
        'lunch',
        'dinner'
      ]
    },
    {
      id: 18,
      name: 'Corn Soup',
      restaurant: 'Vege Deli',
      availableMeals: [
        'lunch',
        'dinner'
      ]
    },
    {
      id: 19,
      name: 'Tomato Soup',
      restaurant: 'Vege Deli',
      availableMeals: [
        'lunch',
        'dinner'
      ]
    },
    {
      id: 20,
      name: 'Minestrone Soup',
      restaurant: 'Vege Deli',
      availableMeals: [
        'lunch',
        'dinner'
      ]
    },
    {
      id: 21,
      name: 'Pepperoni Pizza',
      restaurant: 'Pizzeria',
      availableMeals: [
        'lunch',
        'dinner'
      ]
    },
    {
      id: 22,
      name: 'Pepperoni Pizza',
      restaurant: 'Pizzeria',
      availableMeals: [
        'lunch',
        'dinner'
      ]
    },
    {
      id: 23,
      name: 'Hawaiian Pizza',
      restaurant: 'Pizzeria',
      availableMeals: [
        'lunch',
        'dinner'
      ]
    },
    {
      id: 24,
      name: 'Seafood Pizza',
      restaurant: 'Pizzeria',
      availableMeals: [
        'lunch',
        'dinner'
      ]
    },
    {
      id: 25,
      name: 'Deep Dish Pizza',
      restaurant: 'Pizzeria',
      availableMeals: [
        'dinner'
      ]
    },
    {
      id: 26,
      name: 'Chow Mein',
      restaurant: 'Panda Express',
      availableMeals: [
        'lunch',
        'dinner'
      ]
    },
    {
      id: 27,
      name: 'Mapo Tofu',
      restaurant: 'Panda Express',
      availableMeals: [
        'lunch',
        'dinner'
      ]
    },
    {
      id: 28,
      name: 'Kung Pao',
      restaurant: 'Panda Express',
      availableMeals: [
        'lunch',
        'dinner'
      ]
    },
    {
      id: 29,
      name: 'Wontons',
      restaurant: 'Panda Express',
      availableMeals: [
        'lunch',
        'dinner'
      ]
    },
    {
      id: 30,
      name: 'Garlic Bread',
      restaurant: 'Olive Garden',
      availableMeals: [
        'breakfast',
        'lunch',
        'dinner'
      ]
    },
    {
      id: 31,
      name: 'Ravioli',
      restaurant: 'Olive Garden',
      availableMeals: [
        'lunch',
        'dinner'
      ]
    },
    {
      id: 32,
      name: 'Rigatoni Spaghetti',
      restaurant: 'Olive Garden',
      availableMeals: [
        'lunch',
        'dinner'
      ]
    },
    {
      id: 33,
      name: 'Fettucine Pasta',
      restaurant: 'Olive Garden',
      availableMeals: [
        'lunch',
        'dinner'
      ]
    }
  ],
  ui: {
    step: 1
  },
  form: {
    meal: 'dinner',
    number: 4,
    restaurant: 'Mc Donalds',
    orders: [
      {
        key: 0,
        dish: null,
        quantity: 1
      }
    ]
  }
};

describe('Step4', () => {
  let store;
  let component;
  beforeEach(() => {
    store = mockStore(fakeStore);
    store.dispatch = jest.fn();

    component = renderer.create(
      <StoreContext.Provider value={store}>
        <Step2 />
      </StoreContext.Provider>
    );
  });

  

  it('should render with given state from Redux store', () => {
    expect(component.toJSON()).toMatchSnapshot();
  });

  it('dispatch next button click', () => {
    renderer.act(()=> {
      component.root.findByProps({ 'data-test-id': "next" }).props.onClick();
      expect(store.dispatch).toHaveBeenCalledWith(setRestaurant({ restaurant: 'Mc Donalds' }));
      expect(store.dispatch).toHaveBeenCalledWith(clickNextStep());
      expect(store.dispatch).toHaveBeenCalledTimes(2);
    })
  });
});
