import {getAllCars} from "@/app/services/api.service";

const CarsPage = async () => {
    const cars = await getAllCars();

    return (
        <div>
            <h1>Cars</h1>

            {cars.map(car => (
                <div key={car.id}>
                    ID: {car.id}
                    <h3>{car.brand}</h3>
                    {car.price} $
                </div>
            ))}
        </div>
    );
};

export default CarsPage;