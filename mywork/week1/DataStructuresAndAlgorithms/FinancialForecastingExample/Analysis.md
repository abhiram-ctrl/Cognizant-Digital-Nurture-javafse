# Analysis

## What is Recursion?

Recursion is a technique where a method solves a problem by calling itself on a smaller version of the same problem.

Example:

predictFutureValue(value, growthRate, years)

reduces the problem size by decreasing years on every call.

---

## Time Complexity

For n years:

T(n) = T(n-1) + O(1)

Therefore:

Time Complexity = O(n)

Space Complexity = O(n)

because each recursive call occupies stack memory.

---

## Optimization

The recursive solution can be optimized using:

### Memoization

Store previously calculated values and reuse them.

### Dynamic Programming

Convert recursion into iteration and avoid recursive stack overhead.

### Mathematical Formula

Future Value = Current Value × (1 + Growth Rate)^n

This provides a direct computation and is more efficient than recursion.

---

## Conclusion

The recursive solution is simple and easy to understand but may become inefficient for very large inputs due to repeated function calls and stack usage.

For production-level financial forecasting systems, iterative or mathematical approaches are preferred.
