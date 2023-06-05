class Store{
    constructor() {
        this._product = new Array();
        this._category = new Array();
        this._country = new Array();
        this._allergen = new Array();
        this._allergen_product = new Array();
        this._supplier = new Array();
        this._user = new Array();
        this._order = new Array();
        this._orderDetails = new Array();
        this._cesta=new Array();
    }

    addProduct(producto) {
        let repetido = false;
        for (let i = 0; i < this._product.length; i++) {
            if (this._product[i].Id == producto.Id) {
                repetido = true;
            }
        }
        if (!repetido) {
            this._product.push(producto); //si no está incluida lo añado
        }
        return this._product.length; //devolvemos el array
    }

    getProduct(){
        return this._product;
    }
    
    addCategory(categoria) {
        let repetido = false;
        for (let i = 0; i < this._category.length; i++) {
            if (this._category[i].Id == categoria.Id) {
                repetido = true;
            }
        }
        if (!repetido) {
            this._category.push(categoria); //si no está incluida lo añado
        }
        return this._category.length; //devolvemos el array
    }

    getCategory(){
        return this._category;
    }

    addCountry(pais) {
        let repetido = false;
        for (let i = 0; i < this._country.length; i++) {
            if (this._country[i].Id == pais.Id) {
                repetido = true;
            }
        }
        if (!repetido) {
            this._country.push(pais); //si no está incluida lo añado
        }
        return this._country.length; //devolvemos el array
    }
    
    
    getCountry(){
        return this._country;
    }

    addSupplier(prov) {
        let repetido = false;
        for (let i = 0; i < this._supplier.length; i++) {
            if (this._supplier[i].Id == prov.Id) {
                repetido = true;
            }
        }
        if (!repetido) {
            this._supplier.push(prov); //si no está incluida lo añado
        }
        return this._supplier.length; //devolvemos el array
    }
    
    
    getSupplier(){
        return this._supplier;
    }

    addAllergen(alergeno) {
        let repetido = false;
        for (let i = 0; i < this._allergen.length; i++) {
            if (this._allergen[i].Id == alergeno.Id) {
                repetido = true;
            }
        }
        if (!repetido) {
            this._allergen.push(alergeno); //si no está incluida lo añado
        }
        return this._allergen.length; //devolvemos el array
    }

    getAllergen(){
        return this._allergen;
    }

    addAllergenProduct(alergeno_producto) {
        let repetido = false;
        for (let i = 0; i < this._allergen_product.length; i++) {
            if (this._allergen_product[i].Id_alergeno == alergeno_producto.Id_alergeno
                && this._allergen_product[i].Id_producto==alergeno_producto.Id_producto) {
                repetido = true;
            }
        }
        if (!repetido) {
            this._allergen_product.push(alergeno_producto); //si no está incluida lo añado
        }
        return this._allergen_product.length; //devolvemos el array
    }

    getAllergenProduct(){
        return this._allergen_product;
    }

    addUser(user) {
        this._user=new Array(); //me cargo el array y lo hago de nuevo
        this._user.push(user); //añado el usuario de la sesión
        return this._user.length; 
    }

    getUser(){
        return this._user;
    }
    
    addCesta(producto) {
        let repetido = false;
        for (let i = 0; i < this._cesta.length; i++) {
            console.log(this._cesta[i].producto);
            console.log(producto.producto);
            if (this._cesta[i].producto === producto.producto) {
                this._cesta[i].cantidad=producto.cantidad;
                repetido = true;
                
            }
        }
        if (!repetido) {
            this._cesta.push(producto); //si no está incluida lo añado
        }
        return this._cesta.length; //devolvemos el array
    }

    getCesta(){
        return this._cesta;
    }
    
    addOrder(ped) {
        this._order=new Array(); //me cargo el array y lo hago de nuevo
        this._order.push(ped); //añado el usuario de la sesión
        return this._order.length; 
    }

    getOrder(){
        return this._order;
    }
    

}

