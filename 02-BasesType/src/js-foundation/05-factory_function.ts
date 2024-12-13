interface BuildMakePersonOptions {
    getUUID: () => string;
    getAge: (birthdate :string) => number;
}

interface PersonOptions {
    name: string;
    birthdate: string;
}

// me permite pasar las dependencias por argumento
export const buildMakePerson = ({ getUUID ,getAge }:BuildMakePersonOptions) => {
    return  ({name , birthdate}: PersonOptions )=>{   
        return {
            id : getUUID(), 
            name:name,
            birthdate:birthdate,
            age: getAge(birthdate),  
        }
    }
} 

