import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const IndexPage = () => {
  const [places, setPlaces] = useState([]);

  useEffect(() => {
    axios.get("/places").then((response) => {
      setPlaces(response.data);
    });
  }, []);

  return (
    <>
    <hr className="mt-4"/>
    <div className="flex justify-center items-center space-x-6 pt-2 pb-2 overflow-hidden">
      <div className="items flex-row justify-center items-center   p-2">
        <img src="https://a0.muscache.com/pictures/aaa02c2d-9f0d-4c41-878a-68c12ec6c6bd.jpg" className=' h-8 m-auto hover:opacity-100 opacity-80 cursor-pointer' alt="Farms" />
        <p className="text-xs mt-1">Farms</p>
      </div>
      <div className="items flex-row justify-center items-center   p-2">
        <img src="https://a0.muscache.com/pictures/7630c83f-96a8-4232-9a10-0398661e2e6f.jpg" className=' h-8 m-auto hover:opacity-100 opacity-95 cursor-pointer' alt="Rooms" />
        <p className="text-xs mt-1">Rooms</p>
      </div>
      <div className="items flex-row justify-center items-center   p-2">
        <img src="https://a0.muscache.com/pictures/3b1eb541-46d9-4bef-abc4-c37d77e3c21b.jpg" className=' h-8 m-auto hover:opacity-100 opacity-80 cursor-pointer' alt="Amazing Views" />
        <p className="text-xs mt-1">Amazing Views</p>
      </div>
      <div className="items flex-row justify-center items-center   p-2">
        <img src="https://a0.muscache.com/pictures/a4634ca6-1407-4864-ab97-6e141967d782.jpg" className=' h-8 m-auto hover:opacity-100 opacity-80 cursor-pointer' alt="Lake" />
        <p className="text-xs mt-1">Lake</p>
      </div>
      <div className="items flex-row justify-center items-center   p-2">
        <img src="https://a0.muscache.com/pictures/ee9e2a40-ffac-4db9-9080-b351efc3cfc4.jpg" className=' h-8 m-auto hover:opacity-100 opacity-80 cursor-pointer' alt="Tropical" />
        <p className="text-xs mt-1">Tropical</p>
      </div>
      <div className="items flex-row justify-center items-center   p-2">
        <img src="https://a0.muscache.com/pictures/6ad4bd95-f086-437d-97e3-14d12155ddfe.jpg" className=' h-8 m-auto hover:opacity-100 opacity-80 cursor-pointer' alt="Country Side" />
        <p className="text-xs mt-1">Country Side</p>
      </div>
      <div className="items flex-row justify-center items-center   p-2">
        <img src="https://a0.muscache.com/pictures/3fb523a0-b622-4368-8142-b5e03df7549b.jpg" className=' h-8 m-auto hover:opacity-100 opacity-80 cursor-pointer' alt="Amazing pools" />
        <p className="text-xs mt-1">Amazing pools</p>
      </div>
      <div className="items flex-row justify-center items-center   p-2">
        <img src="https://a0.muscache.com/pictures/c5a4f6fc-c92c-4ae8-87dd-57f1ff1b89a6.jpg" className=' h-8 m-auto hover:opacity-100 opacity-80 cursor-pointer' alt="OMG" />
        <p className="text-xs mt-1">OMG</p>
      </div>
      <div className="items flex-row justify-center items-center   p-2">
        <img src="https://a0.muscache.com/pictures/732edad8-3ae0-49a8-a451-29a8010dcc0c.jpg" className=' h-8 m-auto hover:opacity-100 opacity-80 cursor-pointer' alt="Cabins" />
        <p className="text-xs mt-1">Cabins</p>
      </div>
      <div className="items flex-row justify-center items-center   p-2">
        <img src="https://a0.muscache.com/pictures/5ed8f7c7-2e1f-43a8-9a39-4edfc81a3325.jpg" className=' h-8 m-auto hover:opacity-100 opacity-80 cursor-pointer' alt="Breakfast" />
        <p className="text-xs mt-1">Bed & Breakfast</p>
      </div>
      <div className="items flex-row justify-center items-center   p-2">
        <img src="https://a0.muscache.com/pictures/8a43b8c6-7eb4-421c-b3a9-1bd9fcb26622.jpg" className=' h-8 m-auto hover:opacity-100 opacity-80 cursor-pointer' alt="Creative" />
        <p className="text-xs mt-1">Creative Spaces</p>
      </div>
      <div className="items flex-row justify-center items-center   p-2">
        <img src="https://a0.muscache.com/pictures/bcd1adc0-5cee-4d7a-85ec-f6730b0f8d0c.jpg" className=' h-8 m-auto hover:opacity-100 opacity-80 cursor-pointer' alt="Beach" />
        <p className="text-xs mt-1">Beach Front</p>
      </div>
      <div className="items flex-row justify-center items-center   p-2">
        <img src="https://a0.muscache.com/pictures/33dd714a-7b4a-4654-aaf0-f58ea887a688.jpg" className=' h-8 m-auto hover:opacity-100 opacity-80 cursor-pointer' alt="Castles" />
        <p className="text-xs mt-1">Castles</p>
      </div>
      <div className="items flex-row justify-center items-center   p-2">
        <img src="https://a0.muscache.com/pictures/677a041d-7264-4c45-bb72-52bff21eb6e8.jpg" className=' h-8 m-auto hover:opacity-100 opacity-80 cursor-pointer' alt="Lake Front" />
        <p className="text-xs mt-1">Lake Front</p>
      </div>
      <div className="items flex-row justify-center items-center   p-2">
        <img src="https://a0.muscache.com/pictures/1b6a8b70-a3b6-48b5-88e1-2243d9172c06.jpg" className=' h-8 m-auto hover:opacity-100 opacity-80 cursor-pointer' alt="Historical" />
        <p className="text-xs mt-1">Historical Homes</p>
      </div>
    </div>
    <hr className="shadow-md shadow-gray-900"/>
    <div className="mt-8 gap-x-6 gap-y-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {places.length > 0 &&
        places.map((place, index) => (
          <Link to={"/place/" + place._id} key={index}>
            <div className="bg-gray-500 rounded-2xl flex mb-2">
              {place.photos?.[0] && (
                <img
                  className="rounded-2xl object-cover aspect-square "
                  src={"http://localhost:4000/uploads/" + place.photos?.[0]}
                  alt="photo"
                />
              )}
            </div>
            <h2 className="text-sm truncate text-gray-500">{place.title}</h2>
            <h3 className="font-bold">{place.address}</h3>
            <div className="mt-1">
              <span className="font-bold">€{place.price}</span> per night
            </div>
          </Link>
        ))}
    </div>
    </>
  );
};

export default IndexPage;
