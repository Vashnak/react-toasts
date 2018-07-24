[![License](https://img.shields.io/npm/l/react-toasts.svg)](https://www.npmjs.com/package/react-toasts)
[![Version](https://img.shields.io/npm/v/react-toasts.svg)](https://opensource.org/licenses/MIT)

Lightweight react toasts manager
==========

react-toasts is a very simple and lightweight component to create toasts.

![alt text](https://github.com/Vashnak/react-toasts/blob/master/demo.gif?raw=true)

Demo url : https://vashnak.co/react-toasts/

# How to use

``` sh
$ npm install -S react-toasts
```

You have to import 2 modules : ToastContainer and ToastStore


``` js
import {ToastContainer, ToastStore} from 'react-toasts';

function render(){
    return <div>
        <button onClick={() => ToastStore.error("There is an error :'(")}>Click me !</button>
        <ToastContainer store={ToastStore}/>
    </div>
}
```

ToastContainer is the container and ToastStore is the toasts manager.

You have to set the ToastStore as parameter of ToastContainer (example just before), it won't work if you forget it.

Now you can simply call one of the 4 functions of the ToastStore :
- **success(message: string, timer?: number = 3000, classNames?: string)** : green toast.
- **info(message: string, timer?: number = 3000, classNames?: string)** : white toast.
- **warning(message: string, timer?: number = 3000, classNames?: string)** : yellow toast.
- **error(message: string, timer?: number = 3000, classNames?: string)** : red toast.

Like this: 
``` js
ToastStore.success('Hey, it worked !');
```

The **timer** parameter is optional and its default value is 3000ms.
The **classNames** parameter is also optional, if you have multiple classes to add, please separate them with a space ("class1 class2 ...").

The container can have 6 positions, TOP_RIGHT, TOP_LEFT, TOP_CENTER, BOTTOM_RIGHT, BOTTOM_LEFT, BOTTOM_CENTER. By default
its position is BOTTOM_RIGHT. You can change it by using the property "position" on the ToastContainer element

``` html
<ToastContainer position={ToastContainer.POSITION.TOP_LEFT}/>
```

If you want toasts to have light color background, add `lightBackground` true property on the ToastrContainer
element

``` html
<ToastContainer position={ToastContainer.POSITION.TOP_LEFT} lightBackground />
```

# Updates
### 2.0.7
Now support line break in toasts (\n).
### 2.0.8
Added a class on each toasts.
### 2.0.9
Can now add custom classes to toasts.
