import fetch from 'isomorphic-fetch';

export const SELECT_SUMMONER = 'SELECT_SUMMONER';
export const LOAD_SUMMONER = 'LOAD_SUMMONER';

const SERVER_URL = 'http://localhost:9000/na';

export function selectSummoner(name) {
  return {
    type: SELECT_SUMMONER,
    payload: name
  };
}

export function loadSummoner(summoner) {
  return {
    type: LOAD_SUMMONER,
    payload: summoner,
  };
}

export function fetchSummoner(name) {
  return async function(dispatch, getState){
    const response = await fetch(`${SERVER_URL}/summoner?names=${name}`);
    const json = await response.json();
    const id = Object.keys(json)[0];
    const summoner = json[id];
    dispatch(loadSummoner(summoner));
    dispatch(selectSummoner(summoner.name));
  };
}