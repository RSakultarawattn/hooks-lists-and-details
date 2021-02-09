import  React, { Component, useState } from 'react';
import fetch from 'superagent';

const DetailPage = () => {
  const [character, setCharacter] = useState([]);
  const [Loading, setLoading] = useState(true);
};

const componentDidMount = ({ target }) => {
    if(target.name === 'character') setCharacter(target.value);
    
}