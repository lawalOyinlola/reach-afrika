/**
 * Smooth scroll to a specific element
 * @param element - The element to scroll to
 * @param offset - Optional offset from the top (default: 0)
 */
export const scrollToElement = (element: HTMLElement | null, offset: number = 0) => {
  console.log('scrollToElement called with:', element, offset);
  if (!element) {
    console.log('Element is null, cannot scroll');
    return;
  }
  
  const elementPosition = element.offsetTop - offset;
  console.log('Scrolling to position:', elementPosition);
  
  window.scrollTo({
    top: elementPosition,
    behavior: 'smooth'
  });
};

/**
 * Scroll to top of the page
 */
export const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
};
