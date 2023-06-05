class User{
    constructor(nombre, apellidos, email, telefono,direccion, provincia, localidad, CP){ //solo paso por parametro al constructuor los campos obligatoris que no aceptan nulos
        this._nombre=nombre;
        this._apellidos=apellidos;
        this._email=email;
        this._telefono=telefono;
        this._direccion=direccion;
        this._provincia=provincia;
        this._localidad=localidad;
        this._CP=CP;
    }

    //Como métodos tendrá los getter y setter habituales para cada propiedad.
    get _nombre(){
        return this._nombre;
    }

    set _nombre(value){
        if(!value){
            throw new EmptyValueException();
        }else{

            this.nombre=value; 
        } 
    }

    get _apellidos(){
        return this._apellidos;
    }

    set _apellidos(value){
        if(!value){
            throw new EmptyValueException();
        }else{

            this.apellidos=value; 
        } 
    }

    get _email(){
        return this._email;
    }

    set _email(value){
        if(!value){
            throw new EmptyValueException();
        }else{

            this.email=value; 
        } 
    }

    get _telefono(){
        return this._telefono;
    }

    set _telefono(value){
        if(!value){
            throw new EmptyValueException();
        }else{

            this.telefono=value; 
        } 
    }

    get _direccion(){
        return this._direccion;
    }

    set _direccion(value){
        if(!value){
            throw new EmptyValueException();
        }else{

            this.direccion=value; 
        } 
    }

    get _provincia(){
        return this._provincia;
    }

    set _provincia(value){
        if(!value){
            throw new EmptyValueException();
        }else{

            this.provincia=value; 
        } 
    }

    get _localidad(){
        return this._localidad;
    }

    set _localidad(value){
        if(!value){
            throw new EmptyValueException();
        }else{

            this.localidad=value; 
        } 
    }

    get _CP(){
        return this._CP;
    }

    set _CP(value){
        if(!value){
            throw new EmptyValueException();
        }else{

            this.CP=value; 
        } 
    }
}



