# Async/Await Examples

This project provides practical examples of async/await patterns in JavaScript, demonstrating common use cases and best practices.

## Functions Overview

### 1. iterateWithAsyncAwait(values)
- Takes an array of values
- Logs each value with a 1-second delay between iterations
```javascript
await iterateWithAsyncAwait([1, 2, 3, 4, 5]);
// Output: Will log numbers 1 to 5 with 1-second delay between each
```

### 2. awaitCall()
- Simulates an async API call
- Returns a Promise that resolves after 2 seconds
```javascript
const result = await awaitCall();
// Output: Returns data object with message and timestamp
```

### 3. awaitCallWithError(shouldFail)
- Demonstrates error handling in async operations
- Parameter `shouldFail` controls whether the call fails
```javascript
try {
    await awaitCallWithError(true); // Will throw an error
} catch (error) {
    console.log(error.message);
}
```

## Running the Code

1. Ensure Node.js is installed on your system
2. Run the examples:
   ```bash
   node index.js
   ```

## Expected Output
- Numbers 1-5 will be logged with delays
- A successful API call response
- An error demonstration with proper error handling

## Key Concepts Demonstrated
- Async/await syntax
- Promise handling
- Error management
- Sequential delays
- Simulated API calls
