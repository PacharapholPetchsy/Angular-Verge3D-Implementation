# Angular Verge3D Implementation
When searching around Verge3D community on Soft8Soft, I have yet to find an implementation of Verge3D on the Angular Framework. I've decided to create my own. Feel free to Fork & PR if you've found a more optimal solution than mine!

This implementation focuses on:
- Having Verge3D on your website
- Communicating from website to Verge3D App
- Communicating from Verge3D App to our website

## Frontend
- Angular CLI 13.2.6
- Node.js 16.14.0
- npm 8.3.1

## Having Verge3D on your website!
From Blender or Maya, you can access your Verge3D app manager. You want to copy over all the files from verge3D to your website's Assets
![Screenshot_1](https://user-images.githubusercontent.com/34189433/167026934-13ce1ff6-8cef-44e6-a2af-23315a51415b.png)

Then call it from html in your desired component as an iframe.
```
<iframe id="iframe" class="iframe active" src="../../assets/Example_App/Example_App.html"></iframe>
```
Even though Verge3D offers an upload option to their domain, you **MUST** put the assets in your website files or else you will come across Cross-Origin Resource Sharing Error (CORS).

## Integrations
In Verge3D I made two external calls and two functions for demonstration. 
- The two external calls are for loading and when the app has completed its "task"
- The two functions will be called by our website to hide and show the cube

![Screenshot_3](https://user-images.githubusercontent.com/34189433/167027395-0ad10fb5-7ef4-43fe-a5fc-3791014ef65b.png)

### Communicating from website to Verge3D App
![Screenshot_5](https://user-images.githubusercontent.com/34189433/167030568-6c79389b-96d2-4770-b60e-098c92e89abe.png)

Calling functions in Verge3D from our website is a very straightforward process. We simply need to create a function in "RunCode(app)" found in our [Example_App.js](https://github.com/PacharapholPetchsy/Angular-Verge3D-Implementation/blob/main/src/assets/Example_App/Example_App.js). Then call that function from our [Component](https://github.com/PacharapholPetchsy/Angular-Verge3D-Implementation/blob/main/src/app/implementation/implementation.component.ts). Notice how the names of the functions are connected, it should be very straightforward.

### Communicating from Verge3D App to our website
![Screenshot_6](https://user-images.githubusercontent.com/34189433/167030970-4c588ac3-6132-4f77-aaa1-699d5d73c661.png)

Calling functions on our website from Verge3D is a little bit different. We need to update code in function "prepareExternalInterface(app)" found in [Example_App.js](https://github.com/PacharapholPetchsy/Angular-Verge3D-Implementation/blob/main/src/assets/Example_App/Example_App.js). Then we create a promise on our [website](https://github.com/PacharapholPetchsy/Angular-Verge3D-Implementation/blob/main/src/app/implementation/implementation.component.ts) to check if the values have changed. This is usually reserved for checking if the Verge3D app has loaded or completed. Let me know if you have a better solution for this section!

## What is should look like
![ezgif-2-b823d8c211](https://user-images.githubusercontent.com/34189433/167034709-2d2a198e-1a8f-4747-af5f-438d06d13538.gif)

Clicking on the cube makes the iframe disappear to demonstrate that the communication between website and Verge3D is working both ways. You can have it hook up to a seperate button or automatically happen once your animation finishes "tasks".
