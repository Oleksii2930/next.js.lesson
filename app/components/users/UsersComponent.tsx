import {getAllCars} from "@/app/services/api.service";
import Link from "next/link"
const UsersComponent = async () => {
  const users =  await getAllCars()

    return (
        <div>
            {
                users.map((user) => <div key={user.id}>
                <Link href={{pathname:'/cars/'+ user.id.toString(),query:{data:JSON.stringify(user)} }}>{user.id} {user.brand}</Link>
                </div>
            )}
            </div>

    );
};

export default UsersComponent;