# Complexity Analysis

## Big O Notation

Big O notation measures how the running time of an algorithm grows as the input size increases.

Common Complexities:

| Complexity | Meaning          |
| ---------- | ---------------- |
| O(1)       | Constant Time    |
| O(log n)   | Logarithmic Time |
| O(n)       | Linear Time      |
| O(n²)      | Quadratic Time   |

---

## Linear Search

### Best Case

O(1)

Target element found at the first position.

### Average Case

O(n)

Target element found somewhere in the middle.

### Worst Case

O(n)

Target element found at the end or not present.

---

## Binary Search

### Best Case

O(1)

Target element found at the middle.

### Average Case

O(log n)

Search space is repeatedly divided by two.

### Worst Case

O(log n)

Maximum number of divisions required.

---

## Comparison

| Algorithm     | Best Case | Average Case | Worst Case |
| ------------- | --------- | ------------ | ---------- |
| Linear Search | O(1)      | O(n)         | O(n)       |
| Binary Search | O(1)      | O(log n)     | O(log n)   |

---

## Conclusion

Binary Search is more suitable for large e-commerce platforms because it provides significantly faster search performance than Linear Search.

However, Binary Search requires the data to be sorted before searching.
