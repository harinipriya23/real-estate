import { useNavigate } from "react-router-dom";
import { usePropertyContext } from '../context/PropertyContext';
import { useState } from "react";

export const PropertyLayout = () => {

    const { filteredProperties } = usePropertyContext();

    const navigate = useNavigate();
    const handleViewDetails = (id) => navigate(`/property/${id}`);
    const propertyPerPage = 4;
    const totalPages = Math.ceil(filteredProperties.length / propertyPerPage);
    const [currentPage, setCurrentPage] = useState(1);
    const startIndex = (currentPage - 1) * propertyPerPage;
    const endIndex = startIndex + propertyPerPage;
    const paginatedProperties = filteredProperties.slice(startIndex, endIndex);


    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage((prev) => prev + 1);
        }
    };

    const handlePreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage((prev) => prev - 1);
        }
    };

    return (
        <section className="grid grid-cols-2 gap-4 w-full p-4 lg:py-6 lg:px-4 bg-neutral-50 rounded-xl text-black dark:bg-neutral-900 dark:text-neutral-100">
            {paginatedProperties.map((item) => (
                <div key={item.id} className="relative group overflow-hidden rounded-lg shadow-md bg-white dark:bg-neutral-800 transition-all duration-300">
                    <img
                        src={item.image}
                        alt={item.propertyName}
                        className="h-[180px] w-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="p-3 font-inter">
                        <p className="font-semibold text-base h-12">{item.propertyName}</p>
                        <p className="text-sm text-gray-500 dark:text-gray-300 flex justify-between">{item.bhk} <span>{item.areaSqFt} sqft</span></p>
                        <p className="text-sm text-gray-600 dark:text-gray-300">{item.location}</p>
                        <p className="text-sm font-medium">Rs. {item.price}</p>
                    </div>

                    <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4">
                        <p className="text-white text-xs md:text-sm leading-relaxed text-center p-3 rounded-md shadow-md">
                            {item.description}
                        </p>
                        <button onClick={() => handleViewDetails(item.id)} className="mt-2 px-4 py-2 bg-blue-600 text-white text-xs font-semibold rounded-md shadow-md hover:bg-blue-700 transition duration-200">
                            View Details
                        </button>
                    </div>
                </div>
            ))}
            <div className="col-span-2 flex justify-between px-4 gap-4 w-full ">
                <button onClick={handlePreviousPage} disabled={currentPage === 1}>Previous</button>
                <p>Page {currentPage} of {totalPages}</p>
                <button onClick={handleNextPage} disabled={currentPage === totalPages}>Next</button>
            </div>
        </section>

    )
}
