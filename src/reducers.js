import { combineReducers } from "redux";
import {
  SET_API_KEY,
  SET_BITMOVIN,
  SET_ENCODINGS,
  SET_ENCODING_ID,
  SET_STREAMS,
  SET_MUXINGS
} from "./actions";

export default combineReducers({
  apiKey,
  bitmovin,
  encodings,
  encodingId,
  streams,
  muxings
});

function apiKey(state = null, action) {
  switch (action.type) {
    case SET_API_KEY:
      return action.apiKey;
    default:
      return state;
  }
}

function bitmovin(state = null, action) {
  switch (action.type) {
    case SET_BITMOVIN:
      return action.bitmovin;
    default:
      return state;
  }
}

function encodings(state = {}, action) {
  switch (action.type) {
    case SET_ENCODINGS:
      return action.encodings;
    default:
      return state;
  }
}

function encodingId(state = null, action) {
  switch (action.type) {
    case SET_ENCODING_ID:
      return action.encodingId;
    default:
      return state;
  }
}

function streams(state = {}, action) {
  switch (action.type) {
    case SET_STREAMS:
      return action.streams;
    default:
      return state;
  }
}

function muxings(state = {}, action) {
  switch (action.type) {
    case SET_MUXINGS:
      return action.muxings;
    default:
      return state;
  }
}
