# Babel-eslint's Scope Mishandlling with eslint@3 and eslint-scope Installed

This might be a really rare case, but if your project contains `eslint@3` and `eslint-scope` and uses `flow` with `babel-eslint`, `eslint` starts to complain about almost all of your flow typings saying there are `no-undef`, `no-unused-vasr`, `no-shadow`, `no-dupe-args`, `no-redeclare` violations.

This is probably because while `eslint@3` uses `escope` to determine scopes, [`babel-eslint` want to use `eslint-scope` if it is available](https://github.com/babel/babel-eslint/blob/master/lib/patch-eslint-scope.js#L25) and this mismatch causes the trouble.

Note that some packages, such as `webpack@4`, install `eslint-scope` as their dependencies even though you don't use it directly.

## Steps to reproduce
### With eslint@3 and eslint-scope
Run

```sh
$ git checkout master  # make sure you are in master
$ yarn install
$ yarn run eslint src
```

and you will get the following errors:

```
babel-eslint-scoping-bug/src/index.js
   3:8  error  'ImportedFooParam' is defined but never used               no-unused-vars
  15:6  error  'ImportedFooParam' is already declared in the upper scope  no-shadow
  20:1  error  Duplicate param 'FooParam'                                 no-dupe-args
  25:6  error  'FooParam' is already defined                              no-redeclare

babel-eslint-scoping-bug/src/type.js
  2:13  error  'ImportedFooParam' is not defined  no-undef

✖ 5 problems (5 errors, 0 warnings)
```

### With eslint@3 and without eslint-scope
Run

```sh
$ git checkout without-eslint-scope
$ yarn install
$ yarn run eslint src
```

and you will get no errors.

### With eslint@latest and eslint-scope
Run

```sh
$ git checkout latest-eslint
$ yarn install
$ yarn run eslint src
```

and you will get no errors.