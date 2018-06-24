import reducer from "./reducers";
import {
  SET_API_KEY,
  SET_BITMOVIN,
  SET_ENCODINGS,
  SET_ENCODING_ID,
  SET_STREAMS,
  SET_MUXINGS
} from "./actions";
import Bitmovin from "../node_modules/bitmovin-javascript/dist/bitmovin.browser";
import { mockState, myEncodings, myStreams, myMuxings } from "./mocks";

it("should return the initial state", () => {
  expect(reducer(undefined, {})).toEqual({
    apiKey: null,
    bitmovin: null,
    encodingId: null,
    encodings: {},
    muxings: {},
    streams: {}
  });
});

it("should handle SET_API_KEY", () => {
  expect(
    reducer(undefined, {
      type: SET_API_KEY,
      apiKey: "anotherApiKey456"
    })
  ).toEqual({
    apiKey: "anotherApiKey456",
    bitmovin: null,
    encodingId: null,
    encodings: {},
    muxings: {},
    streams: {}
  });

  expect(
    reducer(mockState, {
      type: SET_API_KEY,
      apiKey: "whateverKey987"
    })
  ).toEqual(Object.assign(mockState, { apiKey: "whateverKey987" }));
});

it("should handle SET_BITMOVIN", () => {
  const bm = Bitmovin({ apiKey: "this_is_not_a_real_api_key" });
  expect(
    reducer(undefined, {
      type: SET_BITMOVIN,
      bitmovin: bm
    })
  ).toEqual({
    apiKey: null,
    bitmovin: bm,
    encodingId: null,
    encodings: {},
    muxings: {},
    streams: {}
  });

  expect(
    reducer(mockState, {
      type: SET_BITMOVIN,
      bitmovin: bm
    })
  ).toEqual(Object.assign(mockState, { bitmovin: bm }));
});

it("should handle SET_ENCODING_ID", () => {
  expect(
    reducer(undefined, {
      type: SET_ENCODING_ID,
      encodingId: "just_an_id"
    })
  ).toEqual({
    apiKey: null,
    bitmovin: null,
    encodingId: "just_an_id",
    encodings: {},
    muxings: {},
    streams: {}
  });

  expect(
    reducer(mockState, {
      type: SET_ENCODING_ID,
      encodingId: "super_random_id"
    })
  ).toEqual(Object.assign(mockState, { encodingId: "super_random_id" }));
});

it("should handle SET_ENCODINGS", () => {
  expect(
    reducer(undefined, {
      type: SET_ENCODINGS,
      encodings: myEncodings
    })
  ).toEqual({
    apiKey: null,
    bitmovin: null,
    encodingId: null,
    encodings: myEncodings,
    muxings: {},
    streams: {}
  });

  expect(
    reducer(mockState, {
      type: SET_ENCODINGS,
      encodings: myEncodings
    })
  ).toEqual(Object.assign(mockState, { encodings: myEncodings }));
});

it("should handle SET_STREAMS", () => {
  expect(
    reducer(undefined, {
      type: SET_STREAMS,
      streams: myStreams
    })
  ).toEqual({
    apiKey: null,
    bitmovin: null,
    encodingId: null,
    encodings: {},
    muxings: {},
    streams: myStreams
  });

  expect(
    reducer(mockState, {
      type: SET_STREAMS,
      streams: myStreams
    })
  ).toEqual(Object.assign(mockState, { streams: myStreams }));
});

it("should handle SET_MUXINGSS", () => {
  expect(
    reducer(undefined, {
      type: SET_MUXINGS,
      muxings: myMuxings
    })
  ).toEqual({
    apiKey: null,
    bitmovin: null,
    encodingId: null,
    encodings: {},
    muxings: myMuxings,
    streams: {}
  });

  expect(
    reducer(mockState, {
      type: SET_MUXINGS,
      muxings: myMuxings
    })
  ).toEqual(Object.assign(mockState, { muxings: myMuxings }));
});
