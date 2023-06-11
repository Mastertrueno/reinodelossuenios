class Order{
    constructor(Id_pedido, Id_usuario, Fecha, Total, Pago){ //solo paso por parametro al constructuor los campos obligatoris que no aceptan nulos
        this._Id_pedido=Id_pedido;
        this._Id_usuario=Id_usuario;
        this._Fecha=Fecha;
        this._Total=Total;
        this._Pago=Pago;
    }

    //Como métodos tendrá los getter y setter habituales para cada propiedad.
    get _Id_pedido(){
        return this._Id_pedido;
    }

    set _Id_pedido(value){
        if(!value){
            throw new EmptyValueException();
        }else{

            this.Id_pedido=value; 
        } 
    }

    get _Id_usuario(){
        return this._Id_usuario;
    }

    set _Id_usuario(value){
        if(!value){
            throw new EmptyValueException();
        }else{

            this.Id_usuario=value; 
        } 
    }

    get _Fecha(){
        return this._Fecha;
    }

    set _Fecha(value){
        if(!value){
            throw new EmptyValueException();
        }else{

            this.Fecha=value; 
        } 
    }

    get _Total(){
        return this._Total;
    }

    set _Total(value){
        if(!value){
            throw new EmptyValueException();
        }else{

            this.Total=value; 
        } 
    }

    get _Pago(){
        return this._Pago;
    }

    set _Pago(value){
        if(!value){
            throw new EmptyValueException();
        }else{

            this.Pago=value; 
        } 
    }
}



