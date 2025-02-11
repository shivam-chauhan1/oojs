// Function definition
function createTrackedFunction() {
  if (!createTrackedFunction.totalInstances) {
    createTrackedFunction.totalInstances = 0;
  }

  createTrackedFunction.totalInstances++;
  let invocations = 0;

  function trackedFunction() {
    invocations++;
    return {
      totalInstances: createTrackedFunction.totalInstances,
      invocations: invocations,
    };
  }

  return trackedFunction;
}

// Usage Examples
// Example 1: Basic usage with single instance
console.log("Example 1: Single instance");
const tracker1 = createTrackedFunction();
console.log(tracker1()); // { totalInstances: 1, invocations: 1 }
console.log(tracker1()); // { totalInstances: 1, invocations: 2 }
console.log(tracker1()); // { totalInstances: 1, invocations: 3 }

// Example 2: Multiple instances
console.log("\nExample 2: Multiple instances");
const tracker2 = createTrackedFunction();
const tracker3 = createTrackedFunction();
console.log(tracker2()); // { totalInstances: 3, invocations: 1 }
console.log(tracker3()); // { totalInstances: 3, invocations: 1 }
console.log(tracker2()); // { totalInstances: 3, invocations: 2 }

// Example 3: Using with different contexts
console.log("\nExample 3: Different contexts");
const obj = {
  name: "TestObject",
  tracker: createTrackedFunction(),
};
console.log(obj.tracker()); // { totalInstances: 4, invocations: 1 }
console.log(obj.tracker()); // { totalInstances: 4, invocations: 2 }

// Example 4: Demonstrating instance independence
console.log("\nExample 4: Instance independence");
const trackerA = createTrackedFunction();
const trackerB = createTrackedFunction();

console.log("Tracker A calls:");
console.log(trackerA()); // { totalInstances: 6, invocations: 1 }
console.log(trackerA()); // { totalInstances: 6, invocations: 2 }

console.log("Tracker B calls:");
console.log(trackerB()); // { totalInstances: 6, invocations: 1 }
console.log(trackerB()); // { totalInstances: 6, invocations: 2 }

// Example 5: Testing in a loop
console.log("\nExample 5: Loop usage");
const loopTracker = createTrackedFunction();
for (let i = 0; i < 3; i++) {
  console.log(`Loop iteration ${i + 1}:`, loopTracker());
}
