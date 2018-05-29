[![npm](https://img.shields.io/npm/l/react-toasts.svg)](https://www.npmjs.com/package/react-toasts)
[![npm](https://img.shields.io/npm/v/react-toasts.svg)](https://www.npmjs.com/package/react-toasts)

Lightweight react alerter
==========

# React-toasts

react-toasts is a very simple component to create toasts.

![alt text](https://github.com/Vashnak/react-toasts/blob/master/demo.gif?raw=true)

Demo url : https://vashnak.co/react-toasts/

# How to use

``` sh
$ npm install -S react-toasts
```

You have to import both variables : ToastContainer and ToastStore


``` js
import {ToastContainer, ToastStore} from 'react-toasts';

function render(){
    return <div>
        <button onClick={() => ToastStore.error("There is an error :'(")}>Click me !</button>
        <ToastContainer store={ToastStore}/>
    </div>
}
```

ToastContainer is the container and ToastStore is the toast manager.

You have to set the ToastStore as parameter like in the example, it won't work if you forget it.

Now you can simply call one of the 4 functions of the ToastStore :
- **success(message, timer)** : green toast.
- **info(message, timer)** : white toast.
- **warning(message, timer)** : yellow toast.
- **error(message, timer)** : red toast.

Like this: 
``` js
ToastStore.success('Hey, it worked !');
```

The **timer** parameter is optional, the default value is 3000ms. Your message cannot contain html atm.

The container can have 4 positions, TOP_RIGHT, TOP_LEFT, BOTTOM_RIGHT, BOTTOM_LEFT. By default
it is position BOTTOM_RIGHT. You can change it by using the property "position" on the ToastContainer element

``` html
<ToastContainer position={ToastContainer.POSITION.TOP_LEFT}/>
```
