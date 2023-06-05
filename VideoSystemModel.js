"use strict";
//importo las excepciones
import {
    BaseException,
    InvalidAccessConstructorException,
    EmptyValueException,
    ParameterValidationException,
    InvalidValueException,
    AbstractClassException
} from './BaseException.js';
//objeto persona
class Person {
    Name;
    Lastname1;
    Lastname2;
    Born;
    Picture;

    constructor(name, lastname1, lastname2, born, picture) {
        //compruebo que no estan vacios y que la fecha es valida
        if (!name) throw new EmptyValueException("name", name);
        if (!lastname1) throw new EmptyValueException("lastname1", lastname1);
        if (!born) throw new EmptyValueException("born", born);
        if (!/^(?:3[01]|[12][0-9]|0?[1-9])([\-/.])(0?[1-9]|1[1-2])\1\d{4}$/.test(born)) throw InvalidValueException("born", born);
        this.Name = name;
        this.Lastname1 = lastname1;
        this.Lastname2 = lastname2;
        this.Born = born;
        this.Picture = picture;
    }
    toString() {
        return this.constructor.Name + " " + this.Lastname1 + " " + this.Lastname2 + " nacido en " + this.Born + " " + this.Picture;
    }
}
//clase categoria
class Category {
    Name;
    Description;

    constructor(name, description) {
        if (!name) throw new EmptyValueException("name", name);
        if (!description) throw new EmptyValueException("description", description);
        this.Name = name;
        this.Description = description;
    }
    toString() {
        return this.constructor.Name + " " + this.description;
    }
}
//clase resource
class Resource {
    Duration;
    Link;

    constructor(duration, link) {
        if (!duration) throw new EmptyValueException("duration", duration);
        if (Number.isNaN(duration)) throw new InvalidValueException("duration", duration);
        if (!link) throw new EmptyValueException("link", link);
        this.Duration = duration;
        this.Link = link;
    }
    toString() {
        return this.constructor.Duration + " " + this.Link;
    }
}
//clase produccion abstracta
class Production {
    Title;
    Nacionality;
    Publication;
    Synopsis;
    Image;

    constructor(title, nacionality, publication, synopsis, image) {
        if (new.target === Production) throw new Error("Production is an abstract class.");
        if (!title) throw new EmptyValueException("title", title);
        if (!publication) throw new EmptyValueException("publication", publication);
        if (!/^(?:3[01]|[12][0-9]|0?[1-9])([\-/.])(0?[1-9]|1[1-2])\1\d{4}$/.test(publication)) throw InvalidValueException("publication", publication);
        this.Title = title;
        this.Nacionality = nacionality;
        this.Publication = publication;
        this.Synopsis = synopsis;
        this.Image = image;
    }

}
//clase movie que hereda de produccion
class Movie extends Production {
    Resource;
    Locations;

    constructor(title, nacionality, publication, synopsis, image, resource, locations) {
        super(title, nacionality, publication, synopsis, image);
        if (!resource) throw new EmptyValueException("resource", resource);
        if (!locations) throw new EmptyValueException("locations", locations);
        if (!(resource instanceof (Resource))) throw new InvalidAccessConstructorException("resource", resource);
        if (!(locations instanceof (Coordinate))) throw new InvalidAccessConstructorException("locations", locations);
        this.Resource = resource;
        this.Locations = locations;
    }
    toString() {
        return this.constructor.title + " " + this.Resource + " " + this.Locations;
    }
}
//clase serie que hereda de produccion
class Serie extends Production {
    Resource;
    Locations;
    Seasons;
    constructor(title, nacionality, publication, synopsis, image, resource, locations, seasons) {
        super(title, nacionality, publication, synopsis, image);
        if (!resource) throw new EmptyValueException("resource", resource);
        if (!locations) throw new EmptyValueException("locations", locations);
        if (!(resource instanceof Resource)) throw new InvalidAccessConstructorException("resource", resource);
        if (!(locations instanceof Coordinate)) throw new InvalidAccessConstructorException("locations", locations);
        if (!seasons) throw new EmptyValueException("seasons", seasons);
        if (Number.isNaN(seasons)) throw new InvalidValueException("seasons", seasons);
        this.Resource = resource;
        this.Locations = locations;
        this.Seasons = seasons;
    }
}

class User {
    Username;
    Email;
    #Password;
    constructor(username, email, password) {
        if (!username) throw new InvalidValueException("username", username);
        if (!email) throw new InvalidValueException("email", email);
        if (!/[a-zA-Z0-9!#$%&'*_+-]([\.]?[a-zA-Z0-9!#$%&'*_+-])+@[a-zA-Z0-9]([^@&%$\/()=?¿!.,:;]|\d)+[a-zA-Z0-9][\.][a-zA-Z]{2,4}([\.][a-zA-Z]{2})?/.test(email))
            throw new InvalidValueException("email", email);
        if (!password) throw new InvalidValueException("password", password);
        if (!/[a-zA-Z0-9]{8}/.test(password)) throw new InvalidValueException("password", password);
        this.Username = username;
        this.Email = email;
        this.#Password = password;

    }
}

// Objeto Coordinate para definir coordenadas.
class Coordinate {
    #latitude;
    #longitude;

    constructor(latitude = 0, longitude = 0) {

        latitude = typeof latitude !== 'undefined' ? Number(latitude).valueOf() : 0;
        if (Number.isNaN(latitude) || latitude < -90 || latitude > 90)
            throw new InvalidValueException("latitude", latitude);
        longitude = typeof longitude !== 'undefined' ? Number(longitude).valueOf() : 0;
        if (Number.isNaN(longitude) || longitude < -180 || longitude > 180)
            throw new InvalidValueException("longitude", longitude);

        this.#latitude = latitude;
        this.#longitude = longitude;
    }

    get latitude() {
        return this.#latitude;
    }
    set latitude(value) {
        value = typeof value !== 'undefined' ? Number(value).valueOf() : 0;
        if (Number.isNaN(value) || value < -90 || value > 90)
            throw new InvalidValueException("latitude", value);
        this.#latitude = value;
    }

    get longitude() {
        return this.#longitude;
    }
    set longitude(value) {
        value = typeof value !== 'undefined' ? Number(value).valueOf() : 0;
        if (Number.isNaN(value) || value < -180 || value > 180)
            throw new InvalidValueException("longitude", value);
        this.#longitude = value;
    }

    getSexagesimalLatitude() {
        let direction = this.latitude >= 0 ? "N" : "S";
        let latitude = Math.abs(this.latitude);
        let grades = Math.floor(latitude);
        let tmpMinutes = (latitude - grades) * 60;
        let minutes = Math.floor(tmpMinutes);
        let tmpSeconds = (tmpMinutes - minutes) * 60;
        let seconds = Math.round(tmpSeconds);

        return grades + "°" + minutes + "'" + seconds + "''" + direction;
    }


    getSexagesimalLongitude() {
        let direction = this.longitude >= 0 ? "E" : "W";
        let longitude = Math.abs(this.longitude);
        let grades = Math.floor(longitude);
        let tmpMinutes = (longitude - grades) * 60;
        let minutes = Math.floor(tmpMinutes);
        let tmpSeconds = (tmpMinutes - minutes) * 60;
        let seconds = Math.round(tmpSeconds);

        return grades + "°" + minutes + "'" + seconds + "''" + direction;
    }

}
//singleton videosystem
let VideoSystem = (
    function () {
        let instantiated;
        function init() {
            //clase principar
            class VideoSystem {
                Name;
                #users = [];
                #productions = [];
                #categories = [];
                #actors = [];
                #directors = [];
                constructor(name) {
                    //compruebo que no estan vacios y que son del objeto deseado
                    if (!name) throw new EmptyValueException("name", name);
                    this.Name = name;

                }
                get name() {
                    return this.Name;
                }
                name(value) {
                    if (!value) throw new InvalidValueException("nombre", value);
                    this.Name = value;
                    return "Nombre cambiado";
                }
                get categories() {
                    // referencia para habilitar el closure en el objeto. En el generador se pierde la referencia this, por lo que hay que guardarla como closure
                    let array = this.#categories;
                    // Los getter no admiten generadores, deben devolver un objeto iterable. [Symbol.iterator]() puede ser generador.
                    return {
                        *[Symbol.iterator]() {
                            // Recorremos todos los autores menos el de por defecto.
                            for (let i = 0; i < array.length; i++) {
                                yield array[i];
                            }
                        }
                    }
                }
                //añade una categoria a la lista
                addCatecogy(catego) {
                    if (!catego) throw new EmptyValueException("catego", catego);
                    if (!(catego instanceof Category)) throw new InvalidAccessConstructorException("catego", catego);
                    /* let categ = [ // Array contiene objeto literal con la categoría y un array con las imágenes de esa categoría
                         {
                             category: catego,
                             production: [] // El array contiene las referencias al objeto production
                         }
                     ];*/
                    let categ = [catego, []];
                    this.#categories.push(categ);
                    return this.#categories.length;
                }
                //funcion que añade una categoria de la lista de categorias
                removeCategory(category) {
                    if (!category) throw new EmptyValueException("category", category);
                    if (!(category instanceof Category)) throw new InvalidAccessConstructorException("category", category);
                    let borrado = false;
                    let index = 0;
                    //busca el nombre del curso a borrar
                    while (index < this.#categories.length && borrado == false) {
                        if (this.#categories[index][0] == category) {
                            this.#categories.splice(index, 1);
                            borrado = true;
                        }
                        index++;
                    }
                    if (borrado) {
                        return this.#categories.length;
                    } else throw new InvalidValueException("category", category);
                }
                //Iterador que devuelve los datos de la lista de usuarios
                get users() {
                    // referencia para habilitar el closure en el objeto. En el generador se pierde la referencia this, por lo que hay que guardarla como closure
                    let array = this.#users;
                    // Los getter no admiten generadores, deben devolver un objeto iterable. [Symbol.iterator]() puede ser generador.
                    return {
                        *[Symbol.iterator]() {
                            // Recorremos todos los autores menos el de por defecto.
                            for (let i = 0; i < array.length; i++) {
                                yield array[i];
                            }
                        }
                    }
                }
                //funcion que añade un usuario de la lista de usuarios
                addUser(user) {
                    if (!user) throw new EmptyValueException("user", user);
                    if (!(user instanceof User)) throw new InvalidAccessConstructorException("user", user);
                    for (let index = 0; index < this.#users.length; index++) {
                        if (this.#users[index].Username == user.Username) throw new InvalidValueException("user", user);
                        if (this.#users[index].Email == user.Email) throw new InvalidValueException("user", user);
                    }
                    this.#users.push(user);
                    return this.#users.length;
                }
                //funcion que quita un usuarios de la lista de usuarios
                removeUser(user) {
                    if (!user) throw new EmptyValueException("user", user);
                    if (!(user instanceof User)) throw new InvalidAccessConstructorException("user", user);
                    let borrado = false;
                    let index = 0;
                    //busca el nombre del curso a borrar
                    while (index < this.#users.length && borrado == false) {
                        if (this.#users[index] == user) {
                            this.#users.splice(index, 1);
                            borrado = true;
                        }
                        index++;
                    }
                    if (borrado) {
                        return this.#users.length;
                    } else throw new InvalidValueException("user", user);
                }
                //Iterador que devuelve los datos de la lista de producciones
                get productions() {
                    // referencia para habilitar el closure en el objeto. En el generador se pierde la referencia this, por lo que hay que guardarla como closure
                    let array = this.#productions;
                    // Los getter no admiten generadores, deben devolver un objeto iterable. [Symbol.iterator]() puede ser generador.
                    return {
                        *[Symbol.iterator]() {
                            // Recorremos todos los autores menos el de por defecto.
                            for (let i = 0; i < array.length; i++) {
                                yield array[i];
                            }
                        }
                    }
                }
                //funcion que añade una produccion de la lista de producciones
                addProduction(production) {
                    if (!production) throw new EmptyValueException("production", production);
                    if (!(production instanceof Production)) throw new InvalidAccessConstructorException("production", production);
                    for (let index = 0; index < this.#productions.length; index++) {
                        if (this.#productions[index].Title == production.Title) throw new InvalidValueException("production", production);
                    }
                    this.#productions.push(production);
                    return this.#productions.length;
                }
                //funcion que quita una produccion de la lista de producciones
                removeProduction(production) {
                    if (!production) throw new EmptyValueException("production", production);
                    if (!(production instanceof Production)) throw new InvalidAccessConstructorException("production", production);
                    let borrado = false;
                    let index = 0;
                    //busca el nombre del curso a borrar
                    while (index < this.#productions.length && borrado == false) {
                        if (this.#productions[index][0] == production) {
                            this.#productions.splice(index, 1);
                            borrado = true;
                        }
                        index++;
                    }
                    if (borrado) {
                        return this.production.length;
                    } else throw new InvalidValueException("production", production);
                }
                //getter de actores
                get actors() {
                    // referencia para habilitar el closure en el objeto. En el generador se pierde la referencia this, por lo que hay que guardarla como closure
                    let array = this.#actors;
                    // Los getter no admiten generadores, deben devolver un objeto iterable. [Symbol.iterator]() puede ser generador.
                    return {
                        *[Symbol.iterator]() {
                            // Recorremos todos los autores menos el de por defecto.
                            for (let i = 0; i < array.length; i++) {
                                yield array[i];
                            }
                        }
                    }
                }
                //funcion que añade un actor a la lista
                addActor(actor) {
                    //compruebo que es valido
                    if (!actor) throw new EmptyValueException("actor", actor);
                    if (!(actor instanceof Person)) throw new InvalidAccessConstructorException("actor", actor);
                    for (let index = 0; index < this.#actors.length; index++) {
                        if (this.#actors[index] == actor) throw new InvalidValueException("actor", actor);
                    }
                    let acto = [actor, []];
                    this.#actors.push(acto);
                    return this.#actors.length;
                }
                //funcion que quita un actor de la lista
                removeActor(actor) {
                    if (!actor) throw new EmptyValueException("actor", actor);
                    if (!(actor instanceof Person)) throw new InvalidAccessConstructorException("actor", actor);
                    let borrado = false;
                    let index = 0;
                    //busca el nombre del curso a borrar
                    while (index < this.#actors.length && borrado == false) {
                        if (this.#actors[index][0] == actor) {
                            this.#actors.splice(index, 1);
                            borrado = true;
                        }
                        index++;
                    }
                    if (borrado) {
                        return this.#actors.length;
                    } else throw new InvalidValueException("actor", actor);
                }
                //getter de actores
                get directors() {
                    // referencia para habilitar el closure en el objeto. En el generador se pierde la referencia this, por lo que hay que guardarla como closure
                    let array = this.#directors;
                    // Los getter no admiten generadores, deben devolver un objeto iterable. [Symbol.iterator]() puede ser generador.
                    return {
                        *[Symbol.iterator]() {
                            // Recorremos todos los autores menos el de por defecto.
                            for (let i = 0; i < array.length; i++) {
                                yield array[i];
                            }
                        }
                    }
                }
                //funcion que añade un actor a la lista
                addDirector(director) {
                    //compruebo que es valido
                    if (!director) throw new EmptyValueException("director", director);
                    if (!(director instanceof Person)) throw new InvalidAccessConstructorException("director", director);
                    for (let index = 0; index < this.#directors.length; index++) {
                        if (this.#directors[index] == director) throw new InvalidValueException("director", director);
                    }
                    let direc = [director, []];
                    this.#directors.push(direc);
                    return this.#directors.length;
                }
                //funcion que quita un actor de la lista
                removeDirector(director) {
                    if (!director) throw new EmptyValueException("director", director);
                    if (!(director instanceof Person)) throw new InvalidAccessConstructorException("director", director);
                    let borrado = false;
                    let index = 0;
                    //busca el nombre del curso a borrar
                    while (index < this.#directors.length && borrado == false) {
                        if (this.#directors[index][0] == director) {
                            this.#directors.splice(index, 1);
                            borrado = true;
                        }
                        index++;
                    }
                    if (borrado) {
                        return this.#directors.length;
                    } else throw new InvalidValueException("director", director);
                }
                //funcion que asigna producciones a una categoria
                assignCategory(category, production) {
                    //compruebo que son validos
                    if (!category) throw new EmptyValueException("category", category);
                    if (!production) throw new EmptyValueException("production", production);

                    if (!(category instanceof Category)) throw new InvalidAccessConstructorException("category", category);
                    let l = 0;
                    let existe = false;
                    let pos = 0;
                    //compruebo si la categoria existe
                    while (l < this.#categories.length && existe == false) {
                        if (this.#categories[l][0].Name == category.Name) {
                            //si existe guardo su posicion
                            existe = true;
                            pos = l;
                        }
                        l++;
                    }
                    //la añado si no lo hace
                    if (!existe) {
                        this.addCatecogy(category);
                        pos = this.#categories.length - 1;
                    }
                    existe = false;
                    let index = 0;
                    let j = 0;
                    let cont = 0;
                    //si es un array de producciones
                    if (production instanceof Array) {
                        //mientras no se llegue al final del array dado
                        while (index < production.length) {
                            existe = false;
                            //compruebo que cada dato del array es valido
                            if (!(production[index] instanceof Production)) throw new InvalidAccessConstructorException("production", production);
                            //compara el #productions con cada elemento del array dado
                            while (j < this.#productions.length && existe == false) {
                                if (production[index] == this.#productions[j]) {
                                    existe = true;
                                }
                                j++;
                            }
                            //si no existe se añade
                            if (!existe) {
                                this.addProduction(production[index]);
                            }
                            //se asigna a la categoria correspondiente
                            this.#categories[pos][1].push(production[index]);
                            index++;
                        }
                    } else {//si es solo una produccion
                        //compruebo que el dato es valido
                        if (!(production instanceof Production)) throw new InvalidAccessConstructorException("production", production);
                        //compruebo si existe
                        while (index < this.#categories.length && existe == false) {
                            if (!(this.#productions[index] == production)) {
                                existe = true;
                            }
                            index++;
                        }
                        //si no  existe se añade
                        if (!existe) {
                            this.addProduction(production);
                        }
                        //console.log(this.#categories[pos][1]) ;
                        //se añade a la categoria correspondiente
                        this.#categories[pos][1].push(production);
                    }
                    return this.#categories[pos].length;
                }
                //funcion que desasigna producciones a una categoria
                deassignCategory(category, production) {
                    if (!category) throw new EmptyValueException("category", category);
                    if (!production) throw new EmptyValueException("production", production);
                    if (!(category instanceof Category)) throw new InvalidAccessConstructorException("category", category);
                    let l = 0;
                    let existe = false;
                    let pos = 0;
                    //compruebo si la categoria existe
                    while (l < this.#categories.length && existe == false) {
                        if (this.#categories[l][0].Name == category.Name) {
                            //si existe guardo su posicion
                            existe = true;
                            pos = l;
                        }
                        l++;
                    }
                    //error si no existe
                    if (!existe) throw new InvalidValueException("category", category);
                    existe = false;
                    let index = 0;
                    let j = 0;
                    let cont = 0;
                    //si es un array de producciones
                    if (production instanceof Array) {
                        //mientras no se llegue al final del array dado
                        while (index < production.length) {
                            existe = false;
                            //compruebo que cada dato del array es valido
                            if (!(production[index] instanceof Production)) throw new InvalidAccessConstructorException("production", production);
                            //compara el #productions con cada elemento del array dado
                            while (j < this.#categories.length && existe == false) {
                                if (production[index] == this.#categories[pos][1][j]) {
                                    existe = true;
                                    cont = j;
                                }
                                j++;
                            }
                            //si no existe se ignora
                            if (existe) {
                                //se borra la produccion correspondiente
                                this.#categories[pos][1].splice(cont, 1);
                            }
                            j = 0;
                            index++;
                        }
                    } else {//si es solo una produccion
                        //compruebo que el dato es valido
                        if (!(production instanceof Production)) throw new InvalidAccessConstructorException("production", production);
                        //compruebo si existe
                        existe = false;
                        index = 0;
                        while (index < this.#categories.length && existe == false) {
                            if ((this.#productions[index] == production)) {
                                existe = true;
                            }
                            index++;
                        }
                        //si existe se añade
                        if (!existe) {
                            this.addProduction(production);
                        }
                        //console.log(this.#categories[pos][1]) ;
                        index = 0;
                        cont = 0;
                        while (index < this.#categories.length && existe == false) {
                            if ((this.#categories[pos][1][index].Title == production.Title)) {
                                existe = true;
                                cont = index;
                            }
                            index++;
                        }
                        this.#categories[pos][1].splice(cont, 1);
                    }
                    return this.#categories[pos].length;
                }
                //funcion que sasigna producciones a un director
                assignDirector(person, production) {
                    //compruebo que son validos
                    if (!person) throw new EmptyValueException("person", person);
                    if (!production) throw new EmptyValueException("production", production);
                    if (!(person instanceof Person)) throw new InvalidAccessConstructorException("person", person);
                    let l = 0;
                    let existe = false;
                    let pos = 0;
                    //compruebo si la categoria existe
                    while (l < this.#directors.length && existe == false) {
                        if (this.#directors[l][0].Name == person.Name) {
                            //si existe guardo su posicion
                            existe = true;
                            pos = l;
                        }
                        l++;
                    }
                    //la añado si no lo hace
                    if (!existe) {
                        this.addDirector(person);
                        pos = this.#categories.length - 1;
                    }
                    existe = false;
                    let index = 0;
                    let j = 0;
                    let cont = 0;
                    //si es un array de producciones
                    if (production instanceof Array) {
                        //mientras no se llegue al final del array dado
                        while (index < production.length) {
                            existe = false;
                            //compruebo que cada dato del array es valido
                            if (!(production[index] instanceof Production)) throw new InvalidAccessConstructorException("production", production);
                            //compara el #productions con cada elemento del array dado
                            while (j < this.#productions.length && existe == false) {
                                if (production[index] == this.#productions[j]) {
                                    existe = true;
                                }
                                j++;
                            }//si no existe se añade
                            if (!existe) {
                                this.addProduction(production[index]);
                            }
                            //se asigna a la categoria correspondiente
                            this.#directors[pos][1].push(production[index]);
                            index++;
                        }
                    } else {//si es solo una produccion
                        //compruebo que el dato es valido
                        if (!(production instanceof Production)) throw new InvalidAccessConstructorException("production", production);
                        //compruebo si existe
                        while (index < this.#directors.length && existe == false) {
                            if (!(this.#productions[index] == production)) {
                                cont++;
                            }
                            index++;
                        }
                        //si existe se añade
                        if (cont == 0) {
                            this.addProduction(production);
                        }
                        //console.log(this.#categories[pos][1]) ;
                        //se añade a la categoria correspondiente
                        this.#directors[pos][1].push(production);
                    }
                    return this.#directors[pos].length;
                }
                //funcion que desasigna producciones a un director
                deassignDirector(person, production) {
                    if (!person) throw new EmptyValueException("person", person);
                    if (!production) throw new EmptyValueException("production", production);
                    if (!(person instanceof Person)) throw new InvalidAccessConstructorException("person", person);
                    let l = 0;
                    let existe = false;
                    let pos = 0;
                    //compruebo si la categoria existe
                    while (l < this.#directors.length && existe == false) {
                        if (this.#directors[l][0].Name == person.Name) {
                            //si existe guardo su posicion
                            existe = true;
                            pos = l;
                        }
                        l++;
                    }
                    //error si no existe
                    if (!existe) throw new InvalidValueException("category", category);
                    existe = false;
                    let index = 0;
                    let j = 0;
                    let cont = 0;
                    //si es un array de producciones
                    if (production instanceof Array) {
                        //mientras no se llegue al final del array dado
                        while (index < production.length) {
                            existe = false;
                            //compruebo que cada dato del array es valido
                            if (!(production[index] instanceof Production)) throw new InvalidAccessConstructorException("production", production);
                            //compara el #productions con cada elemento del array dado
                            while (j < this.#directors.length && existe == false) {
                                if (production[index] == this.#directors[pos][1][j]) {
                                    existe = true;
                                    cont = j;
                                }
                                j++;
                            }
                            //si no existe se ignora
                            if (existe) {
                                //se borra la produccion correspondiente
                                this.#directors[pos][1].splice(cont, 1);
                            }
                            j = 0;
                            index++;
                        }
                    } else {//si es solo una produccion
                        //compruebo que el dato es valido
                        if (!(production instanceof Production)) throw new InvalidAccessConstructorException("production", production);
                        //compruebo si existe
                        existe = false;
                        index = 0;
                        while (index < this.#directors.length && existe == false) {
                            if ((this.#productions[index] == production)) {
                                existe = true;
                            }
                            index++;
                        }
                        //si existe se añade
                        if (!existe) {
                            this.addProduction(production);
                        }
                        //console.log(this.#directors[pos][1]) ;
                        index = 0;
                        cont = 0;

                        while (index < this.#directors.length && existe == false) {
                            console.log(this.#directors[pos][1][index]);
                            if ((this.#directors[pos][1][index].Title == production.Title)) {
                                existe = true;
                                cont = index;
                            }
                            index++;
                        }
                        this.#directors[pos][1].splice(cont, 1);
                    }
                    return this.#directors[pos].length;
                }
                //funcion que asigna producciones a un actor
                assignActor(person, production) {
                    if (!person) throw new EmptyValueException("person", person);
                    if (!production) throw new EmptyValueException("production", production);
                    if (!(person instanceof Person)) throw new InvalidAccessConstructorException("person", person);
                    //console.log(this.#productions);
                    let l = 0;
                    let existe = false;
                    let pos = 0;
                    //compruebo si la categoria existe
                    while (l < this.#actors.length && existe == false) {
                       // console.log(this.#actors[l][0].Name +" == "+person.Name)
                        if (this.#actors[l][0].Name == person.Name) {
                            //si existe guardo su posicion
                            existe = true;
                            pos = l;
                        }
                        l++;
                    }
                    //la añado si no lo hace
                    if (!existe) {
                        this.addDirector(person);
                        pos = this.#categories.length - 1;
                    }
                    existe = false;
                    let index = 0;
                    let j = 0;
                    let cont = 0;
                    //si es un array de producciones
                    if (production instanceof Array) {
                        //mientras no se llegue al final del array dado
                        while (index < production.length) {
                            existe = false;
                            //compruebo que cada dato del array es valido
                            if (!(production[index] instanceof Production)) throw new InvalidAccessConstructorException("production", production);
                            //compara el #productions con cada elemento del array dado
                            while (j < this.#productions.length && existe == false) {
                                if (production[index] == this.#productions[j]) {
                                    existe = true;
                                }
                                j++;
                            }//si no existe se añade
                            if (!existe) {
                                this.addProduction(production[index]);
                            }
                            //se asigna a la categoria correspondiente
                            this.#actors[pos][1].push(production[index]);
                            index++;
                        }
                    } else {//si es solo una produccion
                        //compruebo que el dato es valido
                        if (!(production instanceof Production)) throw new InvalidAccessConstructorException("production", production);
                        //compruebo si existe
                        //console.log(production);
                        while (index < this.#productions.length && existe == false) {
                           /*  console.log(this.#productions[index].Title );
                            console.log((this.#productions[index].Title == production.Title )); */
                            if ((this.#productions[index].Title == production.Title )) {
                               existe=true;
                            }
                            /* console.log(this.#productions[index]);
                            console.log(pos); */
                            index++;
                        }
                        //si existe se añade
                        if (!existe) {
                            this.addProduction(production);
                        }
                        //console.log(this.#categories[pos][1]) ;
                        //se añade a la categoria correspondiente
                       /*  console.log(pos);
                        console.log(this.#actors)
                        console.log(this.#actors[pos]); */
                        this.#actors[pos][1].push(production);
                    }
                    return this.#actors[pos].length;
                }
                //funcion que desasigna producciones a un actor
                deassignActor(person, production) {
                    if (!person) throw new EmptyValueException("person", person);
                    if (!production) throw new EmptyValueException("production", production);
                    if (!(person instanceof Person)) throw new InvalidAccessConstructorException("person", person);
                    let l = 0;
                    let existe = false;
                    let pos = 0;
                    //compruebo si la categoria existe
                    while (l < this.#actors.length && existe == false) {
                        if (this.#actors[l][0].Name == person.Name) {
                            //si existe guardo su posicion
                            existe = true;
                            pos = l;
                        }
                        l++;
                    }
                    //error si no existe
                    if (!existe) throw new InvalidValueException("person", person);
                    existe = false;
                    let index = 0;
                    let j = 0;
                    let cont = 0;
                    //si es un array de producciones
                    if (production instanceof Array) {
                        //mientras no se llegue al final del array dado
                        while (index < production.length) {
                            existe = false;
                            //compruebo que cada dato del array es valido
                            if (!(production[index] instanceof Production)) throw new InvalidAccessConstructorException("production", production);
                            //compara el #productions con cada elemento del array dado
                            while (j < this.#actors.length && existe == false) {
                                if (production[index] == this.#actors[pos][1][j]) {
                                    existe = true;
                                    cont = j;
                                }
                                j++;
                            }
                            //si no existe se ignora
                            if (existe) {
                                //se borra la produccion correspondiente
                                this.#actors[pos][1].splice(cont, 1);
                            }
                            j = 0;
                            index++;
                        }
                    } else {//si es solo una produccion
                        //compruebo que el dato es valido
                        if (!(production instanceof Production)) throw new InvalidAccessConstructorException("production", production);
                        //compruebo si existe
                        existe = false;
                        index = 0;
                        while (index < this.#actors.length && existe == false) {
                            if ((this.#productions[index] == production)) {
                                existe = true;
                                pos = index;
                            }
                            index++;
                        }
                        //si existe se añade
                        if (!existe) {
                            this.addProduction(production);
                        }
                        //console.log(this.#actors[pos][1]) ;
                        index = 0;
                        cont = 0;
                        //comprueba si existe y guarda su posicion en ese caso
                        while (index < this.#actors.length && existe == false) {
                            if ((this.#actors[pos][1][index].Title == production.Title)) {
                                existe = true;
                                cont = index;
                            }
                            index++;
                        }
                        this.#actors[pos][1].splice(cont, 1);
                    }
                    return this.#actors[pos].length;
                }

                getCast(production) {
                    if (!production) throw new EmptyValueException("production", production);
                    if (!(production instanceof Production)) throw new InvalidAccessConstructorException("production", production);
                    // referencia para habilitar el closure en el objeto. En el generador se pierde la referencia this, por lo que hay que guardarla como closure
                    let array = this.#actors;
                    // Los getter no admiten generadores, deben devolver un objeto iterable. [Symbol.iterator]() puede ser generador.
                    return {
                        *[Symbol.iterator]() {
                            //digo para que pelicula trabajaron los actores
                            console.log("Para " + production.Title + " trabajaron ");
                            // Recorremos todos los actores.
                            for (let i = 0; i < array.length; i++) {
                                //si en la produccion esta la dada se muestra el actor
                                for (let index = 0; index < array[i][1].length; index++) {
                                    if (array[i][1][index] == production) {
                                        yield array[i][0];
                                    }
                                }
                            }
                        }
                    }
                }
                getProductionsDirector(person) {
                    if (!person) throw new EmptyValueException("person", person);
                    if (!(person instanceof Person)) throw new InvalidAccessConstructorException("person", person);
                    // referencia para habilitar el closure en el objeto. En el generador se pierde la referencia this, por lo que hay que guardarla como closure
                    let array = this.#directors;
                    // Los getter no admiten generadores, deben devolver un objeto iterable. [Symbol.iterator]() puede ser generador.
                    return {
                        *[Symbol.iterator]() {
                            //digo para que pelicula trabajaron los directores
                            console.log(person.Name + " dirigio ");
                            // Recorremos todos los actores.
                            for (let i = 0; i < array.length; i++) {
                                //si en la produccion esta la dada se muestra el director
                                if (array[i][0] == person) {
                                    for (let index = 0; index < array[i][1].length; index++) {
                                        yield array[i][1][index];
                                    }
                                }
                            }
                        }
                    }
                }
                getProductionsActor(person) {
                    if (!person) throw new EmptyValueException("person", person);
                    if (!(person instanceof Person)) throw new InvalidAccessConstructorException("person", person);
                    // referencia para habilitar el closure en el objeto. En el generador se pierde la referencia this, por lo que hay que guardarla como closure
                    let array = this.#actors;
                    // Los getter no admiten generadores, deben devolver un objeto iterable. [Symbol.iterator]() puede ser generador.
                    return {
                        *[Symbol.iterator]() {
                            //digo para que pelicula trabajaron los directores
                            console.log(person.Name + " actuo en ");
                            // Recorremos todos los actores.
                            for (let i = 0; i < array.length; i++) {
                                //si en la produccion esta la dada se muestra el actor
                                if (array[i][0] == person) {
                                    for (let index = 0; index < array[i][1].length; index++) {
                                        //console.log(array[i][1].length);
                                        yield array[i][1][index];
                                    }
                                }
                            }
                        }
                    }
                }
                getProductionsCategory(category) {
                    if (!category) throw new EmptyValueException("category", category);
                    if (!(category instanceof Category)) throw new InvalidAccessConstructorException("category", category);
                    // referencia para habilitar el closure en el objeto. En el generador se pierde la referencia this, por lo que hay que guardarla como closure
                    let array = this.#categories;
                    // Los getter no admiten generadores, deben devolver un objeto iterable. [Symbol.iterator]() puede ser generador.
                    return {
                        *[Symbol.iterator]() {
                            //digo para que pelicula trabajaron los directores
                            console.log("Son de " + category.Name);
                            // Recorremos todos los actores.
                            for (let i = 0; i < array.length; i++) {
                                //si en la produccion esta la dada se muestra el actor
                                if (array[i][0] == category) {
                                    for (let index = 0; index < array[i][1].length; index++) {
                                        yield array[i][1][index];
                                    }
                                }
                            }
                        }
                    }
                }
            }
            //declaro videosystem con un nombre por defecto y lo devuelvo para poder usarlo
            let vi = new VideoSystem("Defect");
            return vi;
        } return {
            // Devuelve un objeto con el método getInstance
            getInstance: function () {
                if (!instantiated) {
                    //Si la variable instantiated es undefined, priemera ejecución, ejecuta init. 
                    instantiated = init();
                    //instantiated contiene el objeto único 
                } return instantiated; //Si ya está asignado devuelve la asignación. 
            }
        };
    })();

/* //test
console.log("Test");
//declaro variables
let act = new Person("Paco", "lo", "la", "10/05/1990", "");
let act2 = new Person("Rosa", "lo", "la", "10/05/1990", "");
let act3 = new Person("Lis", "lo", "la", "10/05/1990", "");
let dir = new Person("Mac", "lo", "la", "10/05/1980", "");
let dir2 = new Person("Rocky", "lo", "la", "10/05/1980", "");
let user = new User("Lu", "lume@gmail.com", "12345678");
let user2 = new User("Mi", "lum@gmail.com", "12345678");
//let user4=new User("Lu","lume@gmail.com","123458");//error de contraseña
//let user3=new User("Lu","lu@gmail.com","12345678");//error el correo

let cat = new Category("accion", "accionada");
let cat2 = new Category("Romamce", "accionada");
let r = new Resource(59, "lod");
let c = new Coordinate(48, 70);
let prod = new Movie("Las llamas", "Español", "20/03/2010", "fuego", "a", r, c);
let prod2 = new Movie("Sparta", "Español", "20/03/2010", "esto es esparta", "a", r, c);
let prod3 = new Serie("Mellizos", "Español", "20/03/2010", "o gemelos?", "a", r, c, 8);
//let prod4 = new Production("Mellizos", "Español", "20/03/2010", "o gemelos?", "a");//da error de abstracto

let v = VideoSystem.getInstance();
//declaro los arrays para llamar a los get iteradores
let di = v.directors;
let ac = v.actors;
let ca = v.categories;
let us = v.users;


console.log(v.name("Video"));
console.log(v.Name);
console.log(v.productions);//sale iterador ya que son privadas y no pueden acceder al original
for (const iterator of ac) {
    console.log(iterator);
}

for (const iterator of di) {
    console.log(iterator);
}
//meto datos por defecto
v.addActor(act);
v.addCatecogy(cat);
v.addDirector(dir);
v.addProduction(prod);
v.addUser(user);

//categorias
console.log("Categorias");
console.log(v.addCatecogy(cat2));
for (const iterator of ca) {
    console.log(iterator);
}
console.log(v.removeCategory(cat2));
for (const iterator of ca) {
    console.log(iterator);
}
console.log(v.addCatecogy(cat2));
for (const iterator of ca) {
    console.log(iterator);
}
//pruebo assign a una categoria de 1 y de varios productos
console.log(v.assignCategory(cat, prod));
for (const iterator of ca) {
    console.log(iterator);
}
let prods = [prod2, prod3];
console.log(v.assignCategory(cat2, prods));
for (const iterator of ca) {
    console.log(iterator);
}
console.log(v.deassignCategory(cat2, prod2));
for (const iterator of ca) {
    console.log(iterator);
}
console.log(v.assignCategory(cat2, prod2));

for (const iterator of ca) {
    console.log(iterator);
}
console.log(v.deassignCategory(cat2, prods));
for (const iterator of ca) {
    console.log(iterator);
}
console.log(v.assignCategory(cat2, prods));

//directores
console.log("Directores");
console.log(v.addDirector(dir2));
for (const iterator of di) {
    console.log(iterator);
}
console.log(v.removeDirector(dir2));
for (const iterator of di) {
    console.log(iterator);
}
console.log(v.addDirector(dir2));
//pruebo assign a un director de 1 y de varios productos
console.log(v.assignDirector(dir, prod));
for (const iterator of di) {
    console.log(iterator);
}
console.log(v.assignDirector(dir2, prods));
for (const iterator of di) {
    console.log(iterator);
}
console.log(v.deassignDirector(dir, prod));
for (const iterator of di) {
    console.log(iterator);
}
console.log(v.deassignDirector(dir2, prods));
for (const iterator of di) {
    console.log(iterator);
}
console.log(v.assignDirector(dir2, prods));
//console.log(v.#categories[1][1][1]);
//actores
console.log("actores");

console.log(v.addActor(act2));
for (const iterator of ac) {
    console.log(iterator);
}
console.log(v.removeActor(act2));
for (const iterator of ac) {
    console.log(iterator);
}
console.log(v.addActor(act2));

//pruebo assign a un actor de 1 y de varios productos
console.log(v.assignActor(act, prod));
for (const iterator of ac) {
    console.log(iterator);
}
console.log(v.assignActor(act2, prods));
for (const iterator of ac) {
    console.log(iterator);
}
console.log(v.deassignActor(act, prod));
for (const iterator of ac) {
    console.log(iterator);
}
console.log(v.deassignActor(act2, prods));
for (const iterator of ac) {
    console.log(iterator);
}
//asigno de vuelta
console.log(v.assignActor(act2, prods));
console.log(v.assignActor(act, prod2));

//Usuarios
console.log("Usuarios");
console.log(v.addUser(user2));
for (const iterator of us) {
    console.log(iterator);
}
console.log(v.removeUser(user2));
for (const iterator of us) {
    console.log(iterator);
}
console.log(v.addUser(user2));
//cast
for (const iterator of v.getCast(prod2)) {
    console.log(iterator);
}
//directores
for (const iterator of v.getProductionsDirector(dir2)) {
    console.log(iterator);
}
for (const iterator of di) {
    console.log(iterator);
}
//actores
for (const iterator of v.getProductionsActor(act2)) {
    console.log(iterator);
}
//categorias
for (const iterator of v.getProductionsCategory(cat2)) {
    console.log(iterator);
} */

export default VideoSystem;
export{
    BaseException,
    InvalidAccessConstructorException,
    EmptyValueException,
    ParameterValidationException,
    InvalidValueException,
    AbstractClassException,
    VideoSystem,
    Person,
    Category,
    Resource,
    Coordinate,
    Production,
    Movie,
    Serie,
    User
};