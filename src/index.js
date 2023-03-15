import router from './js/plugins/SPARouter';

import './js/tests/testsRunner.js';

const urlRoutes = {
    404: {
        template: './templates/404.html',
        title: '404 Not Found',
        description: 'This is the 404 page. It loads when a page does not exist'
    },
    '/': {
        template: './templates/home.html',
        title: 'Home Page',
        description: 'This is the home page'
    },
    '/about': {
        template: './templates/about.html',
        title: 'About',
        description: 'This is the about page'
    },
    '/contact': {
        template: './templates/contact.html',
        title: 'Contact',
        description: 'This is the contact page'
    }
}
const hashRoutes = {
    404: {
        template: './templates/404.html',
        title: '404 Not Found',
        description: 'This is the 404 page. It loads when a page does not exist'
    },
    '/': {
        template: './templates/home.html',
        title: 'Home Page',
        description: 'This is the home page'
    },
    '#about': {
        template: './templates/about.html',
        title: 'About',
        description: 'This is the about page'
    },
    '#contact': {
        template: './templates/contact.html',
        title: 'Contact',
        description: 'This is the contact page'
    }
}

router.setRoutes(hashRoutes).initRouter({ selector: null });
