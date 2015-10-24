import {
  SELECT_SUMMONER,
  LOAD_SUMMONER,
} from 'source/actions';

import {Map} from 'immutable';

export default function(state = Map(), action) {
  switch (action.type) {
    case SELECT_SUMMONER:
      return state.set('selectedSummoner', action.payload);
    case LOAD_SUMMONER:
      return state.update('summoners', (summoners = Map()) => (
        summoners.merge({
          [action.payload.name]: action.payload,
        })
      ));
    default:
      return state;
  }
}
