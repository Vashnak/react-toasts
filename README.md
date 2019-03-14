[![License](https://img.shields.io/npm/l/react-toasts.svg)](https://www.npmjs.com/package/react-toasts)
[![Version](https://img.shields.io/npm/v/react-toasts.svg)](https://opensource.org/licenses/ISC)

Lightweight react toasts manager
==========

react-toasts is a very simple and lightweight component to create toasts.

![alt text](https://github.com/Vashnak/react-toasts/blob/master/demo.gif?raw=true)

Demo url : https://vashnak.co/react-toasts/

# How to use

``` sh
$ npm install -S react-toasts
```

You will need to import the ToastsContainer component and the ToastsStore.

``` js
import {ToastsContainer, ToastsStore} from 'react-toasts';

function render(){
    return <div>
        <button onClick={() => ToastsStore.success("Hey, you just clicked!")}>Click me</button>
        <ToastsContainer store={ToastsStore}/>
    </div>
}
```

The use is very easy. ToastsContainer is, as its name suggests, the toast container while ToastsStore is the toasts manager.
The ToastsContainer must be linked to the ToastsStore, so we must set it as a parameter (see the code above). It will not work if you forget it!

Now you can simply call one of the 4 functions of the ToastStore (success, info, warning, error):

**function n(message: string | HTMLElement, timer?: number = 3000, classNames?: string): void**

Like this: 
``` js
ToastStore.success('Hey, it worked !');
```

The **timer** parameter is optional and its default value is 3000ms.
The **classNames** parameter is also optional, if you have multiple classes to add, please separate them with a space ("class1 class2 ...").

The container can have 6 positions, TOP_RIGHT, TOP_LEFT, TOP_CENTER, BOTTOM_RIGHT, BOTTOM_LEFT, BOTTOM_CENTER. By default
its position is BOTTOM_RIGHT. You can change it by using the enum ToastsContainerPosition

``` html
<ToastContainer position={ToastsContainerPosition.TOP_LEFT}/>
```

If you want the toasts to have a light background, add the `lightBackground` property to the ToastsContainer component.

``` html
<ToastContainer position={ToastContainer.POSITION.TOP_LEFT} lightBackground/>
```

# Updates
### 3.0.0
Rewrite with typescript, updated typos, optimized build, now support HTML in toast messages.
### 2.0.7
Now support line break in toasts (\n).
### 2.0.8
Added a class on each toasts.
### 2.0.9
Can now add custom classes to toasts.
