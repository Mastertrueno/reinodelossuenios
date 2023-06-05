class AllergenProduct{
    constructor(Id_alergeno,Id_producto){ 
        this._Id_alergeno=Id_alergeno; 
        this._Id_producto=Id_producto;
    }

    //Como métodos tendrá los getter y setter habituales para cada propiedad

    get _Id_alergeno(){
        return this._Id_alergeno;
    }

    set _Id_alergeno(value){
        if(!value || typeof value!=='string'){
            throw new EmptyValueException();
        }else{
            this.Id_alergeno=value; 
        } 
    }

    get _Id_producto(){
        return this._Id_producto;
    }

    set _Id_producto(value){
        if(!value || typeof value!=='string'){
            throw new EmptyValueException();
        }else{
            this.Id_producto=value; 
        } 
    }
}