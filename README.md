# Iframe Enhancements

### Installation
#### Karma-Cli
Make sure you have the karma command line interface installed so you can run tests from the command line

```npm install -g karma-cli```

#### Install all other dependencies

```npm install```

## Testing
#### Overview
The project uses [Mocha](https://mochajs.org/) as a test framework, [Chai](http://chaijs.com/) for assertions and [Karma](https://karma-runner.github.io/1.0/index.html) for test running. 

#### Running tests
```npm test```

## Field Validations
Field validations will check the value of user inputs and add a css class to the html based on the validity of the input.  Field validations will not prevent the user from entering specific types of data. How the errors are displayed will be dependent on the provided css file.

| Field   |      Validation      |  Notes |
|----------|:-------------:|------:|
| Account Number | Less than 13 digits | |
| | Greater than 19 digits | |
| |Fails to pass Luhn Algorithm | Failing the Luhn Algorithm means the account number could not possibly be a valid number. Passing the Luhn Algorithm indicates the card number could be valid, but does not guarantee the number actually exists. |
| CVC |    Less than 3 digits   | |
| | Greater than 4 digits | |
| | Confirm length against card type | |
| Expiration Month | right-aligned |    $1 |
| Expiration Year | right-aligned |    $1 |

## Form Behavior
The following behaviors have been added to the form and are not configurable by the user:

-	If user selects the back button, input fields are cleared with no visible ‘XXXX’ in any field
-	Only numeric input is permitted in the account number and cvc fields
-	No restriction on the number of characters a user is permitted to enter in the account number or cvc fields
-	Auto-formatting of account numbers based on the type of card. 
-	Ex: If the user types “41217” the number will display as “4121 7”

## User Driven Behaviors
The following items are available to be used, but only if the client code chooses to use them. By default these items are active, but can be suppressed with CSS.

-	Tooltips - active on hover of the “?” icon, useful for short statements, content is passed via CSS classes
-	Modals - activates on click of second “?” icon and can display longer CSS content
-	SVG Icons (Font awesome) - we host this font icon library on our servers for the client to leverage in their CSS, we use this industry standard icon library for all icons.
-	Generic CVC card art - the CVC modal and tooltip loads generic card art showing the placement of cvc on cards. The client can hide this with CSS if they choose

## Folder structure
- css (folder for styles)
- fonts
- images
- js
	- *-handlers.js 
		- Define callbacks for events (blur, paste, keypress, etc)
	- *-validation.js
		- Pure functions used for validations
    - form-us.js
    	- Handling of dom manipulations
    -  formatPan.js
    -  init.js
    	- Add event handler to clear fields and fade modals 
    - jquery-1.12.4.min.js
    - jquery-modal.min.js
    - jquery.alphanum.js
    	- Limits input on fields
    - Utils.js
    	- Utility functions for validations 
    - validation-collections.js
    	- Functions to collect and return errors
    - validation-listeners.js
    	- Add event handlers for events
- test - collection of unit tests

## Empty Input API
Determine if the iframe inputs are empty.  Client code will start the process by calling LitlePayframeClient.allInputsEmpty().  A callback handler will need to be written to handle the response from the iframe.  The response will be either ‘true’ or ‘false’.  The callback handler will be added to the config object passed to LitlePayframeClient.

Code Repository: https://github.com/unisaurus-rex/eprotect-embeddedIframe

Demo: https://unisaurus-rex.github.io/eprotect-embeddedIframe/

## Demo Links
Basic Demo: https://unisaurus-rex.github.io/eprotect-iframeEnhancements/ 

Papa John’s Demo: https://unisaurus-rex.github.io/eprotect-iframeEnhancements/pj-demo/ 

CSS Demo/Tool: https://unisaurus-rex.github.io/eprotect-iFrameAdvancedDemo/ 

Empty Inputs: https://unisaurus-rex.github.io/eprotect-embeddedIframe/

