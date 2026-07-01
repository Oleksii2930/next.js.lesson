import {createUser} from "@/app/actions/user";

export default function Home() {
  return (
 <>
     <form action={createUser}>
         <input type="text" name="name" placeholder="Name"/>
         <input type="text" name="email" placeholder="Email"/>
         <button type="submit">submit</button>
     </form>
 </>
  );
}
