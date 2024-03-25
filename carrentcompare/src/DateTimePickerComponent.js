import React, { useState } from 'react';
import DateTimePicker from 'react-datetime-picker';
import 'react-datepicker/dist/react-datepicker.css';


const DateTimePickerComponent = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [isOpen, setIsOpen] = useState(false); // État pour gérer l'ouverture et la fermeture du calendrier

  const handleDateChange = (newDate) => {
    setSelectedDate(newDate);
    setIsOpen(false); // Fermer le calendrier une fois une date sélectionnée
  };

  const toggleCalendar = () => {
    setIsOpen(!isOpen); // Inverser l'état d'ouverture du calendrier
  };

  return (
    <div>
      <label onClick={toggleCalendar}>Sélectionnez une date et une heure :</label>
      <DateTimePicker
        value={selectedDate}
        onChange={handleDateChange}
        format="dd/MM/yyyy HH:mm"
        isOpen={isOpen} // Passer l'état d'ouverture du calendrier
        calendarIcon={null} // Désactiver l'icône du calendrier pour éviter les doublons
      />
    </div>
  );
};

export default DateTimePickerComponent;
