import React from 'react';
import MailingFilter from "./MailingFilter";
import {useMailingsFilter} from "../../stores/useMailingsFilter";
import {dateToTimestamp, timestampToDate} from "../../api/parser";

const DateMailingFilter = () => {
    const {date_from, date_to, setFromDate, setToDate} = useMailingsFilter();
    return (
        <MailingFilter>
            {
                <>
                    <input id="date-from" type="datetime-local" name="date-from" value={date_from && timestampToDate(date_from)}
                           onChange={(e) => setFromDate(dateToTimestamp(e.target.value))}/>
                    <input id="date-to" type="datetime-local" name="date-to" value={date_to && timestampToDate(date_to)}
                           onChange={(e) => setToDate(dateToTimestamp(e.target.value))}/>
                </>
            }
        </MailingFilter>
    );
};

export default DateMailingFilter;
