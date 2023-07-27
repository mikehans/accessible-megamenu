# Accessible Mega Menu
There are three sources on which this mega menu is based:
* Kevin Powell's video *"Create a CSS only Mega Dropdown Menu"* (https://www.youtube.com/watch?v=mPLIIUcjpCA)
* An accessible mega menu on the *ACCC website* (https://accc.gov.au) 
* The *W3C ARIA Authoring Practices Guide* has an example (https://www.w3.org/WAI/ARIA/apg/patterns/menubar/examples/menubar-navigation/) of an accessible navigation menubar. 
* *Keyboard-navigable JavaScript widgets* on MDN (https://developer.mozilla.org/en-US/docs/Web/Accessibility/Keyboard-navigable_JavaScript_widgets)

The mega menu that Kevin Powell creates isn't accessible owing to the hover event being the only method of opening the menu. There is no facility for keyboard only navigation here.

The mega menu on the ACCC website incorporates a button control that can trigger the opening of the mega menu. I am drawing some inspiration for this here. Additionally, if the top level menu is clicked the page that the browser navigates to only contains a copy of the links that the mega menu contains. There is no other landing page content.

The W3C ARIA Authoring Practices Guide is not exactly a mega menu but of interest are the keyboard navigation controls in use. 

The MDN article talks in the introduction about how div and span elements don't have the same keyboard functionality as their desktop counterparts. However, by using HTML elements that have rich implicit semantics, I can gain a lot with little JavaScript. By using list and button elements, I'm gaining benefits without excess JavaScript. The article heavily uses JavaScript to manually set tabindex attributes.

## Minimally accessible
By simply controlling visual display, I do get minimal keyboard accessibility, however it is limited to the tab and enter keys. 

It's not terribly mature but it requires little work.

### Screen reader accessibility
I'm unsure whether a screen reader will read the hidden menus or not. Possibly so.

## Better keyboard accessibility
* when a menu opens, shift focus to the first item in the menu
* use arrow keys to navigate
    * see Keyboard Interaction: https://www.w3.org/WAI/ARIA/apg/patterns/menubar/
* Esc key to close a menu
* Home key navigates to first item in the menu (same level)
* End key navigates to last item in the menu (same level)