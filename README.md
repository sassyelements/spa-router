# SPA Router
SPA Router is a (no framework) vanilla JS alternative for Single Page
Application. It's a plugin and can be imported as a module. It supports both
pathnames and hashes.

## Demo
To try out SPA Router clone this repo and run the following commands.

First install npm packages

```bash
npm install
```

Then run

```bash
npm start

# output
> spa router@1.0.0 start
> parcel index.html

Server running at http://localhost:1234
Built in 1.60s
```

Visit `http://localhost:1234` to see the result. Your port may not be `1234`!
Before you visit localhost you must copy `templates/` directory into `dist/`
directory because Parcel doesn't do it.

## How to Use SPA Router
First you need to get the plugin file `SPARouter.js`. Copy it to your JS
directory. You can create a directory called `plugins/` in your JS directory
and put the `SPARouter.js` there.

In your `index.js` file you want to import `SPARouter` as shown in the example
below:

```javascript
import router from './js/plugins/SPARouter';
```

After the plugin is imported you then want to define the routes. As the plugin
supports both pathnames and hashes the routes objects are slightly different.
Pathnames uses `/` and hashes obviously uses `#`.

### Your `index.html` File
Your `index.html` file must either have a `main` tag or a `div` or any other element with a class called `main`. This is the main container where HTML
from templates is loaded. See the example below how it should look like.
```html
[...]

<body>
    <main class="main"></main>
</body>

[...]
```

### URL Routes Object
```javascript
const urlRoutes = {
    404: {
        template: './templates/404.html',
        title: '404 Not Found',
        description: 'This is the 404 page.'
    },
    '/': {
        template: './templates/home.html',
        title: 'Home Page',
        description: 'This is the home page.'
    },
    '/about': {
        template: './templates/about.html',
        title: 'About',
        description: 'This is the about page.'
    },
    '/contact': {
        template: './templates/contact.html',
        title: 'Contact',
        description: 'This is the contact page.'
    }
};
```

### Hash Routes Object
```javascript
const hashRoutes = {
    404: {
        template: './templates/404.html',
        title: '404 Not Found',
        description: 'This is the 404 page.'
    },
    '/': {
        template: './templates/home.html',
        title: 'Home Page',
        description: 'This is the home page.'
    },
    '#about': {
        template: './templates/about.html',
        title: 'About',
        description: 'This is the about page.'
    },
    '#contact': {
        template: './templates/contact.html',
        title: 'Contact',
        description: 'This is the contact page.'
    }
};
```

### Initialize Router

After the routes are defined it's time to initialize the router. There are also
two different scenarios. For the URL based routes you need to specify the DOM
selector. See the example below also the HTML!

```javascript
router.setRoutes(urlRoutes).initRouter({ selector: 'nav a' });
```

### HTML
```html
<nav class="navigation nav">
    <div class="nav__nav">
        <ul class="nav__list">
            <li class="nav__item">
                <a class="nav__link lead" href="/">Home</a>
            </li>
            <li class="nav__item">
                <a class="nav__link lead" href="/about">About</a>
            </li>
            <li class="nav__item">
                <a class="nav__link lead" href="/contact">Contact</a>
            </li>
        </ul>
    </div>
</nav>
```

If you wanna use the hash based routes then you don't have to specify the
`selector` you can set it to `null` as in the following example.

```javascript
router.setRoutes(urlRoutes).initRouter({ selector: null });
```

### HTML
```html
<nav class="navigation nav">
    <div class="nav__nav">
        <ul class="nav__list">
            <li class="nav__item">
                <a class="nav__link lead" href="/">Home</a>
            </li>
            <li class="nav__item">
                <a class="nav__link lead" href="#about">About</a>
            </li>
            <li class="nav__item">
                <a class="nav__link lead" href="#contact">Contact</a>
            </li>
        </ul>
    </div>
</nav>
```

## Finally

In your `index.js` the whole router settings will look like this:

```javascript
import router from './js/plugins/SPARouter';

const urlRoutes = {
    404: {
        template: './templates/404.html',
        title: '404 Not Found',
        description: 'This is the 404 page.'
    },
    '/': {
        template: './templates/home.html',
        title: 'Home Page',
        description: 'This is the home page.'
    },
    '/about': {
        template: './templates/about.html',
        title: 'About',
        description: 'This is the about page.'
    },
    '/contact': {
        template: './templates/contact.html',
        title: 'Contact',
        description: 'This is the contact page.'
    }
};

router.setRoutes(urlRoutes).initRouter({ selector: 'nav a' });
```
