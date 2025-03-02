import conf from "../conf/conf";
import { Client , Account,ID } from "appwrite";

export class AuthService{
    client = new Client();
    account;
    constructor(){
        this.client
        .setEndpoint(conf.appWriteUrl)
        .setProject(conf.appWriteProjectid);
    }
    async createAccount({email, password,name }){
       try {
      const userAccount  =  await this.account.create(
        ID.unique(),
        email,
        password,
        name
      )
      if (userAccount) {
        return this.login({email, password}) 
      }else{
        return
      }
       } catch (error) {
        throw new Error(error)
       }
    }
    async login ({email, password}){
        try {
         return   await this.account.createSession(email, password)
        } catch (error) {
            throw new Error(error)
        }
    }
    async getCurrentuser(){
        try {
            return  await this.account.get()
          } catch (error) {
              throw new Error(error)
          }
    }
    async logout(){
        try{
            this.account.deleteSessions()
        }catch(error){
            throw new Error(error)
        }
    }
   
} 

const authservice = new AuthService();
export default  authservice  