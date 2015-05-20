# Skipping Hidden Elements

## Implementation

If the element is hidden:

1. Walk up the DOM until you find an element whose parent is not hidden
2. Find the next element matching the query selector after that element
3. If that element is hidden go to the next child of the parent

## Implementation 2

	findNextNodeToSelect {
		if element.isVisible && element.isSelectable {
			return node
		}
		visibleAncestor = findNextVisibleAncestor(element, rootNode)
		if !visibleAncestor {
			return null
		}
		if visibleAncestor == element.parentNode {
			if !!element.nextElementSibling {
				return findNextSelectableNode(element.nextElementSibling)
			}
		}
		elementWhoseChildrenToSearch = findNextVisibleSibling(visibleAncestor)
		if !elementWhoseChildrenToSearch {
			elementWhoseChildrenToSearch = findNextVisibleSiblingOfAncestor(visibleParent)
		}
		if elementWhoseChildrenToSearch.isSelectable {
			return elementWhoseChildrenToSearch
		}
		nextElement = deepestVisibleChildOrFirstSelectableElement(elementWhoseChildrenToSearch)
		if !nextElement {
			nextElement = elementWhoseChildrenToSearch
		}
		return findNextNodeToSelect(nextElement)
	}

What About this Algorithm:

* **Upward Search**: Searches upward until it finds a visible node
* 

1. Test is this node visible and a valid tag? Return it if yes
2. Find the closest visible parent node
3. Iterate through it's children after this node until you find a visible child
4. Iterate through that child until you find a visible child
5. Find the deepest visible child and test it
5. Recursively call function

## Implementation 3

Based on collapse state?

Find forward:

	if (!element.isCollapsed) {
		return nextSelectableNode(element)
	}
	
	if element.isHeader {
		return nextEqualOrHigherPrecedenceHeader
	}
	
	if element.isHeirarchical {
		return nextSelectableNodeAfterElement(element.nextElementSibling)
	}

Find Backward:

	previousElement = selectableElementBeforeElement(element)
	if previousElement.isVisible {
		return previousElement
	}
	
	visibleAncestor = findVisibleAncestor
	if visibleAncenster.isSelectable {
		return visibleAncestor
	}
	
	while (previousVisibleSibling = findPreviousVisibleSibling(visibleAncestor)) {
		firstSelectableChild = firstSelectableChildOfElement(element)
		if (firstSelectableChild != element) {
			return firstSelectableChild
		}
	}
