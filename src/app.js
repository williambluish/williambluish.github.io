// const NotFound = { template: '<p>Page not found</p>' }
// const Home = { template: '<p>home page</p>' }
// const About = { template: '<p>about page</p>' }

// const routes = {
//   '/': Home,
//   '/about': About
// }

// new Vue({
//   el: '#app',
//   data: {
//     currentRoute: window.location.pathname
//   },
//   computed: {
//     ViewComponent () {
//       return routes[this.currentRoute] || NotFound
//     }
//   },
//   render (h) { return h(this.ViewComponent) }
// })

new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue.js!',
        github: '<li><a href="https://github.com/germanfica"><i class="btn-github fa fa-github"></i></a></li>',
        showPanel: false,
        showHomePage: true,
        showPortfolioPage: false,
    }
})