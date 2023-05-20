import VideoSystem from './VideoSystemModel.js';
import VideoSystemController from './VideoSystemController.js';
import VideoSystemView from './VideoSystemView.js';

const VideoSystemApp = new VideoSystemController(
    VideoSystem.getInstance(), new VideoSystemView()
);
const historyActions = {
    init: () => {
        VideoSystemApp.handleInit();
    },

    productsCategoryList: (event) => VideoSystemApp.handleProductionsCategoryList(event.state.category),

    // bindProductsCategoryList: (event) => VideoSystemApp.handleProductionsCategoryList(event.state.category),

    productsList: (event) => VideoSystemApp.handleProduction(event.state.product),
    //bindInit: (event) => VideoSystemApp.handleInit(event.state.category),
    productsTypeList: (event) => VideoSystemApp.handleProductionsTypeList(event.state.type),
    actorlist: (event) => VideoSystemApp.handleActor(event.state.actor),
    productsActorList: (event) => VideoSystemApp.handleActorList(event.state.actor),
    productsDirectorList: (event) => VideoSystemApp.handleDirectorList(event.state.director),

   // actorlist: (event) => VideoSystemApp.handleActor(event.state.actor),
   product: (event) => VideoSystemApp.handleProductionPerson(event.state.product),
    actorlist: (event) => VideoSystemApp.handleActorProd(event.state.actor),
    //actorlist: (event) => VideoSystemApp.handleShowProduct(event.state.actor),
    directorlist: (event) => VideoSystemApp.handleDirector(event.state.director),
    //bindShowProduct: (event) => VideoSystemApp.handleShowProduct(event.state.type),


}
window.addEventListener('popstate', function (event) {
    if (event.state) {
        console.log(event.state);
        historyActions[event.state.action](event);
    }
});
history.replaceState({ action: 'init' }, null);

export default VideoSystemApp;
