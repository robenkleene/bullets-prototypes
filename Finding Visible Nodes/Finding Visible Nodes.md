# Skipping Hidden Elements

## Implementation

If the element is hidden:

1. Walk up the DOM until you find an element whose parent is not hidden
2. Find the next element matching the query selector after that element
3. If that element is hidden go to the next