
PortfolioController.$inject = ['$stateParams','$location','$scope']
export default function PortfolioController($stateParams,$location,$scope){
  var vm = this;
  vm.projects = [
    {
      name: 'NodeCPP plugin',
      description: 'A Node C++ plugin for merging JSON objects',
      link: 'https://github.com/cglane/CPPMerge'
    },
      {
        name: 'Language File App',
        description: 'Node/MongoDB app for storing and managing language keys',
        link: 'https://github.com/cglane/ES15Mongo'
      },{
        name: 'Current Website Code',
        description: 'ES2015 Angular App',
        link: ''
      }
  ];
}
