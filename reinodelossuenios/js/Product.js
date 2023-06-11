//objeto de un producto
class Product{
    constructor(Id, Nombre, Descripcion, Ingredientes, Precio, Peso, Stock, Imagen, Id_categoria, Id_pais, Id_proveedor, Borrado){ //solo paso por parametro al constructuor los campos obligatoris que no aceptan nulos
        this._Id=Id; 
        this._Nombre=Nombre;
        this._Descripcion=Descripcion;
        this._Ingredientes=Ingredientes;
        this._Precio=Precio;
        this._Peso=Peso;
        this._Stock=Stock;
        this._Imagen=Imagen;
        this._Id_categoria=Id_categoria;
        this._Id_pais=Id_pais;
        this._Id_proveedor=Id_proveedor;
        this._Borrado=Borrado;
    }

    //Como métodos tendrá los getter y setter habituales para cada propiedad.

    get _Id(){
        return this._Id;
    }

    set _Id(value){
        if(!value){
            throw new EmptyValueException();
        }else{

            this.Id=value; 
        } 
    }

    get _Nombre(){
        return this._Nombre;
    }

    set _Nombre(value){
        if(!value){
            throw new EmptyValueException();
        }else{

            this.Nombre=value; 
        } 
    }

    get _Descripcion(){
        return this._Descripcion;
    }

    set _Descripcion(value){
        if(!value){
            throw new EmptyValueException();
        }else{

            this.Descripcion=value; 
        } 
    }

    get _Ingredientes(){
        return this._Ingredientes;
    }

    set _Ingredientes(value){
        if(!value){
            throw new EmptyValueException();
        }else{

            this.Ingredientes=value; 
        } 
    }

    get _Precio(){
        return this._Precio;
    }

    set _Precio(value){
        if(!value){
            throw new EmptyValueException();
        }else{

            this.Precio=value; 
        } 
    }

    get _Peso(){
        return this._Peso;
    }

    set _Peso(value){
        if(!value){
            throw new EmptyValueException();
        }else{

            this.Peso=value; 
        } 
    }

    get _Stock(){
        return this._Stock;
    }

    set _Stock(value){
        if(!value){
            throw new EmptyValueException();
        }else{

            this.Stock=value; 
        } 
    }

    get _Imagen(){
        return this._Imagen;
    }

    set _Imagen(value){
        if(!value){
            throw new EmptyValueException();
        }else{

            this.Imagen=value; 
        } 
    }

    get _Id_categoria(){
        return this._Id_categoria;
    }

    set _Id_categoria(value){
        if(!value){
            throw new EmptyValueException();
        }else{

            this.Id_categoria=value; 
        } 
    }

    get _Id_pais(){
        return this._Id_pais;
    }

    set _Id_pais(value){
        if(!value){
            throw new EmptyValueException();
        }else{

            this.Id_pais=value; 
        } 
    }

    get _Id_proveedor(){
        return this._Id_proveedor;
    }

    set _Id_proveedor(value){
        if(!value){
            throw new EmptyValueException();
        }else{

            this.Id_proveedor=value; 
        } 
    }

    get _Borrado(){
        return this._Borrado;
    }

    set _Borrado(value){
        if(!value){
            throw new EmptyValueException();
        }else{

            this.Borrado=value; 
        } 
    }
}



