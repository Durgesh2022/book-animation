import React from 'react';
import './App.css'; // Assuming you have some global styles here
import Diary from './Diary'; // Updated path for the Diary component
import DiaryForm from './Form';


const Record = ({ title }) => {
  return (
    <div>
      <div className="App">
        <div className="diary-box">
          <div className="diary">
            <Diary />
          </div>
          <div className="form">
            {/* Conditional rendering based on the title */}
            <DiaryForm />
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Record;
