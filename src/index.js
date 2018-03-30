/* @flow */
import {
  type ImportedFooParam,
} from './type';

export type FooParam = {
  a: string;
  b: number;
};

function foo(param: FooParam) {
  const {
    a,
    b,
  }: ImportedFooParam = param;

  console.log(a, b);
}

function foo2({
  x,
  y,
}: {
  x: FooParam;
  y: FooParam;
}): FooParam {
  if (x.b > y.b) {
    return x;
  }

  return y;
}

const x: FooParam = {
  a: 'test',
  b: 123,
};

const y: FooParam = {
  a: 'testtest',
  b: 456,
};

foo(x);
foo2({x, y});