import { useParams } from 'react-router';
import { usePropertyContext } from '../context/PropertyContext';

export const SpecificPropertyType = () => {

    const { type } = useParams();
    const { properties } = usePropertyContext();

    const specificPropertyType = properties.filter((item) => {
        return item.type === type;
    })


    return (
        <section></section>
    )
}
