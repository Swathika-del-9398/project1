// src/ContainerPage.js

import React from 'react';
import './App.css'; // Import CSS for styling

const ContainerPage = () => {
  return (
    <div className="container-page">
      <div className="container">
        <div className="image" id='UZ'>
          <img src="https://images.pexels.com/photos/1099680/pexels-photo-1099680.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Image 1" />
        </div>
        <div className="description">
          <h2>FOOD</h2>
          <p id='PL'><strong id='KS'>Quinoa Salad with Roasted Vegetables:</strong> Nutty quinoa mixed with colorful roasted vegetables such as bell peppers, zucchini, and cherry tomatoes. Tossed with a light lemon vinaigrette and garnished with fresh herbs like parsley and basil. This salad is packed with fiber, vitamins, and antioxidants.<br/>Healthy food descriptions often emphasize the use of lean proteins, whole grains, fresh fruits and vegetables, and minimal added sugars or fats. They aim to showcase dishes that are not only delicious but also contribute to overall well-being and nutrition.</p>
        </div>
      </div>
      <div className="container">
        <div className="description">
          <h2>MOVIES</h2>
          <p id='PL'><strong id='KS'>Fantasy Film:</strong> Transporting viewers to magical realms and enchanted worlds, fantasy movies feature mythical creatures, epic quests, and battles between forces of good and evil. They ignite the imagination with their imaginative settings and fantastical elements.<br/>Each movie genre offers a distinct experience, catering to diverse tastes and preferences among viewers. Whether it's escapism, emotional resonance, intellectual stimulation, or simply entertainment, movies have the power to captivate and inspire audiences worldwide.



</p>
        </div>
        <div className="image">
          <img src="https://valahia.news/wp-content/uploads/2021/04/SEEfest-2021.png" alt="Image 2" />
        </div>
      </div>
      <div className="container">
        <div className="image" id='TN'>
          <img src="https://e0.pxfuel.com/wallpapers/657/606/desktop-wallpaper-landscape-fields-background-sky-clouds-thumbnail.jpg" alt="Image 3"  />
        </div>
        <div className="description">
          <h2>WEATHER</h2>
          <p id='PL'> <strong id='KS'>Weather descriptions:</strong> Aim to paint a picture of atmospheric conditions and their effects.often include details about temperature, humidity, wind speed, and atmospheric phenomena to give a comprehensive sense of the conditions experienced outdoors. <br/>They evoke sensory experiences and set the scene for activities, moods, and emotions associated with different types of weather.</p>
        </div>
      </div>
    </div>
  );
};

export default ContainerPage;
