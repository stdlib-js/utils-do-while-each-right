/*
* @license Apache-2.0
*
* Copyright (c) 2019 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

// TypeScript Version: 4.1

/// <reference types="@stdlib/types"/>

import { Collection } from '@stdlib/types/array';

/**
* Checks whether an element in a collection passes a test.
*
* @returns boolean indicating whether an element in a collection passes a test
*/
type NullaryPredicate = () => boolean;

/**
* Checks whether an element in a collection passes a test.
*
* @param value - collection value
* @returns boolean indicating whether an element in a collection passes a test
*/
type UnaryPredicate<T> = ( value: T ) => boolean;

/**
* Checks whether an element in a collection passes a test.
*
* @param value - collection value
* @param index - collection index
* @returns boolean indicating whether an element in a collection passes a test
*/
type BinaryPredicate<T> = ( value: T, index: number ) => boolean;

/**
* Checks whether an element in a collection passes a test.
*
* @param value - collection value
* @param index - collection index
* @param collection - input collection
* @returns boolean indicating whether an element in a collection passes a test
*/
type TernaryPredicate<T> = ( value: T, index: number, collection: Collection ) => boolean;

/**
* Checks whether an element in a collection passes a test.
*
* @param value - collection value
* @param index - collection index
* @param collection - input collection
* @returns boolean indicating whether an element in a collection passes a test
*/
type Predicate<T> = NullaryPredicate | UnaryPredicate<T> | BinaryPredicate<T> | TernaryPredicate<T>;

/**
* Function invoked for each collection element while a test condition is true.
*/
type Nullary<U> = ( this: U ) => void;

/**
* Function invoked for each collection element while a test condition is true.
*
* @param value - collection value
*/
type Unary<T, U> = ( this: U, value: T ) => void;

/**
* Function invoked for each collection element while a test condition is true.
*
* @param value - collection value
* @param index - collection index
*/
type Binary<T, U> = ( this: U, value: T, index: number ) => void;

/**
* Function invoked for each collection element while a test condition is true.
*
* @param value - collection value
* @param index - collection index
* @param collection - input collection
*/
type Ternary<T, U> = ( this: U, value: T, index: number, collection: Collection<T> ) => void;

/**
* Function invoked for each collection element while a test condition is true.
*
* @param value - collection value
* @param index - collection index
* @param collection - input collection
*/
type Callback<T, U> = Nullary<U> | Unary<T, U> | Binary<T, U> | Ternary<T, U>;

/**
* While a test condition is true, invokes a function once for each element in a collection, iterating from right to left.
*
* ## Notes
*
* -   For dynamic array resizing, the only behavior made intentionally consistent with `doWhileEach` (iterating from left to right) is when elements are pushed onto the beginning (end) of an array. In other words, for `doWhileEach()`, `[].push()` behavior is consistent with `doWhileEachRight()` `[].unshift()` behavior.
*
* -   The condition is evaluated **after** executing the function to invoke; thus, the provided function **always** executes at least once.
*
* -   When invoked, both the predicate function and the function to apply are provided three arguments:
*
*     -   `value`: collection value
*     -   `index`: collection index
*     -   `collection`: the input collection
*
* -   If provided an empty collection, the function invokes the provided function with the collection index set to `undefined`.
*
* @param collection - input collection
* @param fcn - function to invoke
* @param predicate - function which indicates whether to continue iterating over a collection
* @param thisArg - execution context for the applied function
* @returns input collection
*
* @example
* function predicate( v, index, collection ) {
*     return ( v === v );
* }
*
* function log( v, index, collection ) {
*     console.log( '%s: %d', index, v );
* }
*
* var arr = [ 1, NaN, 2, 3, 4, 5 ];
*
* doWhileEachRight( arr, log, predicate );
*/
declare function doWhileEachRight<T = unknown, U = unknown>( collection: Collection<T>, fcn: Callback<T, U>, predicate: Predicate<T>, thisArg?: ThisParameterType<Callback<T, U>> ): Collection<T>;


// EXPORTS //

export = doWhileEachRight;
