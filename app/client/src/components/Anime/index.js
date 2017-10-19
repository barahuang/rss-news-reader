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
    case 'ss':
      return {
        translateY: function(el, i) {
          return 50 + -50 * i;
        },
        scale: function(el, i, l) {
          return l - i + 0.25;
        },
        rotate: function() {
          return anime.random(-360, 360);
        }
      };
    default:
      return {};
  }
};

export default (target, animationName) => {
  anime({
    ...getAnimationOptions(animationName),
    targets: target
  });
};
