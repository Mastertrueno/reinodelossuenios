//import { Reinodelossuenios, Category, Coordinate, Resource, User, Person, Movie, Serie, Production } from "./ReinodelossueniosModel.js";
class ReinodelossueniosController {
    //Campos privados
    #Reinodelossuenios;
    #ReinodelossueniosView;

    #loadReinodelossueniosObjects() {
        let category1 = new Category('Accion', 'genero de accion');
        let category2 = new Category('Romance', 'genero de romance');
        let category3 = new Category('Misterio', 'genero de misterio');

        let user = new User("Lu", "lume@gmail.com", "12345678");
        let user2 = new User("Mi", "lum@gmail.com", "12345678");

        let act = new Person("Paco", "Mambo", "Reyes", "5/02/1993", "");
        let act2 = new Person("Rosa", "Lanza", "Torres", "17/11/1980", "");
        let act3 = new Person("Lis", "Torres", "Poveda", "22/09/1990", "");
        let act4 = new Person("Jose", "Mambo", "Reyes", "5/02/1993", "");
        let act5 = new Person("Maria", "Parra", "Lanza", "11/03/1988", "");
        let act6 = new Person("Antonio", "Maizal", "Luces", "03/03/1992", "");
        let act7 = new Person("Rocky", "Royers", "", "5/02/1993", "");
        let act8 = new Person("Ross", "Cavil", "", "18/12/1985", "");
        let act9 = new Person("Henry", "Geller", "", "28/04/1990", "");

        let dir = new Person("Mac", "Reyes", "Lanza", "2/08/1980", "");
        let dir2 = new Person("Rocky", "Torres", "Poveda", "10/05/1992", "");
        let dir3 = new Person("Jaime", "Pina", "Lotes", "2/08/1983", "");
        let dir4 = new Person("Guillermo", "Pantalla", "Paños", "18/07/1992", "");
        let dir5 = new Person("Emilio", "Plantas", "Caños", "2/08/1980", "");
        let dir6 = new Person("Stan", "Rossbel", "", "22/04/1972", "");
        let dir7 = new Person("Jonny", "Passer", "", "1/09/1985", "");
        let dir8 = new Person("Ryan", "Turner", "", "11/08/1995", "");

        let prod = new Movie("Las llamas", "Español", "20/03/2010", "fuego", "a", new Resource(59, "lod"), new Coordinate(48, 70));
        let prod2 = new Movie("Spartacus", "Español", "20/03/2010", "esto es esparta", "a", new Resource(123, "lod"), new Coordinate(48, 70));
        let prod3 = new Serie("Mellizos", "Español", "20/03/2010", "o gemelos?", "a", new Resource(30, "lod"), new Coordinate(48, 70), 8);
        let prod4 = new Movie("Atrapa la bandera", "Español", "22/04/2013", "Una carrera a la luna a por la bandera", "a", new Resource(82, "lod"), new Coordinate(48, 70));


        let prod5 = new Serie("Entre fantasmas", "EEUU", "10/02/2000", "Una mujer que puede hablar con los fantasmas", "a", new Resource(30, "lod"), new Coordinate(34, 33), 11);
        let prod6 = new Movie("Super Lopez", "Español", "30/07/2018", "Un superman español", "a", new Resource(123, "lod"), new Coordinate(48, 70));
        let prod7 = new Movie("Tadeo Jones", "Español", "09/11/2012", "Las Aventuras de Tadeo para ayudar a un amigo", "a", new Resource(123, "lod"), new Coordinate(48, 70));
        let prod8 = new Serie("Friends", "EEUU", "20/03/1996", "La vida de un grupo de amigos en Nueva York", "a", new Resource(40, "lod"), new Coordinate(34, 33), 10);

        let prod9 = new Serie("Castle", "EEUU", "14/07/2008", "Las aventuras de un escritor en el cuerpo de policia", "a", new Resource(40, "lod"), new Coordinate(34, 33), new Coordinate(34, 33), 8);
        let prod10 = new Movie("The Iron Giant", "EEUU", "22/11/2005", "Un gigante de hierro cae en la tierra y un niño lo oculta", "a", new Resource(90, "lod"), new Coordinate(34, 33));
        let prod11 = new Movie("Rocky", "EEUU", "20/03/1992", "El esfuerzo de Rocky por superarse", "a", new Resource(125, "lod"), new Coordinate(34, 33));
        let prod12 = new Serie("Candice Renoir", "Francia", "17/09/2018", "Los casos de una inspectora de policia", "a", new Resource(123, "lod"), new Coordinate(20, 70), 7);


        let Reinodelossuenios = this.#Reinodelossuenios;
        Reinodelossuenios.addUser(user);
        Reinodelossuenios.addUser(user2);

        Reinodelossuenios.addActor(act);
        Reinodelossuenios.addActor(act2);
        Reinodelossuenios.addActor(act3);
        Reinodelossuenios.addActor(act4);
        Reinodelossuenios.addActor(act5);
        Reinodelossuenios.addActor(act6);
        Reinodelossuenios.addActor(act7);
        Reinodelossuenios.addActor(act8);
        Reinodelossuenios.addActor(act9);

        Reinodelossuenios.addDirector(dir);
        Reinodelossuenios.addDirector(dir2);
        Reinodelossuenios.addDirector(dir3);
        Reinodelossuenios.addDirector(dir4);
        Reinodelossuenios.addDirector(dir5);
        Reinodelossuenios.addDirector(dir6);
        Reinodelossuenios.addDirector(dir7);
        Reinodelossuenios.addDirector(dir8);

        Reinodelossuenios.addCatecogy(category1);
        Reinodelossuenios.addCatecogy(category2);
        Reinodelossuenios.addCatecogy(category3);

        Reinodelossuenios.addProduction(prod);
        Reinodelossuenios.addProduction(prod2);
        Reinodelossuenios.addProduction(prod3);
        Reinodelossuenios.addProduction(prod4);
        Reinodelossuenios.addProduction(prod5);
        Reinodelossuenios.addProduction(prod6);
        Reinodelossuenios.addProduction(prod7);
        Reinodelossuenios.addProduction(prod8);
        Reinodelossuenios.addProduction(prod9);
        Reinodelossuenios.addProduction(prod10);
        Reinodelossuenios.addProduction(prod11);
        Reinodelossuenios.addProduction(prod12);

        Reinodelossuenios.assignCategory(category1, prod);
        Reinodelossuenios.assignCategory(category1, prod6);
        Reinodelossuenios.assignCategory(category1, prod2);
        Reinodelossuenios.assignCategory(category1, prod7);

        Reinodelossuenios.assignCategory(category2, prod3);
        Reinodelossuenios.assignCategory(category2, prod5);
        Reinodelossuenios.assignCategory(category2, prod12);
        Reinodelossuenios.assignCategory(category2, prod8);

        Reinodelossuenios.assignCategory(category3, prod11);
        Reinodelossuenios.assignCategory(category3, prod4);
        Reinodelossuenios.assignCategory(category3, prod9);
        Reinodelossuenios.assignCategory(category3, prod10);

        Reinodelossuenios.assignDirector(dir, prod);
        Reinodelossuenios.assignDirector(dir2, prod2);
        Reinodelossuenios.assignDirector(dir3, prod3);
        Reinodelossuenios.assignDirector(dir4, prod4);
        Reinodelossuenios.assignDirector(dir5, prod5);
        Reinodelossuenios.assignDirector(dir6, prod6);
        Reinodelossuenios.assignDirector(dir7, prod7);
        Reinodelossuenios.assignDirector(dir8, prod8);
        Reinodelossuenios.assignDirector(dir, prod9);
        Reinodelossuenios.assignDirector(dir2, prod10);
        Reinodelossuenios.assignDirector(dir3, prod11);
        Reinodelossuenios.assignDirector(dir4, prod12);

        Reinodelossuenios.assignActor(act, prod);
        Reinodelossuenios.assignActor(act2, prod);

        Reinodelossuenios.assignActor(act3, prod2);
        Reinodelossuenios.assignActor(act4, prod2);

        Reinodelossuenios.assignActor(act5, prod3);
        Reinodelossuenios.assignActor(act6, prod3);

        Reinodelossuenios.assignActor(act7, prod4);
        Reinodelossuenios.assignActor(act8, prod4);

        Reinodelossuenios.assignActor(act9, prod5);
        Reinodelossuenios.assignActor(act, prod5);

        Reinodelossuenios.assignActor(act, prod6);
        Reinodelossuenios.assignActor(act3, prod6);

        Reinodelossuenios.assignActor(act2, prod7);
        Reinodelossuenios.assignActor(act6, prod7);

        Reinodelossuenios.assignActor(act4, prod8);
        Reinodelossuenios.assignActor(act8, prod8);

        Reinodelossuenios.assignActor(act5, prod9);
        Reinodelossuenios.assignActor(act9, prod9);

        Reinodelossuenios.assignActor(act7, prod10);
        Reinodelossuenios.assignActor(act, prod10);

        Reinodelossuenios.assignActor(act4, prod11);
        Reinodelossuenios.assignActor(act2, prod11);

        Reinodelossuenios.assignActor(act5, prod12);
        Reinodelossuenios.assignActor(act8, prod12);

        //console.log(Reinodelossuenios.toString());
    }

    constructor(model, view) {
        this.#Reinodelossuenios = model;
        this.#ReinodelossueniosView = view;

        this.onLoad();
        this.onInit();
        // this.#ReinodelossueniosView.bindInit(this.handleInit.bind(this));
        this.#ReinodelossueniosView.bindInit(this.handleInit)
        this.#ReinodelossueniosView.bindProductsTypeList(this.handleProductionsTypeList);
        this.#ReinodelossueniosView.bindCloseWindow();
    }
    onLoad = () => {
        this.#loadReinodelossueniosObjects();
        /*  for (let category of this.#Reinodelossuenios.categories) {
              console.log(category[0].Name);
          } */

        this.#ReinodelossueniosView.bindProductsCategoryList(
            this.handleProductionsCategoryList
        );
        this.#ReinodelossueniosView.bindProductsList(
            this.handleAletProductionList
        );
        this.onAddCategory();
        history.replaceState({ action: 'init' }, null);
    }
    onInit = () => {
        // this.#ReinodelossueniosView.ListCategories();
        console.log(this.#Reinodelossuenios.categories);
        this.#ReinodelossueniosView.showCategories(this.#Reinodelossuenios.categories);
        this.#ReinodelossueniosView.showAletProductions(this.#Reinodelossuenios.productions);
        this.#ReinodelossueniosView.bindProductsCategoryList(
            this.handleProductionsCategoryList
        );
        this.#ReinodelossueniosView.bindProducts(
            this.handleProduction
        );
        history.replaceState({ action: 'init' }, null);
    }

    handleInit = () => {
        this.onInit();
    }

    onAddCategory = () => {
        for (let category of (this.#Reinodelossuenios.categories)) {
            console.log(category[0].Description);
        }
        this.#ReinodelossueniosView.showCategoriesInMenu(this.#Reinodelossuenios.categories);
        this.#ReinodelossueniosView.showActorsInMenu();
        this.#ReinodelossueniosView.showDirectorsInMenu();
        this.#ReinodelossueniosView.closeWindowbutton();
        this.#ReinodelossueniosView.bindProductsCategoryListInMenu(
            this.handleProductionsCategoryList
        );
        this.#ReinodelossueniosView.bindProducts(
            this.handleProduction
        );
        this.#ReinodelossueniosView.bindActors(
            this.handleActor
        );
        this.#ReinodelossueniosView.bindActorListInMenu(
            this.handleActorList
        );
        this.#ReinodelossueniosView.bindDirectorListInMenu(
            this.handleDirectorList
        );

    }

    handleProductsTypeList = (type) => {
        if (Reinodelossuenios[type]) {
            this.#ReinodelossueniosView.listProducts(this.#Reinodelossuenios.getTypeProducts(Reinodelossuenios[type]), type);
            this.#ReinodelossueniosView.bindShowProduct(this.handleShowProductInNewWindow);
        } else {
            throw new Error(`${type} isn't a type of Product.`)
        }
    }
    handleProductionsCategoryList = (title) => {
        let category2;
        console.log(title);
        for (let category of this.#Reinodelossuenios.categories) {
            console.log(category[0]);
            if (category[0].Name == title) {
                category2 = category[0];
            }
        }
        console.log(category2);


        this.#ReinodelossueniosView.listProductions(this.#Reinodelossuenios.getProductionsCategory(category2), title, this.#Reinodelossuenios);
        this.#ReinodelossueniosView.bindProducts(
            this.handleProduction
        );
        this.#ReinodelossueniosView.bindShowProductInNewWindow(
            //this.handleWindow
            this.handleShowProductInNewWindow
        );
    }
    handleProduction = (title) => {
        let produccion;
        console.log(title);
        console.log($(title).parent().last().get(0));
        /* console.log($(title).parent().children().children().children().children().children().text());
        let ref = $(title).parent().last().children().text().trim(); */
        for (let prod of this.#Reinodelossuenios.productions) {
            console.log(prod.Title);
            /* console.log(ref); */
            if (prod.Title == title) {
                produccion = prod;
            }
        }
        console.log(produccion);
        console.log("entra en el handleproduction")
        this.#ReinodelossueniosView.listProduction(produccion, this.#Reinodelossuenios);
        this.#ReinodelossueniosView.bindActorsProd(
            this.handleActorProd
        );
        this.#ReinodelossueniosView.bindShowProductInNewWindow(
            //this.handleWindow
            this.handleShowProductInNewWindow
        );
    }

    handleActor = (title) => {
        let actor2;
        let act;
        console.log(title);
        console.log($(title).text());
        //console.log($(title).parent().children().children().children().children().children().text());
        //let ref = $(title).text().trim();
        /* if (title == "Actores" || title == "Directores" || title == "Accion" || title == "Romance" || title == "Misterio") {
            console.log("actori");
            this.#ReinodelossueniosView.bindProductsCategoryList(
                this.handleProductionsCategoryList
            );
             this.#ReinodelossueniosView.bindProducts(
                this.handleProduction
            ); 
            this.#ReinodelossueniosView.bindProductsList(
                this.handleAletProductionList
            );
            this.#ReinodelossueniosView.bindActorListInMenu(
                this.handleActorList
            );
            this.#ReinodelossueniosView.bindDirectorListInMenu(
                this.handleDirectorList
            );
        } else { */
        if (title != "Abrir en ventana") {
            for (let actor of this.#Reinodelossuenios.actors) {
                act = actor[0].Name.trim() + " " + actor[0].Lastname1.trim() + " " + actor[0].Lastname2.trim();
                act = act.trim();
                console.log(act);
                console.log(title);
                if (act == title) {
                    actor2 = actor[0];
                }
            }
            console.log(actor2);
            // console.log("entra en el handle actor")
            this.#ReinodelossueniosView.listActor(actor2, this.#Reinodelossuenios);
            this.#ReinodelossueniosView.bindProductsPerson(
                this.handleProductionPerson
            );
            this.#ReinodelossueniosView.bindProductsCategoryList(
                this.handleProductionsCategoryList
            );

            this.#ReinodelossueniosView.bindProductsList(
                this.handleAletProductionList
            );
            this.#ReinodelossueniosView.bindActorListInMenu(
                this.handleActorList
            );
            this.#ReinodelossueniosView.bindDirectorListInMenu(
                this.handleDirectorList
            );
        } else {

            this.#ReinodelossueniosView.bindShowProductInNewWindow(
                //this.handleWindow
                this.handleShowProductInNewWindow
            );
        }
        //}
    }
    handleDirector = (title) => {
        let dir2;
        let dir;
        console.log(title);
        console.log($(title).text());
        //console.log($(title).parent().children().children().children().children().children().text());
        //let ref = $(title).text().trim();
        /*  if (title == "Actores" || title == "Directores" || title == "Accion" || title == "Romance" || title == "Misterio") {
             console.log("actori");
             this.#ReinodelossueniosView.bindProductsCategoryList(
                 this.handleProductionsCategoryList
             );
             this.#ReinodelossueniosView.bindProducts(
                 this.handleProduction
             );
             this.#ReinodelossueniosView.bindProductsList(
                 this.handleAletProductionList
             );
             this.#ReinodelossueniosView.bindActorListInMenu(
                 this.handleActorList
             );
             this.#ReinodelossueniosView.bindDirectorListInMenu(
                 this.handleDirectorList
             );
         } else { */
        if (title != "Abrir en ventana") {
            for (let direc of this.#Reinodelossuenios.directors) {
                dir = direc[0].Name.trim() + " " + direc[0].Lastname1.trim() + " " + direc[0].Lastname2.trim();
                dir = dir.trim();
                console.log(dir);
                console.log(title);
                if (dir == title) {
                    dir2 = direc[0];
                }
            }
            console.log(dir2);
            // console.log("entra en el handle actor")
            this.#ReinodelossueniosView.listDirector(dir2, this.#Reinodelossuenios);
            this.#ReinodelossueniosView.bindProductsPerson(
                this.handleProductionPerson
            );

            /*  this.#ReinodelossueniosView.bindProductsCategoryList(
                 this.handleProductionsCategoryList
             );
             this.#ReinodelossueniosView.bindProducts(
                 this.handleProduction
             );
             this.#ReinodelossueniosView.bindProductsList(
                 this.handleAletProductionList
             );
             this.#ReinodelossueniosView.bindActorListInMenu(
                 this.handleActorList
             );
             this.#ReinodelossueniosView.bindDirectorListInMenu(
                 this.handleDirectorList
             ); */
        } else {
            this.#ReinodelossueniosView.bindProductsCategoryList(
                this.handleProductionsCategoryList
            );
            this.#ReinodelossueniosView.bindProducts(
                this.handleProduction
            );
            this.#ReinodelossueniosView.bindShowProductInNewWindow(
                //this.handleWindow
                this.handleShowProductInNewWindow
            );
        }
        // }

    }
    handleActorProd = (title) => {
        let actor2;
        let act;
        console.log(title);
        //console.log($(title).text());
        //console.log($(title).parent().children().children().children().children().children().text());
        //let ref = $(title).text().trim();
        /* if (title == "Actores" || title == "Directores" || title == "Accion" || title == "Romance" || title == "Misterio") {
            console.log("actori");
            this.#ReinodelossueniosView.bindProductsCategoryList(
                this.handleProductionsCategoryList
            );
             this.#ReinodelossueniosView.bindProducts(
                this.handleProduction
            ); 
            this.#ReinodelossueniosView.bindProductsList(
                this.handleAletProductionList
            );
            this.#ReinodelossueniosView.bindActorListInMenu(
                this.handleActorList
            );
            this.#ReinodelossueniosView.bindDirectorListInMenu(
                this.handleDirectorList
            );
        } else { */
        for (let actor of this.#Reinodelossuenios.actors) {
            act = actor[0].Name.trim() + " " + actor[0].Lastname1.trim() + " " + actor[0].Lastname2.trim();
            act = act.trim();
            console.log(act);
            console.log(title);
            if (act == title.trim()) {
                console.log("entro en el igual")
                actor2 = actor[0];
            }
        }
        console.log(actor2);
        // console.log("entra en el handle actor")
        this.#ReinodelossueniosView.listActor(actor2, this.#Reinodelossuenios);
        this.#ReinodelossueniosView.bindProductsPerson(
            this.handleProductionPerson
        );
        /*  this.#ReinodelossueniosView.bindProductsCategoryList(
             this.handleProductionsCategoryList
         );
         this.#ReinodelossueniosView.bindProductsList(
             this.handleAletProductionList
         );
         this.#ReinodelossueniosView.bindActorListInMenu(
             this.handleActorList
         );
         this.#ReinodelossueniosView.bindDirectorListInMenu(
             this.handleDirectorList
         ); */

        //}

    }
    handleWindow = (title) => {
        /* this.#ReinodelossueniosView.bindProductsCategoryList(
            this.handleProductionsCategoryList
        );
        this.#ReinodelossueniosView.bindProducts(
            this.handleProduction
        );
        this.#ReinodelossueniosView.bindProductsList(
            this.handleAletProductionList
        );
        this.#ReinodelossueniosView.bindActorListInMenu(
            this.handleActorList
        );
        this.#ReinodelossueniosView.bindDirectorListInMenu(
            this.handleDirectorList
        ); */
        (function () {
            let mywindow = null;
            let menu = $('.navbar-nav');
            let divExamples = document.getElementsByClassName('container')[0];
            console.log(divExamples);
            console.log(title)
            //let botones = $(divExamples.getElementsByClassName("collapse")[0].getElementsByTagName("div")[0].getElementsByClassName('navbar-nav'));
            //console.log(botones);
            console.log(menu);

            title.addEventListener('click', function () {
                window.mywindow = null;

                if (!mywindow || mywindow.closed) {
                    mywindow = window.open("auxPage.html", "Mywindow", "width=800, height=600, top=250, left=250, titlebar=yes, toolbar=no, menubar=no, location=no");
                } else {
                    mywindow.focus();
                }
            });
            /* buttons[1].addEventListener('click', function () {
                if (mywindow && !(mywindow.closed)) {
                        mywindow.close();
                        console.log('Acabas de cerrar la ventana.');
                    } else {
                        console.log('La ventana está cerrada.');
                    }
                
            }); */
        })();

    }
    handleProductionPerson = (title) => {
        let actor2;
        let act;
        console.log(title);
        console.log($(title).text().trim());
        //console.log($(title).parent().children().children().children().children().children().text());
        //let ref = $(title).text().trim();
        /*  if (title == "Actores" || title == "Directores" || title == "Accion" || title == "Romance" || title == "Misterio") {
             console.log("actori");
             this.#ReinodelossueniosView.bindActorListInMenu(
                 this.handleActorList
             );
             this.#ReinodelossueniosView.bindDirectorListInMenu(
                 this.handleDirectorList
             );
             this.#ReinodelossueniosView.bindProductsCategoryList(
                 this.handleProductionsCategoryList
             );
             this.#ReinodelossueniosView.bindProducts(
                 this.handleProduction
             );
             this.#ReinodelossueniosView.bindProductsList(
                 this.handleAletProductionList
             );
         }  else {*/
        for (let prod of this.#Reinodelossuenios.productions) {

            console.log(prod.Title);
            console.log(title);
            if (prod.Title == title) {
                actor2 = prod;
            }
        }
        console.log(actor2);
        // console.log("entra en el handle actor")
        this.#ReinodelossueniosView.listProduction(actor2, this.#Reinodelossuenios);
        this.#ReinodelossueniosView.bindActorsProd(
            this.handleActorProd
        );
        /* this.#ReinodelossueniosView.bindActorListInMenu(
            this.handleActorList
        );
        this.#ReinodelossueniosView.bindDirectorListInMenu(
            this.handleDirectorList
        );
        this.#ReinodelossueniosView.bindProductsCategoryList(
            this.handleProductionsCategoryList
        );
        this.#ReinodelossueniosView.bindProducts(
            this.handleProduction
        );
        this.#ReinodelossueniosView.bindProductsList(
            this.handleAletProductionList
        ); */


    }
    handleActorList = () => {
        /*  this.#ReinodelossueniosView.bindProductsCategoryList(
             this.handleProductionsCategoryList
         );
         this.#ReinodelossueniosView.bindProducts(
             this.handleProduction
         );
         this.#ReinodelossueniosView.bindProductsList(
             this.handleAletProductionList
         );
         this.#ReinodelossueniosView.bindActorListInMenu(
             this.handleActorList
         );
         this.#ReinodelossueniosView.bindDirectorListInMenu(
             this.handleDirectorList
         ); */
        this.#ReinodelossueniosView.listActors(this.#Reinodelossuenios.actors, this.#Reinodelossuenios);
        this.#ReinodelossueniosView.bindActors(
            this.handleActor
        );
    }
    handleAletProductionList = (title) => {
        console.log(title.text);

        console.log(this.#Reinodelossuenios.productions);
        this.#ReinodelossueniosView.showAletProductions(this.#Reinodelossuenios.productions);
        this.#ReinodelossueniosView.bindActorListInMenu(
            this.handleActorList
        );
        this.#ReinodelossueniosView.bindDirectorListInMenu(
            this.handleDirectorList
        );
        this.#ReinodelossueniosView.bindProductsCategoryList(
            this.handleProductionsCategoryList
        );
        this.#ReinodelossueniosView.bindProducts(
            this.handleProduction
        );
        this.#ReinodelossueniosView.bindProductsList(
            this.handleAletProductionList
        );
    }
    handleDirectorList = () => {
        /*  this.#ReinodelossueniosView.bindProductsCategoryList(
             this.handleProductionsCategoryList
         );
         this.#ReinodelossueniosView.bindProducts(
             this.handleProduction
         );
         this.#ReinodelossueniosView.bindProductsList(
             this.handleAletProductionList
         );
         this.#ReinodelossueniosView.bindActorListInMenu(
             this.handleActorList
         ); */

        /*         let category2;
                let nom;
                console.log(title.text);
                for (let dire of this.#Reinodelossuenios.directors) {
                    nom = dire[0].Name + " " + dire[0].Lastname1;
                    console.log(nom);
                    console.log(dire[0]);
                    //console.log(title.innerHTML.normalize("NFD").replace(/[\u0300-\u036f]/g, ''));
                    if (nom == title.innerHTML.normalize("NFD").replace(/[\u0300-\u036f]/g, '')) {
                        category2 = dire[0];
                    }
                }
                console.log(category2); */
        this.#ReinodelossueniosView.showDirectors(this.#Reinodelossuenios.directors, this.#Reinodelossuenios);
        this.#ReinodelossueniosView.bindDirectors(
            this.handleDirector
        );
    }
    handleProductionsTypeList = (type) => {
        console.log("Handle");
        let category2;
        console.log(type);
        for (let category of this.#Reinodelossuenios.categories) {
            console.log(category[0]);
            if (category[0].Name == type) {
                category2 = category[0];
            }
        }
        console.log(category2);
        console.log(Reinodelossuenios[type]);
        this.#ReinodelossueniosView.listProductions(this.#Reinodelossuenios.getProductionsCategory(category2), type, this.#Reinodelossuenios);
        this.#ReinodelossueniosView.bindShowProductInNewWindow(this.handleShowProductInNewWindow);

    }


    //elementos window
    handleShowProduct = (serial) => {
        console.log(serial);
        try {
            let product = this.#Reinodelossuenios.getProduct(Number.parseInt(serial));
            this.#ReinodelossueniosView.showProduct(product);
            this.#ReinodelossueniosView.bindShowProductInNewWindow(
                this.handleShowProductInNewWindow
            );
        } catch (error) {
            this.#ReinodelossueniosView.showProductInNewWindow(null, 'No existe este producto en la página.');
        }

    }

    handleShowProductInNewWindow = (serial) => {
        try {
            console.log(serial);
            let produccion;
            let tipo;
            for (let prod of this.#Reinodelossuenios.productions) {
                console.log(prod.Title);
                /* console.log(ref); */
                if (prod.Title == serial) {
                    produccion = prod;
                    tipo = "produccion";
                }
            }
            for (let prod of this.#Reinodelossuenios.actors) {
                console.log(prod.Name);
                /* console.log(ref); */
                if (prod.Name == serial) {
                    produccion = prod;
                    tipo = "persona";
                }
            }
            for (let prod of this.#Reinodelossuenios.directors) {
                console.log(prod.Name);
                /* console.log(ref); */
                if (prod.Name == serial) {
                    produccion = prod;
                    tipo = "persona";
                }
            }
            console.log(produccion)


            //let product = this.#Reinodelossuenios.getProduct(Number.parseInt(serial));
            this.#ReinodelossueniosView.showProductInNewWindow(produccion, null, tipo, this.#Reinodelossuenios);
        } catch (error) {
            this.#ReinodelossueniosView.showProductInNewWindow(null, 'No existe este producto en la página.');
        }
    }
}
export default ReinodelossueniosController;