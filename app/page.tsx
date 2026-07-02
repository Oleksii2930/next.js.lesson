import Link from "next/link";

export default function Home() {
  return (
      <div>
        <h1>Cars App</h1>

        <Link href="/cars">
          Go to cars
        </Link>
      </div>
  );
}
