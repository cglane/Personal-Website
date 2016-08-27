routes.$inject = ['$stateProvider', '$urlRouterProvider'];
export default function routes($sP, $uRP) {
  $uRP.otherwise('/main/about');
  $sP.state("main",{
    url:'/main',
    controller:'MainController',
    template:require('./areas/main/main-tpl.html'),
    controllerAs: 'vm'
  })
  .state("main.about",{
    url:"/about",
    controller:"AboutController",
    template:require('./areas/about/about-tpl.html'),
    controllerAs: 'vm'
  })
  .state("main.contact",{
    url:'/contact',
    controller:'ContactController',
    template:require('./areas/contact/contact-tpl.html'),
    controllerAs: 'vm'
  })
  .state("main.portfolio",{
    url:'/portfolio',
    controller: 'PortfolioController',
    template:require('./areas/portfolio/portfolio-tpl.html'),
    controllerAs: 'vm'
  })
}
