//import Reinodelossuenios from './modelo/';
import ReinodelossueniosController from './controlador/ReinodelossueniosController.js';
import ReinodelossueniosView from './vista/ReinodelossueniosVista.js';

const ReinodelossueniosApp = new ReinodelossueniosController(
    Reinodelossuenios.getInstance(), new ReinodelossueniosView()
);
const historyActions = {
    init: () => {
        ReinodelossueniosApp.handleInit();
    },

    productsCategoryList: (event) => ReinodelossueniosApp.handleProductionsCategoryList(event.state.category),

    // bindProductsCategoryList: (event) => ReinodelossueniosApp.handleProductionsCategoryList(event.state.category),

    productsList: (event) => ReinodelossueniosApp.handleProduction(event.state.product),
    //bindInit: (event) => ReinodelossueniosApp.handleInit(event.state.category),
    productsTypeList: (event) => ReinodelossueniosApp.handleProductionsTypeList(event.state.type),
    actorlist: (event) => ReinodelossueniosApp.handleActor(event.state.actor),
    productsActorList: (event) => ReinodelossueniosApp.handleActorList(event.state.actor),
    productsDirectorList: (event) => ReinodelossueniosApp.handleDirectorList(event.state.director),

   // actorlist: (event) => ReinodelossueniosApp.handleActor(event.state.actor),
   product: (event) => ReinodelossueniosApp.handleProductionPerson(event.state.product),
    actorlist: (event) => ReinodelossueniosApp.handleActorProd(event.state.actor),
    //actorlist: (event) => ReinodelossueniosApp.handleShowProduct(event.state.actor),
    directorlist: (event) => ReinodelossueniosApp.handleDirector(event.state.director),
    //bindShowProduct: (event) => ReinodelossueniosApp.handleShowProduct(event.state.type),


}
window.addEventListener('popstate', function (event) {
    if (event.state) {
        console.log(event.state);
        historyActions[event.state.action](event);
    }
});
history.replaceState({ action: 'init' }, null);

export default ReinodelossueniosApp;