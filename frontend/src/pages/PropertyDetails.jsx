import { useParams } from "react-router-dom";
import { usePropertyContext } from "../context/PropertyContext";

export const PropertyDetails = () => {
    const { id } = useParams();
    const { properties } = usePropertyContext();

    const property = properties.find((prop) => prop.id === Number(id));

    return (
        <section className="h-full w-full p-4 bg-gradient-to-br from-neutral-200 to-white "><p>
            {property ? <div className="w-full bg-white rounded-2xl shadow-lg p-6 md:p-10 font-inter">
                <div className="relative">
                    <img
                        src={property.image}
                        alt={property.propertyName}
                        className="h-[250px] w-full object-cover rounded-xl"
                    /> <p className="absolute bottom-6 right-6 p-1 px-4 text-sm bg-white rounded-md"> {property.status === "Buy" ? "For Sale" : "For Rent"}</p></div>
                <p className="text-xl md:text-2xl font-bold text-neutral-800 text-center">
                    {property.propertyName}
                </p>
                <p className="font-normal text-justify text-sm my-2">{property.description}</p>
                <div>
                    <div className="font-semibold font-poppins text-lg flex items-center whitespace-nowrap gap-4 my-2"><p>Property Details</p>
                        <div className="h-[2px] w-full bg-black"></div>
                    </div>
                    <div className="flex flex-wrap gap-2 font-semibold text-neutral-800 text-base">
                        <p>Property Name: <span className="font-normal">{property.propertyName}</span></p>
                        <p>Property Type: <span className="font-normal">{property.type}</span></p>
                        <p className="flex gap-2">
                            Address: <p className="font-normal">{property.address},{property.street} {property.location}</p>
                        </p>
                        <div className="grid grid-cols-2 place-items-start w-full"> <p>BHK: <span className="font-normal">{property.bhk}</span></p>
                            <p>Price: <span className="font-normal">₹ {property.price.toLocaleString()}</span></p>
                        </div>
                        <div className="grid grid-cols-2 place-items-start w-full"> <p>Area: <span className="font-normal">{property.areaSqFt} sqft</span></p>
                            <p>Facing: <span className="font-normal">{property.facing}</span></p>
                        </div>
                    </div>
                    <div className="font-semibold font-poppins text-lg flex items-center whitespace-nowrap gap-4 my-2"><p>Contact Details</p>
                        <div className="h-[2px] w-full bg-black"></div>
                    </div>
                    <div className="flex flex-wrap gap-2 font-semibold text-neutral-800 text-base">
                        <p>Name: <span className="font-normal">{property.owner.name}</span></p>
                        <p>Phone: <span className="font-normal">+91 {property.owner.contact}</span></p>
                    </div> <div className="font-semibold font-poppins text-lg flex items-center whitespace-nowrap gap-4 my-2"><p>Surroundings</p>
                        <div className="h-[2px] w-full bg-black"></div>
                    </div>
                    <div className="flex flex-wrap gap-2 font-semibold text-neutral-800 text-base">
                        <p className="font-semibold">Landmarks:
                            <p className="font-normal flex flex-wrap gap-2">
                                {property.nearbyLandmarks.map((landmark, index) => (
                                    <p key={index}>
                                        {landmark}{index < property.nearbyLandmarks.length - 1 ? ', ' : ''}
                                    </p>
                                ))}
                            </p>
                        </p>
                        <p className="font-semibold">Amenities:
                            <p className="font-normal flex flex-wrap gap-2">
                                {property.amenities.map((amenity, index) => (
                                    <p key={index}>
                                        {amenity}{index < property.amenities.length - 1 ? ', ' : ''}
                                    </p>
                                ))}
                            </p>
                        </p>
                    </div> </div></div> : <div>
                <p className="font-bold text-lg">Property not found</p>
            </div>}</p></section>
    )
}
