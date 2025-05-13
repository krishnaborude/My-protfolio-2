import React, { useState, useRef, useEffect } from 'react';

import logo from '../assets/logo.svg';
import NavAudio from '../assets/audio.mp3'; 

import { IoVolumeMuteOutline, IoVolumeHighOutline } from 'react-icons/io5';

function Nav() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(new Audio(NavAudio)); 
  const [showNavbar, setShowNavbar] = useState(true);
  const prevScrollPos = useRef(window.scrollY);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const isScrollingUp = prevScrollPos.current > currentScrollPos;
      setShowNavbar(isScrollingUp || currentScrollPos < 10);
      prevScrollPos.current = currentScrollPos;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleAudio = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className={`nav-fixed ${showNavbar ? '' : 'hidden-navbar'}`}>
      <nav className='nav-container'>
        <a href="#" className='logo'>
          <img src={logo} alt="Logo" />
        </a>

        <div className="socials">
          <button className='volume' onClick={toggleAudio}>
            {isPlaying ? (
              <IoVolumeHighOutline className="playing-icon" />
            ) : (
              <IoVolumeMuteOutline />
            )}
          </button>
        </div>
      </nav>
    </div>
  );
}

export default Nav;