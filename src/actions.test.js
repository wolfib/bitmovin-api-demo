import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import {
  fetchEncodings,
  fetchStreams,
  fetchMuxings,
  SET_ENCODINGS,
  SET_STREAMS,
  SET_MUXINGS
} from "./actions";
import { myEncodings, myStreams, myMuxings } from "./mocks";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

it("dispatches 'set encodings'-action after fetching encodings", () => {
  const encodingsListMock = jest
    .fn()
    .mockImplementation(() => Promise.resolve(myEncodings));
  const store = mockStore({
    bitmovin: { encoding: { encodings: { list: encodingsListMock } } }
  });
  const expectedActions = [{ type: SET_ENCODINGS, encodings: myEncodings }];

  return store.dispatch(fetchEncodings()).then(() => {
    const dispatchedActions = store.getActions();
    expect(dispatchedActions.length).toBe(1);
    expect(dispatchedActions).toEqual(expectedActions);
  });
});

it("dispatches 'set streams'-action after fetching streams", () => {
  const encodingsMock = jest.fn().mockImplementation(id => ({
    streams: {
      list: () => Promise.resolve(myStreams)
    }
  }));
  const store = mockStore({
    bitmovin: { encoding: { encodings: encodingsMock } }
  });
  const expectedActions = [{ type: SET_STREAMS, streams: myStreams }];

  return store.dispatch(fetchStreams()).then(() => {
    const dispatchedActions = store.getActions();
    expect(dispatchedActions.length).toBe(1);
    expect(dispatchedActions).toEqual(expectedActions);
  });
});

it("dispatches 'set muxings'-action after fetching muxings", () => {
  const encodingsMock = jest.fn().mockImplementation(id => ({
    muxings: {
      list: () => Promise.resolve(myMuxings)
    }
  }));
  const store = mockStore({
    bitmovin: { encoding: { encodings: encodingsMock } }
  });
  const expectedActions = [{ type: SET_MUXINGS, muxings: myMuxings }];

  return store.dispatch(fetchMuxings()).then(() => {
    const dispatchedActions = store.getActions();
    expect(dispatchedActions.length).toBe(1);
    expect(dispatchedActions).toEqual(expectedActions);
  });
});
