import {
    trigger,
    state,
    style,
    transition,
    animate,
  } from '@angular/animations';

  export const Animations = {
    fadeIn: trigger('fadeIn', [
      state('void', style({ marginTop:"-40px", opacity: 0 })),
      transition('void => *', [
        animate('1s ease-out', style({ marginTop:"0px", opacity: 1 })),
      ]),
      transition('* => void', [
        animate('1s ease-in', style({ marginTop:"-40px", opacity: 0 })),
      ]),
    ]),

    fromLeftToRight: trigger('fromLeftToRight', [
        state('void', style({ transform:"translateX(200%)", opacity: 0 })),
        transition('void => *', [
          animate('1s ease-out', style({ transform:"translateX(0%)", opacity: 1 })),
        ]),
        transition('* => void', [
          animate('1s ease-in', style({ transform:"translateX(-200%)", opacity: 0 })),
        ]),
      ]),

    fromTop: trigger('fromTop', [
        state('void', style({ transform:"translateY(-100%)" })),
        transition('void => *', [
          animate('200ms ease-out', style({ transform:"translateY(0)" })),
        ]),
        transition('* => void', [
          animate('200ms ease-in', style({ transform:"translateY(-100%)" })),
        ]),
      ]),

      topRightScale: trigger('topRightScale', [
        state('void', style({ transform:"translateX(50%) translateY(-50%) scale(0)" })),
        transition('void => *', [
          animate('200ms ease-out', style({ transform:"translateX(0%) translateY(0%) scale(1)" })),
        ]),
        transition('* => void', [
          animate('200ms ease-in', style({ transform:"translateX(50%) translateY(-50%) scale(0)" })),
        ]),
      ]),

  };