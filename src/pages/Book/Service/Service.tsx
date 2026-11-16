import './Service.css'

import { useBooking } from "@/context/BookingContext";

import Checkbox from "@/components/Checkbox/Checkbox";
import FoldedShirtSVG from "@/components/SVG/FoldedShirtSVG";
import IronSVG from "@/components/SVG/IronSVG";
import LaundryBasketSVG from "@/components/SVG/LaundryBasketSVG";

import { useState } from "react";
import { useNavigate } from 'react-router-dom';

type IconProps = {
  className?: string;
};

type serviceOptionProps = {
    active: boolean;
    title: string;
    comment: string;
    pricePerKG: string;
    sideIcon: React.ComponentType<IconProps>;
    onClick: () => void;
}

function ServiceOption({active, title, comment, pricePerKG, sideIcon: SideIcon, onClick}: serviceOptionProps){
    return (
        <div 
            className={`service-service-option standard-box ${active ? 'active' : ''}`}
            onClick={onClick}
        >
            <SideIcon className='test'/>
            <div className='service-service-content'>
                <p className='service-service-title'>{title}</p>
                <p className='service-service-comment'>{comment}</p>
                <p className='service-service-lower-content'>
                    From <span className='service-service-price'>{pricePerKG}</span>/kg
                </p>
            </div>

            <div className='service-service-checkbox-container'>
                <Checkbox checked={active}/>
            </div>
        </div>
    )
}


type weightOptionProps = {
    active: boolean;
    title: string;
    info: string;
    price: string;
    onClick: () => void;
}

function WeightOption({active, title, info, price, onClick}: weightOptionProps){
    return (
        <div 
            className={`service-weight-option standard-box ${active ? 'active' : ''}`}
            onClick={onClick}
        >
            <p className='service-weight-option-title'>{title}</p>
            <p className='service-weight-option-info'>{info}</p>
            <p className='service-weight-option-price'>{price}</p>
        </div>
    )
}


function Service(){
    // Index of service
    const [selectedService, setSelectedService] = useState(0);
    // Index of service weight
    // const [selectedWeight, setSelectedWeight] = useState(0);
    const { bookingData, updateWeight } = useBooking();

    const navigate = useNavigate();

    const handleContinueClick = () => {
        navigate('../timeslot')
    }

    return (<>
        <div className="service-service-selection-container">
            <h2>Choose a service</h2>

            <div className="service-service-options">
                <ServiceOption 
                    active={selectedService == 0}
                    onClick={() => setSelectedService(0)}
                    title='Wash, dry & fold'
                    comment='Our most popular service'
                    pricePerKG='£2.00'
                    sideIcon={LaundryBasketSVG}
                />

                <ServiceOption 
                    active={selectedService == 1}
                    onClick={() => setSelectedService(1)}
                    title='Wash, dry & iron'
                    comment='Cleaned and neatly ironed'
                    pricePerKG='£3.00'
                    sideIcon={FoldedShirtSVG}
                />

                <ServiceOption 
                    active={selectedService == 2}
                    onClick={() => setSelectedService(2)}
                    title='Iron only'
                    comment="We'll iron your clothes"
                    pricePerKG='£2.00'
                    sideIcon={IronSVG}
                />
            </div>
        </div>

        <div className="service-weight-selection-container">
            <h2>Laundry weight</h2>
            <p>Please select the weight of your laundry</p>
            <div className="service-weight-options">

                <WeightOption 
                    active={bookingData.weight == 6}
                    onClick={() => {updateWeight(6)}}
                    title='Small bag'
                    info='Up to 6kg'
                    price='£10.00'
                />

                <WeightOption 
                    active={bookingData.weight == 10}
                    onClick={() => {updateWeight(10)}}
                    title='Standard bag'
                    info='Up to 10kg'
                    price='£15.00'
                />

                <WeightOption 
                    active={bookingData.weight == 15}
                    onClick={() => {updateWeight(15)}}
                    title='Large bag'
                    info='Up to 15kg'
                    price='£22.00'
                />
            </div>
        </div>

        <button
            className="standard-button service-continue-button"
            onClick={handleContinueClick}
        >
            Continue
        </button>
    </>)
}

export default Service;