import DropzoneComponent from "@/components/Dropzone";
import { auth } from "@clerk/nextjs";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../firebase";
import { FileType } from "../../../typings";
import TableWrapper from "@/components/table/TableWrapper";

async function Dashboard() {
  const { userId } = auth()

  const docResults = await getDocs(collection(db, "users", userId!, "files"))
  
  const skeletonFiles: FileType[] =  docResults.docs.map((doc) => ({
    id: doc.id,
    filename: doc.data().filename || doc.id,
    timestamp: new Date(doc.data().timestamp?.seconds * 1000) || undefined,
    fullname: doc.data().fullname,
    downloadURL: doc.data().downloadURL,
    type: doc.data().type,
    size: doc.data().size
  }))   
  console.log(skeletonFiles)

  return (
    <div className="border-t">
      <DropzoneComponent />

      <section className="container space-y-5">
        <h2 className="font-bold">All files</h2>

        <div>
        <TableWrapper 
          skeletonFiles={skeletonFiles}
        />
        </div>

      </section>

    </div>
  )
}

export default Dashboard