// import Link from "next/link";
import CreateCarPage from "@/app/(public)/cars/create/page";
import CarsPage from "@/app/(public)/cars/page";

export default function Home() {
  return (
      <div>
        <h1>Cars App</h1>
          <CreateCarPage/>
          <hr/>
        {/*<Link href="/cars">*/}
        {/*  Go to cars*/}
        {/*</Link>*/}
          <CarsPage/>
      </div>
  );
}
