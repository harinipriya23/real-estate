import { useNavigate, useParams } from 'react-router';
import { usePropertyContext } from '../context/PropertyContext';
import { propertyData } from '../layoutData/PropertyData';
import { PropertyLayout } from '../reusableComponents/PropertyLayout';
import { MdArrowBackIosNew } from 'react-icons/md';

export const SpecificPropertyType = () => {

    const { type } = useParams();
    const { properties } = usePropertyContext();
    const navigate = useNavigate();

    const propertyHeader = propertyData.find((item) => item.type === type);

    const specificPropertyType = properties.filter((item) => {
        return item.type === type;
    })

    return (
        <section className='h-full w-full p-4 bg-white dark:bg-black space-y-4'>
            {propertyHeader && (
                <div className="relative w-full h-[300px] overflow-hidden rounded-xl shadow-lg">
                    <MdArrowBackIosNew onClick={() => navigate(-1)} className="absolute top-4 left-4 text-2xl text-neutral-800 bg-white p-1 z-50 rounded-md cursor-pointer" />
                    <img
                        src={propertyHeader.img}
                        alt={propertyHeader.type}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 text-white bg-black/40">
                        <h1 className="text-3xl font-bold font-poppins">{propertyHeader.type}</h1>
                        <p className='text-sm font-inter font-medium w-3/4 text-center'>{propertyHeader.description}</p>
                    </div>
                </div>
            )}
            <PropertyLayout property={specificPropertyType} />
        </section>
    )
}
