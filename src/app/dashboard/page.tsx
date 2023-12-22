import DropzoneComponent from "@/components/Dropzone";
import { auth } from "@clerk/nextjs";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../firebase";
import { FileType } from "../../../typings";

async function Dashboard() {
  const { userId } = auth()

  // const docResults = await getDocs(collection(db, "users", userId!, "files"))
  
  // const skeletonFiles: FileType[] =  docResults.docs.map((doc) => ({
  //   id: doc.id,
  //   filename: doc.data().filename || doc.id,
  //   timestamp: new Date(doc.data().timestamp?.seconds * 1000) || undefined,
  //   fullname: doc.data().fullname,
  //   downloadURL: doc.data().downloadURL,
  //   type: doc.data().type,
  //   size: doc.data().size
  // }))   

  return (
    <div>
      <DropzoneComponent />
    </div>
  )
}

export default Dashboard