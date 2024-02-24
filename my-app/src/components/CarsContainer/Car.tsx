import React, {FC} from 'react';
import {ICar} from "../../interfaces/carInterface";

interface IProps {
    car:ICar
}
const Car:FC<IProps> = ({car}) => {
    const {id,brand,price,year} = car;
    return (
        <div>
            <div>id: {id}</div>
            <div>brand: {brand}</div>
            <div>price: {price}</div>
            <div>year: {year}</div>
            <button>updata</button>
            <button>delete</button>
        </div>
    );
};

export default Car;