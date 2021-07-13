import * as SQLite from 'expo-sqlite';
import{ BaseModel, types } from 'expo-sqlite-orm';
import DatabaseLayer from 'expo-sqlite-orm/src/DatabaseLayer'
import { ActivityIndicatorComponent, Alert } from 'react-native';


export const funcao=()=>{

const databaseLayer = new DatabaseLayer(async () => SQLite.openDatabase('database.db'), 'usuarios')
const itens = [{id:0, login:'admin', password:'zero'}]
databaseLayer.bulkInsertOrReplace(itens).then(response => {
  console.log(response)
  
})
}
export const criaTabela=()=>{
    Usuario.createTable(); 
}

export default class Usuario extends BaseModel{

    constructor(obj){
        super(obj)
    }

    static get database(){
        return async() => SQLite.openDatabase('database.db')
    }


    static get tableName() {
        return 'usuarios'
    }

    static get columnMapping() {
        return{
            id:{ type: types.INTEGER, primary_key:true},
            login:{type: types.TEXT, not_null:true},
            password:{type: types.TEXT,not_null:true}
        }
    }
}