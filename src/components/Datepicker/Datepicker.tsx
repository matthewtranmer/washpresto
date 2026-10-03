import './Datepicker.css'

import { useState } from "react";

function getDateNow(): string{
    var dateNow = new Date(Date.now())
    var ISOstring = dateNow.toISOString().split('T')[0];

    return ISOstring;
}

function generateDates(numberOfDates: number): string[]{
    var dateNow = new Date(Date.now())
    const date = new Date(dateNow);

    var dates: string[] = [];

    for (var i=0; i<numberOfDates; i++){
        var ISOstring = date.toISOString().split('T')[0];
        dates.push(ISOstring)

        date.setDate(date.getDate() + 1);
    }

    return dates
}

type ParsedDate = {
    weekday: string;
    day: string;
    month: string;
}

function parseDateString(dateString: string){
    //TODO: update to allow users from different regions
    const localeTags = 'en-GB'

    const [year, month, day] = dateString.split('-').map(Number)
    const date = new Date(year, month-1, day)

    const parsedDate: ParsedDate  = {
        weekday: date.toLocaleDateString(localeTags, {weekday: 'short'}),
        day: date.toLocaleDateString(localeTags, {day: '2-digit'}),
        month: date.toLocaleDateString(localeTags, {month: 'short'})
    }

    return parsedDate;
}

function handleDateClick(event: React.MouseEvent<HTMLDivElement>) {
  event.currentTarget.scrollIntoView({
    behavior: "smooth",
    inline: "center",
    block: "nearest",
  });
}

type datepickerDateProps = {
    active: boolean;
    weekday: string;
    day: string;
    month: string;
    onClick: () => void;
}

function DatepickerDate({ active, weekday, day, month, onClick }: datepickerDateProps) {
    return (
        <div 
            className={`datepicker-date ${active ? "active" : ""}`}
            onClick={(event) => {
                handleDateClick(event);
                onClick();
            }}
        >
            <p className='datepicker-date-weekday'>{weekday}</p>
            <p className='datepicker-date-day'>{day}</p>
            <p className='datepicker-date-month'>{month}</p>
        </div>
    )
}

function Datepicker(){
    const [selectedDate, setSelectedDate] = useState<string | null>(getDateNow())

    const dates = generateDates(20);

    return (
        // <div></div>
        <div className='datepicker'>
            {dates.map((dateString) => {
                var parsedDateString = parseDateString(dateString);

                return (
                    <DatepickerDate
                        active={dateString === selectedDate}
                        weekday={parsedDateString.weekday}
                        day={parsedDateString.day}
                        month={parsedDateString.month}
                        onClick={() => setSelectedDate(dateString)}
                    />
                )
            })}
        </div>
    )
}

export default Datepicker;