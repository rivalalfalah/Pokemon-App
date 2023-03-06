import {ActionType} from 'redux-promise-middleware';

const ACTION_STRING = {
  pokemon: 'POKEMON',
  pending: `_${ActionType.Pending}`,
  Fulfilled: `_${ActionType.Fulfilled}`,
  reject: `_${ActionType.Rejected}`,
};

export default ACTION_STRING;
