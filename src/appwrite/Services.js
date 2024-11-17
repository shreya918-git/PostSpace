import {confi} from "../confi/confi"
import {Client,ID,Databases,Storage,Query} from 'appwrite'
class Services{
    client=new Client();
    databases;
    storage;
    constructor(client){
        this.client.setEndpoint(confi.appwriteurl).setProject(confi.appwriteprojectid);

        this.databases=new Databases(this.client);
        this.storage=new Storage(this.client);
    }
     

async createdocument({ title, content, slug, featuredImage, status, userid }) {
try {
    const newPost = await this.databases.createDocument(
        confi.appwritedatabaseid,
        confi.appwritecollectionid,
        slug,  // slug as document ID
        {
            title,
            content,
            featuredImage,
            status,
            userid,
        }
    );
    console.log('New post created:', newPost);
    return newPost;
} catch (error) {
    console.error('Error creating document:', error.message);
    throw error;  // Re-throw the error for further handling
}
}

    async updatedata(slug,{title,content,featuredImage,status}){
        try{return await this.databases.updateDocument(confi.appwritedatabaseid,
        confi.appwritecollectionid,
        slug,
        {
            title,
            content,
            featuredImage,
            status
        })}
        catch(error){
            throw error
        }
    }
 async deletedata(slug){
    try{
        await this.databases.deleteDocument(confi.appwritedatabaseid,confi.appwritecollectionid,slug)
    }
    catch(error){
        throw error
    }
 }
 async selectdocument(slug){
    try{
        return await this.databases.getDocument(confi.appwritedatabaseid,confi.appwritecollectionid,slug)
    }
    catch(error){
        throw error
    }
 }
 async allposts(queries=[Query.equal("status",["active"])]){
    try{
        return await this.databases.listDocuments(confi.appwritedatabaseid,confi.appwritecollectionid,queries)
    }
    catch(error){
        throw error
    }
 }
 async storage2(file){
    try{
        return await this.storage.createFile(confi.appwritebucketid,ID.unique(),file)
    }
    catch(error){
        throw error
    }
 }
 async deletefile(fileid){
    try{
        await this.storage.deleteFile(confi.appwritebucketid,fileid)
    }
    catch(error){
        throw error
    }
 }
  getfilepreview(fileid){
        return  this.storage.getFilePreview(confi.appwritebucketid,fileid)
    
 }
}
export const useservice=new Services();