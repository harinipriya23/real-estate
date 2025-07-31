import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const PropertyLayout = ({ property }) => {
    const navigate = useNavigate();
    const handleViewDetails = (id) => navigate(`/property/${id}`);

    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerRow, setItemsPerRow] = useState(2);

    useEffect(() => {
        const updateItemsPerRow = () => {
            const width = window.innerWidth;
            if (width < 640) setItemsPerRow(2);      
            else if (width < 1024) setItemsPerRow(3); 
            else setItemsPerRow(4);                   
        };

        updateItemsPerRow();
        window.addEventListener("resize", updateItemsPerRow);
        return () => window.removeEventListener("resize", updateItemsPerRow);
    }, []);

    const propertiesPerPage = itemsPerRow * 2; // Show 2 rows per page
    const startIndex = (currentPage - 1) * propertiesPerPage;
    const paginatedProperties = property.slice(startIndex, startIndex + propertiesPerPage);
    const totalPages = Math.ceil(property.length / propertiesPerPage);

    useEffect(() => {
        if (totalPages > 0 && currentPage > totalPages) {
            setCurrentPage(1);
        }
    }, [totalPages]);

    return (
        <>
            {/* Responsive Grid */}
            <section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full p-4 lg:py-6 lg:px-4 bg-neutral-50 rounded-xl text-black dark:bg-neutral-900 dark:text-neutral-100">
                {paginatedProperties.map((item, i) => (
                    <div
                        key={item.id}
                        data-aos="zoom-in-up"
                        data-aos-delay={i * 100}
                        className="relative group overflow-hidden rounded-lg shadow-md bg-white dark:bg-neutral-800 transition-all duration-300"
                    >
                        <img
                            src={item.image}
                            alt={item.propertyName}
                            className="h-[180px] w-full object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                        <div className="p-3 font-inter">
                            <p className="font-semibold text-base h-12">{item.propertyName}</p>
                            <p className="text-sm text-gray-500 dark:text-gray-300 flex justify-between">
                                {item.bhk} <span>{item.areaSqFt} sqft</span>
                            </p>
                            <p className="text-sm text-gray-600 dark:text-gray-300">{item.location}</p>
                            <p className="text-sm font-medium">Rs. {item.price}</p>
                        </div>
                        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4">
                            <p className="text-white text-xs md:text-sm leading-relaxed text-center p-3 rounded-md shadow-md">
                                {item.description}
                            </p>
                            <button
                                onClick={() => handleViewDetails(item.id)}
                                className="mt-2 px-4 py-2 bg-blue-600 text-white text-xs font-semibold rounded-md shadow-md hover:bg-blue-700 transition duration-200"
                            >
                                View Details
                            </button>
                        </div>
                    </div>
                ))}
            </section>

            {/* Pagination */}
            <div className="flex justify-center gap-4 mt-4">
                {currentPage > 1 && (
                    <button
                        onClick={() => setCurrentPage(currentPage - 1)}
                        className="px-4 py-2 bg-gray-300 dark:bg-gray-700 text-black dark:text-white rounded-md hover:bg-gray-400 dark:hover:bg-gray-600"
                    >
                        Previous
                    </button>
                )}
                <p className="self-center text-sm font-medium">
                    {currentPage} of {totalPages}
                </p>
                {currentPage < totalPages && (
                    <button
                        onClick={() => setCurrentPage(currentPage + 1)}
                        className="px-4 py-2 bg-gray-300 dark:bg-gray-700 text-black dark:text-white rounded-md hover:bg-gray-400 dark:hover:bg-gray-600"
                    >
                        Next
                    </button>
                )}
            </div>
        </>
    );
};
