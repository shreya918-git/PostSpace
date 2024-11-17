import {Client,ID,Account} from "appwrite"
import {confi} from "../confi/confi"
class Authenticate{
    client=new Client();
    account;
    constructor(client){
        this.client.setEndpoint(confi.appwriteurl).setProject(confi.appwriteprojectid);
        this.account=new Account(this.client);
    }
    // async createaccount({email,password,name}){
    //    try{ const accountcreate=await this.account.create(ID.unique(),
    //     email,password,name)
    //     if (accountcreate)
    //     {
    //        //login component here
    //        this.login({email,password})
    //     // return accountcreate;
    //     }
    // } catch(error){ throw error;}
    async createaccount({ email, password, name }) {
        try {
            // Create a new account
            const accountcreate = await this.account.create(ID.unique(), email, password, name);
            if (accountcreate) {
                console.log("Account created successfully:", accountcreate);
    
                // Automatically log in the user after account creation
                const session = await this.login({ email, password });
                console.log("User logged in successfully:", session);
    
                // Return both account and session details
                return { account: accountcreate, session };
            }
        } catch (error) {
            // Log the error for debugging
            console.error("Error during account creation or login:", error);
            throw error; // Rethrow the error to let the caller handle it
        }
    }
    
    // }
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