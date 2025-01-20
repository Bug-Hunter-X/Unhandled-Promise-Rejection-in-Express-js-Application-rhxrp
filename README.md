# Unhandled Promise Rejection in Express.js Application

This repository demonstrates a common error in Node.js applications using Express.js: unhandled promise rejections.  The application includes an asynchronous operation that may throw an error.  The current implementation only logs the error to the console, resulting in a silent crash and poor user experience.  The solution provides an improved error handling mechanism.

## Bug

The `bug.js` file contains an Express.js application with a route that performs an asynchronous operation.  If this operation throws an error, the error is only logged to the console, but not handled properly, causing the application to potentially crash.

## Solution

The `bugSolution.js` file demonstrates the improved error handling solution.  The key changes are:

1.  The error is handled gracefully within the `.catch` block.  This prevents the application from crashing.
2.  A more informative error response (HTTP 500) is sent to the client to convey information about the error.
3.  The error is logged to the console for debugging purposes.

This solution demonstrates best practices for handling asynchronous errors in Express.js applications.