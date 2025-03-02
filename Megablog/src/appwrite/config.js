import conf from "../conf/conf";
import { Client,ID,Databases , Storage,Query} from "appwrite";
export class Service{
    client = new Client();
    Databases;
    Storage;
    constructor(){
        this.client
        .setEndpoint(conf.appWriteUrl)
        .setProject(conf.appWriteProjectid);
        this.Databases = new Databases(this.client);
        this.Storage = new Storage(this.client);
    }
 async createpost(slug,{title ,content ,featuredimage,status,userid}){
try{
    return await this.Databases.createDocument(
        conf.appwritedatabaseid,
        conf.appWriteCollectionid,
        slug,
        {
            title,
            content,
            featuredimage,
            status,
            userid
        }
    )
}catch(e){
    console.log(e);
}

 }
 async updatepost(slug,{title ,content ,featuredimage,status,userid }){
    try {
        return await this.Databases.updateDocument(
            conf.appwritedatabaseid,
            conf.appWriteCollectionid,
            slug,
            {
                title,
                content,
                featuredimage,
                status,
                userid
            }
        )
    } catch (error) {
        console.log(error)
    }
 }
 async deletepost(slug){
    try {
        return await this.Databases.deleteDocument(
            conf.appwritedatabaseid,
            conf.appWriteCollectionid,
            slug,
         
        )
        return true
    } catch (error) {
        console.log(error)
        return false
    }
 }
 async getPost(slug){
   
        try {
            return await this.Databases.getDocument(
                conf.appwritedatabaseid,
                conf.appWriteCollectionid,
                slug,
            )
        } catch (error) {
            console.log(error);
            return false
        }
 }
 async getPosts(querie=[Query.equal("status","active")]){
    try {
        return await this.Databases.listDocuments(
            conf.appwritedatabaseid,
            conf.appWriteCollectionid,
            querie,
            10,
            0,

        )
    } catch (error) {
        console.log(error)
    }
 }
 async uploadfile (file){
    try {
        return await this.Storage.createFile(
            conf.appWritebucketid,
            ID.unique(),
            file,
        ) 
    } catch (error) {
        console.log(error)
        
    }
 }
 async deletefile(fileid){
    try {
        return await this.Storage.deleteFile(
            conf.appWritebucketid,
            fileid,
        )
    } catch (error) {
        console.log(error)
    }
 }
 getfilepreview (fileid){
    return this.Storage.getFilePreview(
        conf.appWritebucketid,
        fileid
    )
 }
};
const service = new Service();
export default service;