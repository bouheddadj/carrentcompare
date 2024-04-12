import React, { useEffect, useRef } from 'react';

const TimePicker = () => {
    const inputRef = useRef();

    useEffect(() => {
        if (inputRef.current) {
            window.$(inputRef.current).datetimepicker({
                format: 'LT'
            });
        }
    }, []);

    return (
        <div className='input-group date' data-target-input='nearest'>
            <input ref={inputRef} type='text' className='form-control datetimepicker-input' />
            <div className='input-group-append' data-toggle='datetimepicker'>
                <div className='input-group-text'><i className='fa fa-clock-o'></i></div>
            </div>
        </div>
    );
};

export default TimePicker;