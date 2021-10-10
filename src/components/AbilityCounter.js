import React from "react";
import {CounterContainer, Ability, Form, ActionButton} from '../styles/counterStyle'


export const AbilityCounter = (props) => {

  const {name, value, availablePoints, onIncrease, onDecrease} = props
  return (
    <CounterContainer>
      <Ability data-testid="name">{name}</Ability>
      <Form>
        <ActionButton
          onClick={() => onIncrease(name)}
          type="button"
          disabled={availablePoints === 0}
        >
          +
        </ActionButton>
        <span>{value}</span>
        <ActionButton
          onClick={() => onDecrease(name)}
          type="button"
          disabled={value === 0}
        >
          -
        </ActionButton>
      </Form>
    </CounterContainer>
  );
}
