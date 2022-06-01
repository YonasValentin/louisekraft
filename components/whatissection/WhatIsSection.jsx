import React, { useState, useEffect } from 'react';
import Link from 'next/link';

function WhatIsSection() {
  const [whatIsContent, setWhatIsContent] = useState([]);

  useEffect(() => {
    fetch('https://wp.louisekraft.dk/wp-json/wp/v2/posts?include=83')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setWhatIsContent(data);
        console.log(data);
      });
  }, []);

  return (
    <section className='what-is'>
      <div className='what-is__container'>
        <audio
          src={whatIsContent[0]?.acf.what_is_audio}
          controls
          type='audio/mp3'
          className='what-is__audio-top'
        ></audio>
        <div className='what-is__text-area'>
          <h2 className='what-is__title'>
            <span className='what-is__title-special'>
              {whatIsContent[0]?.acf.what_is_special_title}
            </span>
            {whatIsContent[0]?.acf.what_is_title}
          </h2>
          <p className='what-is__description'>
            {whatIsContent[0]?.acf.what_is_text}
          </p>
        </div>
        <div className='what-is__image-area'>
          <figure>
            <img
              src={whatIsContent[0]?.acf.image}
              alt={whatIsContent[0]?.acf.alt_text_hero}
            ></img>
          </figure>
        </div>
        <div className='what-is__symptoms-area'>
          <audio
            src={whatIsContent[0]?.acf.symptom_audio}
            controls
            type='audio/mp3'
            className='what-is__audio'
          ></audio>
          <h3 className='what-is__symptoms-title'>
            {whatIsContent[0]?.acf.symptoms_title}
          </h3>
          <p className='what-is__symptoms-text'>
            {whatIsContent[0]?.acf.symptoms_text}
          </p>
          <dl className='what-is__symptoms-area__list'>
            <dt className='what-is__symptoms-area__list-title-1'>
              {whatIsContent[0]?.acf.symptom_1}
            </dt>
            <dt className='what-is__symptoms-area__list-title-2'>
              {whatIsContent[0]?.acf.symptom_2}
            </dt>
            <dt className='what-is__symptoms-area__list-title-3'>
              {whatIsContent[0]?.acf.symptom_3}
            </dt>
            <dt className='what-is__symptoms-area__list-title-4'>
              {whatIsContent[0]?.acf.symptom_4}
            </dt>
            <dt className='what-is__symptoms-area__list-title-5'>
              {whatIsContent[0]?.acf.symptom_5}
            </dt>
            <dt className='what-is__symptoms-area__list-title-6'>
              {whatIsContent[0]?.acf.symptom_6}
            </dt>
            <dt className='what-is__symptoms-area__list-title-7'>
              {whatIsContent[0]?.acf.symptom_7}
            </dt>
          </dl>
          <Link href='#' passHref>
            <button className='what-is__symptoms-area-btn'>
              {whatIsContent[0]?.acf?.symptom_btn}
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default WhatIsSection;
