import {getAllCars} from "@/app/services/api.service";

const CarsPage = async () => {
    const cars = await getAllCars();

    return (
        <div>
            <h1>Cars</h1>

            {cars.map(car => (
                <div key={car.id}>

                    {car.brand}
                    {car.price} $
                    {car.year} year
                </div>
            ))}
        </div>
    );
};

export default CarsPage;