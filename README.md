# simple-lazyload.js
A simple JS to lazy load images, videos and background-images. Also supports srcset <br>
**Current Version** - 1.5

## Process
First, the function is attached to event listeners for window **load**, **resize**, **scroll** and **orientationchange** (for mobile). Every time one of these events is triggered, the function builds an array of all DOM objects to be lazy loaded, then checks their position relative to the browser window - if the object is higher than 200px **below** the browser window, the objects data-src and src are switched and the class *lazyload* is removed. Additionally, if the object is a **\<video\>**, then the script begins playback of the video.

Once the function returns an array of length 0 (i.e. all objects have been loaded), then the event listeners are removed.

## Usage

### JS Placement
Download the lazyload.min.js file and place it withing your project. Place the following script tag in your document **\<head\>**, *or* at the start or end of you document **\<body\>**:
```html
<script type="text/javascript" src="path/to/lazyload.min.js" id="lazyloadjs"></script>
```
Alternativly, include lazyload.js with any gulp/combined js files to be minified and placed in the head.

#### Define offset distance
The default pixel offset distance is **200**. If you wish to change this value to load the images sooner or later, then there are two methods you can use:
 1. **File Method:** If including the original file as part of a js mix, the offset can be declared within the brackets of the ***.init*** function call found at the end of the file:
  ```js
  lazyload.init(250); // Sets offset distance to 250px
  ``` 
  
 2. **Script Method:** If using the **\<script\>** tag, simply add a ***data-offset*** attribute to the tag:
 ```html
 <script type="text/javascript" src="path/to/lazyload.min.js" id="lazyloadjs" data-offset="300"></script>
 ```
 **NB:** The tag-attribute method overrides the file method if attempting to use both.

### DOM Structure

To use lazyload.js, only small changes need to be made to your DOM:
- **Images/Videos:**
  add the class **'lazyload'** and change the **src** to **data-src**:
  
    **OLD:**
    ```html
    <img src="img/src.png">
    ```
    **NEW:**
    ```html
    <img data-src="img/src.png" class="lazyload">
    ```
    
- **Background Images:**
  same, but additionally add the class **'lazyBG'**
  
- **Srcset:**
  If wishing to use srcset with your images, this can be done by simply declaring a **data-srcset** on the **\<img\>** tag, and defining an images sizes:
  
  ```html
  <img class="lazyload someOtherClass" data-src="large-default/img.jpg" data-srcset="small/img.jpg 400w, medium/img.jpg 800w, large-default/img.jpg 1200w" sizes="(-webkit-min-device-pixel-ratio: 2) 50vw, (min-resolution: 192dpi) 50vw, (min-resolution: 2dppx) 50vw, (-webkit-min-device-pixel-ratio: 3) 33.33vw, (min-resolution: 288dpi) 33.33vw, (min-resolution: 3dppx) 33.33vw" alt="Alt Text">
  ```
#### Suggestion
To prevent the broken image icon from appearing before load, set the image src to a blank, 1x1 image hosted on your site. 

## Support
This has been tested on all modern browsers, and is backwards compatible to IE9+. If any bugs are found, please report them to me ASAP *~Matt*

## @todo
- [X] Increase support to IE10...
- [X] and/or IE9
- [X] Add option for user to set their own distance offset

## Version History
- 1.5: Added check for `data-src` to allow for use with `srcsets` only
- 1.4: Object-based restructure within annonymous function. Added ability to use `srcset`. Refactored out offset distance to make it easier to define.
- 1.3: Increased support for IE 9.
- 1.2: Increased support for IE 10.
- 1.1: Prevent hidden images/images in hidden parents from loading.
- 1.0: Initial Version - Images load after page loads when scroll hits predefined trigger.
