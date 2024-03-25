// npm install axios react-select

import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import axios from 'axios';

const AddressAutocomplete = () => {
  const [inputValue, setInputValue] = useState('');
  const [options, setOptions] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let timeoutId;
    if (inputValue) {
      setLoading(true);
      timeoutId = setTimeout(() => {
        axios.get(`https://api-adresse.data.gouv.fr/search/?q=${inputValue}`)
          .then(response => {
            const addresses = response.data.features.map(feature => ({
              value: feature.properties.label,
              label: feature.properties.label,
            }));
            setOptions(addresses);
            setLoading(false);
          })
          .catch(error => {
            console.error('Error fetching data:', error);
            setLoading(false);
          });
      }, 500); // Délai de 500ms avant d'envoyer la requête (on économise le nb de req :) )
    }
    return () => clearTimeout(timeoutId); // Nettoyage du timeout lorsqu'un nouveau caractère est entré
  }, [inputValue]);

  return (
    <Select
      isLoading={loading}
      onInputChange={setInputValue}
      options={options}
    />
  );
};

export default AddressAutocomplete;

// Using :
// in App.js :
// import AddressAutocomplete from './???/AddressAutocomplete';
// <AddressAutocomplete></AddressAutocomplete>