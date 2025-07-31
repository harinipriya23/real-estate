import { useParams } from "react-router-dom";
import { MdArrowBackIosNew } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { CallButton } from "../reusableComponents/CallButton";
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
        <section className="h-full w-full p-4 bg-neutral-200 text-black dark:bg-neutral-900 dark:text-neutral-100">
            <div className="grid grid-cols-1 md:grid-cols-10 w-full bg-white dark:bg-neutral-800 rounded-2xl shadow-lg p-6 md:p-10 font-inter">
                <div className="relative col-span-4">
                    <MdArrowBackIosNew onClick={() => navigate(-1)} className="absolute top-4 left-4 text-2xl text-neutral-900 bg-white p-1 rounded-md cursor-pointer" />
                    <img
                        src={property.image}
                        alt={property.propertyName}
                        className="h-[250px] md:h-full w-full object-cover rounded-xl"
                    />
                    <div className="absolute bottom-6 right-6 p-1 px-4 md:px-6 md:p-2 md:text-base text-sm bg-white text-black dark:bg-black dark:text-white rounded-md">
                        {property.status === "Buy" ? "For Sale" : "For Rent"}
                    </div>
                </div>
                <div className="col-span-6 md:pl-10">
                  <div className="flex justify-between my-2">  <h2 className="text-xl md:text-2xl lg:text-3xl mt-2 font-bold text-center">
                        {property.propertyName}
                    </h2><CallButton /></div>
                    <p className="font-normal md:text-base text-justify text-sm my-2">{property.description}</p>
                   <div className="space-y-4"> <div className="my-4">
                        <div className="font-semibold font-poppins space-y-2 w-full text-lg md:text-xl mb-2">
                            <span>Property Details</span>
                            <div className="h-[1px] bg-black dark:bg-neutral-300" />
                        </div>
                        <div className="flex flex-wrap p-2 md:px-4 gap-2 font-semibold text-base md:text-lg ">
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
                    <div className="my-4">
                        <div className="w-full font-semibold font-poppins text-lg md:text-xl space-y-2 mb-2">
                            <span>Contact Details</span>
                            <div className="h-[1px] bg-black dark:bg-neutral-300" />
                        </div>
                            <div className="flex justify-around md:justify-between p-2 md:px-4  gap-2 font-semibold text-base md:text-lg ">
                            <div>Name: <span className="font-normal">{property.owner.name}</span></div>
                            <div>Phone: <span className="font-normal">+91 {property.owner.contact}</span></div>
                        </div>
                    </div>
                    <div className="my-4">
                        <div className="w-full font-semibold font-poppins text-lg md:text-xl space-y-2 mb-2">
                            <span>Surroundings</span>
                            <div className="h-[1px] bg-black dark:bg-neutral-300" />
                        </div>
                            <div className="flex flex-col p-2 md:px-4 font-semibold text-base md:text-lg ">
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
                    </div></div>
                </div></div>
        </section>
    );
};
