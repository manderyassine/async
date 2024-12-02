// Task 01: Iterating with Async/Await
async function iterateWithAsyncAwait(values) {
    for (const value of values) {
        await new Promise(resolve => setTimeout(resolve, 1000));
        console.log(value);
    }
}

// Task 02: Awaiting a Call
async function awaitCall() {
    try {
        const data = await new Promise((resolve) => {
            setTimeout(() => {
                resolve({ message: "Data successfully fetched!", timestamp: new Date() });
            }, 2000);
        });
        console.log("API Response:", data);
        return data;
    } catch (error) {
        console.error("Error fetching data:", error);
        throw error;
    }
}

// Task 03: Handling Errors with Async/Await
async function awaitCallWithError(shouldFail = false) {
    try {
        const data = await new Promise((resolve, reject) => {
            setTimeout(() => {
                if (shouldFail) {
                    reject(new Error("API request failed"));
                } else {
                    resolve({ message: "Data successfully fetched!", timestamp: new Date() });
                }
            }, 2000);
        });
        console.log("API Response:", data);
        return data;
    } catch (error) {
        console.error("An error occurred while fetching data. Please try again later.");
        console.error("Technical details:", error.message);
        throw error;
    }
}

// Example usage:
iterateWithAsyncAwait([1, 2, 3, 4, 5]);
awaitCall();
awaitCallWithError(true).catch(error => console.log("Error caught:", error.message));
