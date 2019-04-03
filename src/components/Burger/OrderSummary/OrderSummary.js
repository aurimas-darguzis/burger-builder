import React from 'react';
import Aux from '../../../hoc/Aux';
import Button from '../../UI/Button/Button';

export default function OrderSummary(props) {
  const ingredientSummary = Object.keys(props.ingredients).map(i => {
    return (
      <li key={i}>
        <span style={{ textTransform: 'capitalize' }}>{i}</span>:
        {props.ingredients[i]}
      </li>
    );
  });
  return (
    <Aux>
      <h3>Your Order</h3>
      <p>A delicious burger with the following ingredients</p>
      <ul>{ingredientSummary}</ul>
      <p>
        <strong>
          Total Price: {props.price.toFixed(2)} {props.currency}
        </strong>
      </p>
      <p>Continue to checkout</p>
      <Button btnType='Danger' clicked={props.purchaseCanceled}>
        CANCEL
      </Button>
      <Button btnType='Success' clicked={props.purchaseContinued}>
        CONTINUE
      </Button>
    </Aux>
  );
}