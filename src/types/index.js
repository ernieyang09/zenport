// @flow

export type ActionWithoutPayloadType<T> = {
  type: T,
};

export type ActionWithPayloadType<T, P> = {|
  type: T,
  payload: P,
|};
