import { useParams } from "react-router-dom";
import { MdArrowBackIosNew } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { usePropertyContext } from "../context/PropertyContext";

export const PropertyDetails = () => {
    const { id } = useParams();
    const { properties } = usePropertyContext();
    const navigate = useNavigate();

    const property = properties.find((prop) => prop.id === Number(id));

    if (!property) {
        return (
            <section className="h-svh w-full p-4 bg-gradient-to-br from-neutral-200 to-white">
                <div className="font-bold text-lg text-center">Property not found</div>
            </section>
        );
    }

    return (
        <section className="h-full w-full p-4 bg-gradient-to-br from-neutral-200 to-white">
            <div className="w-full bg-white rounded-2xl shadow-lg p-6 md:p-10 font-inter">
                <div className="relative">
                    <MdArrowBackIosNew onClick={() => navigate(-1)} className="absolute top-4 left-4 text-2xl text-neutral-800 bg-white p-1 rounded-md cursor-pointer" />
                    <img
                        src={property.image}
                        alt={property.propertyName}
                        className="h-[250px] w-full object-cover rounded-xl"
                    />
                    <div className="absolute bottom-6 right-6 p-1 px-4 text-sm bg-white rounded-md">
                        {property.status === "Buy" ? "For Sale" : "For Rent"}
                    </div>
                </div>

                <h2 className="text-xl md:text-2xl mt-2 font-bold text-neutral-800 text-center">
                    {property.propertyName}
                </h2>

                <p className="font-normal text-justify text-sm my-2">{property.description}</p>

                {/* Property Details Section */}
                <div className="my-4">
                    <div className="font-semibold font-poppins text-lg flex items-center gap-4 mb-2">
                        <span>Property Details</span>
                        <div className="h-[2px] w-full bg-black" />
                    </div>

                    <div className="flex flex-wrap gap-2 font-semibold text-neutral-800 text-base">
                        <div>Property Name: <span className="font-normal">{property.propertyName}</span></div>
                        <div>Property Type: <span className="font-normal">{property.type}</span></div>
                        <div>Address: <span className="font-normal">{property.address}, {property.street} {property.location}</span></div>

                        <div className="grid grid-cols-2 w-full">
                            <div>BHK: <span className="font-normal">{property.bhk}</span></div>
                            <div>Price: <span className="font-normal">₹ {property.price.toLocaleString()}</span></div>
                        </div>

                        <div className="grid grid-cols-2 w-full">
                            <div>Area: <span className="font-normal">{property.areaSqFt} sqft</span></div>
                            <div>Facing: <span className="font-normal">{property.facing}</span></div>
                        </div>
                    </div>
                </div>

                {/* Contact Details Section */}
                <div className="my-4">
                    <div className="font-semibold font-poppins text-lg flex items-center gap-4 mb-2">
                        <span>Contact Details</span>
                        <div className="h-[2px] w-full bg-black" />
                    </div>
                    <div className="flex flex-wrap gap-2 font-semibold text-neutral-800 text-base">
                        <div>Name: <span className="font-normal">{property.owner.name}</span></div>
                        <div>Phone: <span className="font-normal">+91 {property.owner.contact}</span></div>
                    </div>
                </div>

                {/* Surroundings Section */}
                <div className="my-4">
                    <div className="font-semibold font-poppins text-lg flex items-center gap-4 mb-2">
                        <span>Surroundings</span>
                        <div className="h-[2px] w-full bg-black" />
                    </div>

                    <div className="flex flex-col font-semibold text-neutral-800 text-base">
                        <div>
                            Landmarks:
                            <span className="font-normal ml-1">
                                {property.nearbyLandmarks.join(", ")}
                            </span>
                        </div>
                        <div>
                            Amenities:
                            <span className="font-normal ml-1">
                                {property.amenities.join(", ")}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
