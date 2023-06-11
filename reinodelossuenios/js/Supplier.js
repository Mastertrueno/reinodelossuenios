class Supplier{
    constructor(Id, CIF, Nombre, Direccion, Telefono, Email, Borrado){ 
        this._Id=Id;
        this._CIF=CIF; 
        this._Nombre=Nombre;
        this._Direccion=Direccion;
        this._Telefono=Telefono;
        this._Email=Email;
        this._Borrado=Borrado;
    }

    //Como métodos tendrá los getter y setter habituales para cada propiedad
    get _Id(){
        return this._Id;
    }

    set _Id(value){
        if(!value || typeof value!=='string'){
            throw new EmptyValueException();
        }else{
            this.Id=value; 
        } 
    }

    get _CIF(){
        return this._CIF;
    }

    set _CIF(value){
        if(!value || typeof value!=='string'){
            throw new EmptyValueException();
        }else{
            this.CIF=value; 
        } 
    }

    get _Nombre(){
        return this._Nombre;
    }

    set _Nombre(value){
        if(!value || typeof value!=='string'){
            throw new EmptyValueException();
        }else{
            this.Nombre=value; 
        } 
    }

    get _Direccion(){
        return this._Direccion;
    }

    set _Direccion(value){
        if(!value || typeof value!=='string'){
            throw new EmptyValueException();
        }else{
            this.Direccion=value; 
        } 
    }

    get _Telefono(){
        return this._Telefono;
    }

    set _Telefono(value){
        if(!value || typeof value!=='string'){
            throw new EmptyValueException();
        }else{
            this.Telefono=value; 
        } 
    }
    
    get _Email(){
        return this._Email;
    }

    set _Email(value){
        if(!value || typeof value!=='string'){
            throw new EmptyValueException();
        }else{
            this.Email=value; 
        } 
    }

    get _Borrado(){
        return this._Borrado;
    }

    set _Borrado(value){
        if(!value || typeof value!=='string'){
            throw new EmptyValueException();
        }else{
            this.Borrado=value; 
        } 
    }

}