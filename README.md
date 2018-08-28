# lazyload
A simple JS to lazy load images, videos and background-images.

## Process
First, the function is attached to event listeners for **load**, **scroll** and **orientationchange** (for mobile). Every time one of these events is triggered, the function builds an array of all DOM objects to be lazy loaded, then checkes their position relative to the browser window - if the object is higher than 100px **below** the brower window, the objects data-src and src are switched and the class *lazyload* is removed. 

Additionally, if the object is a **\<video\>**, then the script begins playback of the video.

Once the function returns an array of length 0 (i.e. all objects have been loaded), then the event listeners are removed.

## Usage
Place the lazyload.min.js in your document **\<head\>**, or include lazyload.js with any gulp/combined js files to be minified and placed in the head.

---

To use lazyload.js, only small changes need to be made to your DOM:
- **Images/Videos:**
  add the class **'lazyload'** and change the **src** to **data-src**:
  
    **OLD:**
    ```
    <img src="img/src.png">
    ```
    **NEW:**
    ```
    <img data-src="img/src.png" class="lazyload">
    ```
    
- **Background Images:**
  same, but additionally add the class **'lazyBG'**

## Support
Currently, only **IE11+Edge** are supported, due to the use of clasList(*IE10+*) and dataset(*IE11+*). As of July 2018, this is excluding **1.8%** of global browser usage.

## @todo
- [ ] Increase support to IE10 and/or IE9
- [ ] Add option for user to set their own distance trigger (width 100px as default)
