import Checkbox from '@/components/Checkbox/Checkbox';
import './Timeslot.css'
import { ChevronRight, PlusCircle } from 'lucide-react';
import Datepicker from '@/components/Datepicker/Datepicker';
import { useNavigate } from 'react-router-dom';

type CollectionTimeBoxProps = {
    active: boolean;
    startTime: string;
    endTime: string;
    onClick: () => void;
}

function CollectionTimeBox({active, startTime, endTime, onClick}: CollectionTimeBoxProps){
    return (
        <div 
            className={`timeslot-collection-time standard-box ${active ? 'active' : ''}`}
            onClick={onClick}
        >
            <p>{startTime} - {endTime}</p>
        </div>
    )
}

function Timeslot(){
    const navigate = useNavigate();

    const handleContinueClick = () => {
        navigate('../confirm')
    }

    return (<>
        <div className='timeslot-collection-date-container'>
            <h2 className='booklayout-subtitle'>Collection Date</h2>
            <p className='booklayout-comment timeslot-collection-date-comment'>What date should we collect your laundry?</p>

            <Datepicker></Datepicker>
        </div>

        <div className='timeslot-collection-window-container'>
            <h2 className='booklayout-subtitle'>Collection window</h2>
            <p className='booklayout-comment'>Let us know what time we can collect</p>

            <div className='timeslot-collection-time-picker'>
                <CollectionTimeBox
                    active={false}
                    startTime='08:00'
                    endTime='10:00'
                    onClick={() => {}}
                />

                <CollectionTimeBox
                    active={false}
                    startTime='10:00'
                    endTime='12:00'
                    onClick={() => {}}
                />

                <CollectionTimeBox
                    active={false}
                    startTime='12:00'
                    endTime='14:00'
                    onClick={() => {}}
                />

                <CollectionTimeBox
                    active={false}
                    startTime='14:00'
                    endTime='16:00'
                    onClick={() => {}}
                />

                <CollectionTimeBox
                    active={false}
                    startTime='16:00'
                    endTime='18:00'
                    onClick={() => {}}
                />

                <CollectionTimeBox
                    active={false}
                    startTime='18:00'
                    endTime='20:00'
                    onClick={() => {}}
                />
            </div>
        </div>

        <div>
            <h2 className='booklayout-subtitle'>Collection address</h2>
            <p className='booklayout-comment'>Where should we collect from?</p>

            <div className='timeslot-address-picker'>
                <div className='timeslot-address standard-box'>
                    <div className='timeslot-address-checkbox'>
                        <Checkbox
                            checked={false}
                        />
                    </div>

                    <div className='timeslot-address-details'>
                        <p className='timeslot-address-name'>Home</p>
                        <p className='timeslot-address-lines'>12 Oak Street</p>
                        <p className='timeslot-address-lines'>Manchester, M1 4AB</p>
                    </div>

                    <div className='timeslot-address-arrow'>
                        <ChevronRight></ChevronRight>
                    </div>
                </div>


                <div className='timeslot-address standard-box'>
                    <div className='timeslot-address-checkbox'>
                        <Checkbox
                            checked={false}
                        />
                    </div>

                    <div className='timeslot-address-details'>
                        <p className='timeslot-address-name'>Home</p>
                        <p className='timeslot-address-lines'>12 Oak Street</p>
                        <p className='timeslot-address-lines'>Manchester, M1 4AB</p>
                    </div>

                    <div className='timeslot-address-arrow'>
                        <ChevronRight></ChevronRight>
                    </div>
                </div>

                <div className='timeslot-new-address-box standard-box'>
                    <PlusCircle className='timeslot-new-address-icon'></PlusCircle>
                    <p>Add a new address</p>
                </div>

            </div>

        </div>

        <div>
            <h2 className='booklayout-subtitle'>Delivery window</h2>
            <p className='booklayout-comment'>When would you like it back?</p>

            <div className='timeslot-delivery-date-picker'>

                <div className='timeslot-delivery-date active standard-box'>
                    <p>Thursday 30th May</p>

                </div>

                <div className='timeslot-delivery-date standard-box'>
                    <p>Thursday 30th May</p>

                </div>

                <div className='timeslot-delivery-date standard-box'>
                    <p>Thursday 30th May</p>

                </div>

            </div>
        </div>

        <button 
            className='standard-button timeslot-continue-button'
            onClick={handleContinueClick}
        >
            Continue
        </button>
    </>)
}

export default Timeslot;