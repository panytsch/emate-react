

let typeInput = 'password repeat';
const props = {
    id: '7453',
    placeholder: '',
    name: '7645',
    value: '53',
    ariaDescribedby: ''
}

const temporary ={
    id: '',
    placeholder: '',
    name: '',
    value: '',
    ariaDescribedby: ''
  }
  switch (typeInput){
          case "email":
            temporary.id="email";
            temporary.placeholder="email";
            temporary.name="email";
            temporary.value="email";
            temporary.ariaDescribedby="email";
            break;
          case "password":
            
            temporary.id="password";
            temporary.placeholder="password";
            temporary.name="password";
            temporary.value="password";
            temporary.ariaDescribedby="password";
            break;
          case "password repeat":
             temporary.id="password repeat";
            temporary.placeholder="password repeat";
            temporary.name="password repeat";
            temporary.value="password repeat";
            temporary.ariaDescribedby="password repeat";
            break;
          default:
            console.log('');
        }
  for (let keyTemporary in temporary){
    for (let keyProps in props){
      if(keyTemporary == keyProps && props[keyProps]){
        temporary[keyTemporary] = props[keyProps];
      }
    }
  }
console.log(temporary);
