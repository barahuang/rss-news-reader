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
        scale: 1.2,
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
