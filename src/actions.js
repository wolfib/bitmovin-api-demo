import Bitmovin from "../node_modules/bitmovin-javascript/dist/bitmovin.browser";

export const SET_API_KEY = "SET_API_KEY";
export const SET_BITMOVIN = "SET_BITMOVIN";
export const SET_ENCODINGS = "SET_ENCODINGS";
export const SET_ENCODING_ID = "SET_ENCODING_ID";
export const SET_STREAMS = "SET_STREAMS";
export const SET_MUXINGS = "SET_MUXINGS";

export function initApi(apiKey) {
  return dispatch => {
    const bitmovin = Bitmovin({ apiKey });
    dispatch({ type: SET_API_KEY, apiKey });
    dispatch({ type: SET_BITMOVIN, bitmovin });
  };
}

export function fetchEncodings(offset = 0, limit) {
  return (dispatch, getState) => {
    const bitmovin = getState().bitmovin;
    return bitmovin.encoding.encodings.list(limit, offset).then(encodings => {
      dispatch({ type: SET_ENCODINGS, encodings });
    });
  };
}

export function clearEncodings() {
  return { type: SET_ENCODINGS, encodings: [] };
}

export function setEncodingId(encodingId) {
  return { type: SET_ENCODING_ID, encodingId };
}

export function fetchStreams(offset, limit) {
  return (dispatch, getState) => {
    const bitmovin = getState().bitmovin;
    const encodingId = getState().encodingId;
    return bitmovin.encoding
      .encodings(encodingId)
      .streams.list(limit, offset)
      .then(streams => {
        dispatch({ type: SET_STREAMS, streams });
      });
  };
}

export function clearStreams() {
  return { type: SET_STREAMS, streams: [] };
}

export function fetchMuxings(offset, limit) {
  return (dispatch, getState) => {
    const bitmovin = getState().bitmovin;
    const encodingId = getState().encodingId;
    return bitmovin.encoding
      .encodings(encodingId)
      .muxings.list(limit, offset)
      .then(muxings => {
        dispatch({ type: SET_MUXINGS, muxings });
      });
  };
}

export function clearMuxings() {
  return { type: SET_MUXINGS, muxings: [] };
}
