
AboutController.$inject = ['$stateParams','$location','$scope']
export default function AboutController($stateParams,$location,$scope){
    var vm = this;

    vm.salutations = {};
    vm.salutations.open = "hi I'm Charles MEAN Stack Developer & Code Jockey"
    vm.salutations.sub = "always trying to write code that people can read"

    vm.blurb = "I'm a MEAN stack developer working in Charleston, SC. Technologist."

}
