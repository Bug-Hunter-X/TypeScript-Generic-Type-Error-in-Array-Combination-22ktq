# TypeScript Generic Type Error in Array Combination

This repository demonstrates a common TypeScript error related to generics and array combination. The `combineArrays` function attempts to combine two arrays of potentially different types.  The initial implementation fails to handle this scenario correctly, resulting in a type error.

## Problem

The `bug.ts` file contains a function that attempts to combine two arrays using the spread syntax.  However, if the arrays contain different types (e.g., numbers and strings), the compiler throws a type error because it cannot infer a single type that encompasses both.

## Solution

The `bugSolution.ts` file provides a corrected version of the function, using a generic type parameter that allows for the combination of arrays with different types. This solution avoids the type error by inferring a union type that includes all possible types present in the input arrays.