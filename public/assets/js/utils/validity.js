const validity = Object.freeze({
  email:{
    regex: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
    err: 'Formato de correo inválido'
  },
  phone:{
    regex: /^[0-9]{9,}$/,
    err: '9 dígitos como mínimo'
  },
  fullName:{
    regex: /^[a-zA-Z]+(\s[a-zA-Z]+)+$/,
    err: 'mínimo 1 nombre y apellido'
  },
  address:{
    regex: /^[a-zA-Z0-9]+$/,
    err: 'Solo números y letras'
  },
  city:{
    regex: /^[0-9A-Za-z#-]+$/,
    err: 'Solo números, letras y caracteres válidos(#-)'
  },
  country:{
    regex: /^[a-zA-Z.]+$/,
    err: 'Solo letras sin caracteres especiales'
  },
  postalCode:{
    regex: /^\d{5}$/,
    err: 'Debe contener 5 dígitos'
  },

  validate: function validate(target, type) {
    const valid = target.parentNode.querySelector('.valid');
    const err = target.parentNode.querySelector('.error');
    
    if (this[type].regex.test(target.value)) {
      valid.style.display ='block';
      err.style.display ='none';

      this.setValue(target.value, type);

    }else{
      valid.style.display ='none';
      err.style.display ='block';

      this.setValue(null, type);

    }
  },

  setValue: function setValue(newValue, index) {
   this.newData[index] = newValue;
    console.log(this.newData);
  },

  newData:{
    email:null,
    phone:null,
    fullName:null,
    address: null,
    city:null,
    country:null,
    postalCode: null
  }
});

export default validity;