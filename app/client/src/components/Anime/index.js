// import React from 'react';
import anime from 'animejs';

const getAnimationOptions = name => {
  switch (name) {
    case 'tx':
      return {
        translateX: 250,
        direction: 'alternate'
      };
    case 'ty':
      return {
        translateY: 50,
        direction: 'alternate'
      };
    case 'mi':
      return {
        scale: 1.05,
        duration: 800,
        elasticity: 400,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2
      };

    case 'mo':
      return {
        scale: 1.0,
        duration: 600,
        elasticity: 300
      };

    case 'mi2':
      return {
        display: 'none',
        easing: 'easeOutElastic'
      };
    case 'mo2':
      return {
        display: 'block',
        easing: 'easeOutElastic'
      };

    case 'flyin':
      return {
        translateX: 250,
        direction: 'alternate',
        loop: true,
        delay: function(el, i) {
          return 1000 + i * 1000;
        }
      };

    case 'tagon':
      return {
        height: '100px',
        duration: 200,
        elasticity: 300
      };
    case 'tagoff':
      return {
        height: '30px',
        duration: 200,
        elasticity: 300
      };
    case 'fontin':
      return {
        translateX: 250,
        direction: 'alternate',
        loop: true
        // duration: function(el, i, l) {
        //   return 1000 + i * 1000;
        // }
      };

    case 'fontout':
      return {
        translateX: -250,
        direction: 'alternate',
        loop: true
        // duration: function(el, i) {
        //   return 1000 + i * 1000;
        // }
      };

    case 'lettering':
      return {
        translateY: ['1em', '0'],
        opacity: [0, 1],
        duration: 750,
        delay: (el, i) => i * 50
      };
    case 'appearing':
      return {
        translateY: ['20px', '0'],
        opacity: [0, 1],
        duration: 750,
        delay: (el, i) => 1000 + i * 50
      };
    default:
      return {};
  }
};

export default (target, animationName) => {
  anime.remove(target);
  anime({
    ...getAnimationOptions(animationName),
    targets: target,
    easing: 'easeOutElastic'
  });
};
