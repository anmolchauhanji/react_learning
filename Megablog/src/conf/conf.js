
const conf ={
    appWriteUrl: String(import.meta.env.VITE_APPWRITE_URL),
    appWriteProjectid: String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
    appwritedatabaseid: String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
    appWriteCollectionid: String(import.meta.env.VITE_APPWRITE_COLLECTION_ID),
    appWritebucketid: String(import.meta.env.VITE_APPWRITE_BUCKET_ID)

}
export default conf