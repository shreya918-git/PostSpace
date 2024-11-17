import {Client,ID,Account} from "appwrite"
import {confi} from "../confi/confi"
class Authenticate{
    client=new Client();
    account;
    constructor(client){
        this.client.setEndpoint(confi.appwriteurl).setProject(confi.appwriteprojectid);
        this.account=new Account(this.client);
    }
    async createaccount({email,password,name}){
       try{ const accountcreate=await this.account.create(ID.unique(),
        email,password,name)
        if (accountcreate)
        {
           //login component here
        //    this.login({email,password})
        return accountcreate;
        }
    } catch(error){ throw error;}
    }
    async login({email,password}) {
        try{
          return await this.account.createEmailPasswordSession(email,password)
        }
        catch(error){
            throw error
        }
    }
    async getcurrentinfo(){
       try{ return await this.account.get()}
       catch(error){
        throw error
       }
    }
    async logout(){
        try{
            await this.account.deleteSessions('all')
        }
        catch(error){
            throw error
        }
    }
}
export const useauthenticate= new Authenticate();