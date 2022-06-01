import React, { useState, useEffect } from 'react';
import Link from 'next/link';

function HeroSection() {
  const [homePageContent, setHomePageContent] = useState([]);

  useEffect(() => {
    fetch('https://wp.louisekraft.dk/wp-json/wp/v2/posts?include=54')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setHomePageContent(data);
        console.log(data);
      });
  }, []);

  return (
    <section className='hero'>
      <div className='hero__container'>
        <audio
          className='hero__audio'
          type='audio/mp3'
          src={homePageContent[0]?.acf.hero_audio}
          controls
        ></audio>
        <div className='hero__text-area'>
          <h1 className='hero__text-area-title'>
            {homePageContent[0]?.acf?.first_text}
          </h1>
          <p className='hero__text-area-sub-title'>
            {homePageContent[0]?.acf?.secound_text}
          </p>
          <Link href='#' passHref>
            <button className='hero__text-area-btn'>
              {homePageContent[0]?.acf?.btn_text}
            </button>
          </Link>
        </div>
        <div className='hero__image-area'>
          <figure>
            <img
              src={homePageContent[0]?.acf.image_hero}
              alt={homePageContent[0]?.acf.alt_text_hero}
            ></img>
          </figure>
        </div>
        <div className='statements-area'>
          <dl className='statements-area__list'>
            <dt className='statements-area__list-title'>
              {homePageContent[0]?.acf.statement_text_1}
            </dt>
            <dd className='statements-area__list-description'>
              {homePageContent[0]?.acf.statement_sub_text_1}
            </dd>
          </dl>
          <dl className='statements-area__list'>
            <dt className='statements-area__list-title'>
              {homePageContent[0]?.acf.statement_text_2}
            </dt>
            <dd className='statements-area__list-description'>
              {homePageContent[0]?.acf.statement_sub_text_2}
            </dd>
          </dl>
          <dl className='statements-area__list'>
            <dt className='statements-area__list-title'>
              {homePageContent[0]?.acf.statement_text_3}
            </dt>
            <dd className='statements-area__list-description'>
              {homePageContent[0]?.acf.statement_sub_text_3}
            </dd>
          </dl>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
