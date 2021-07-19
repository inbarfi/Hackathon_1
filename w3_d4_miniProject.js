// Coloring Game 
//  JAVASCRIPT - ANIMATION - Steps:
// 1. Click on a color, I need to retrieve the color
// 	* event listener - "click"
// 	* event object - target of the event
// 	* create a variable global assign to it the style.backgroundColor of the target
// 2. In the for loop, where you create the grid (the canvas) we need to add an
// eventlistener of "click" to each of the new div
// 	* I need to create a function assignColor
// 		* we need to pass the event object as a parameter because we need the event.target
// 		* change the background color of the div, depending on the global variable (created in point 1.)
// 3. Create a global variable which value is a boolean.
// 	* if the mousedown : global variable becomes true
// 	* if the mouseup : global variable becomes false
// 4. Add a mouseover and mousedown events to each div 
// 	* if both are true -> start painting the div
// 	* if mouseup is true -> stop painting the div
// 5. Add a "click" event listener to the "Clear" button -> change the color of all the divs to white