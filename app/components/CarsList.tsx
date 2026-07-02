import { getAllCars } from "@/app/services/api.service";
import Link from "next/link";

const CarsList = async () => {
    const cars = await getAllCars();

    return (
        <div>
            {cars.map((car) => (
                <div key={car.id}>
                    <Link href={`/cars/${car.id}`}>
                        {car.id} {car.brand}
                    </Link>
                </div>
            ))}
        </div>
    );
};

export default CarsList;