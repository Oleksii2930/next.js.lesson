import Link from "next/link";
import CreateCarPage from "@/app/(public)/cars/create/page";

export default function Home() {
  return (
      <div>
        <h1>Cars App</h1>
          <CreateCarPage/>
        <Link href="/cars">
          Go to cars
        </Link>
      </div>
  );
}
