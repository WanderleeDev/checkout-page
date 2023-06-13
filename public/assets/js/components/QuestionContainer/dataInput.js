const dataInput =[
  {
    img: "./public/assets/img/mail.svg",
    alt: "email",
    type: "email",
    description: "E-mail",
    err: 'Formato de correo inválido'
  },
  {
    img: "./public/assets/img/call.svg",
    alt: "phone",
    type: "tel",
    description: "Call",
    err: '9 dígitos como mínimo'
  },
  {
    img: "./public/assets/img/accountCircle.svg",
    alt: "fullName",
    type: "text",
    description: "Full name",
    err: 'Mínimo 1 nombre y apellido'
  },
  {
    img: "./public/assets/img/home.svg",
    alt: "address",
    type: "text",
    description: "Address",
    err: 'Solo números, letras y caracteres válidos(#-)'
  },
  {
    img: "./public/assets/img/apartment.svg",
    alt: "city",
    type: "text",
    description: "City",
    err: 'Solo números y letras'
  },
  {
    img: "./public/assets/img/apartment.svg",
    alt: "country",
    type: "text",
    description: "Country",
    err: 'Solo letras sin caracteres especiales'
  },
  {
    img: "./public/assets/img/mailbox.svg",
    alt: "postalCode",
    type: "number",
    description: "Postal code",
    err: 'Debe contener 5 dígitos'
  }
];

export default dataInput;