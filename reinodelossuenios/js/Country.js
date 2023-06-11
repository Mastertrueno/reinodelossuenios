class Country{
    constructor(Id,Nombre){ 
        this._Id=Id; 
        this._Nombre=Nombre;
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
}