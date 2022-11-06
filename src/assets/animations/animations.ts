import {
  trigger,
  state,
  style,
  transition,
  animate,
  query,
  group,
  animateChild,
} from '@angular/animations';

export const Animations = {
  fadeIn: trigger('fadeIn', [
    state('void', style({ marginTop: '-40px', opacity: 0 })),
    transition('void => *', [
      animate('1s ease-out', style({ marginTop: '0px', opacity: 1 })),
    ]),
    transition('* => void', [
      animate('1s ease-in', style({ marginTop: '-40px', opacity: 0 })),
    ]),
  ]),

  fromLeftToRight: trigger('fromLeftToRight', [
    state('void', style({ transform: 'translateX(-200%)'})),
    transition('void => *', [
      animate('1s ease-out', style({ transform: 'translateX(0)' })),
    ]),
    transition('* => void', [
      animate('1s ease-in', style({ transform: 'translateX(200%)' })),
    ]),
  ]),

  fromTop: trigger('fromTop', [
    state('void', style({ transform: 'translateY(-100%)' })),
    transition('void => *', [
      animate('200ms ease-out', style({ transform: 'translateY(0)' })),
    ]),
    transition('* => void', [
      animate('200ms ease-in', style({ transform: 'translateY(-100%)' })),
    ]),
  ]),

  topRightScale: trigger('topRightScale', [
    state(
      'void',
      style({ transform: 'translateX(50%) translateY(-50%) scale(0)' })
    ),
    transition('void => *', [
      animate(
        '200ms ease-out',
        style({ transform: 'translateX(0%) translateY(0%) scale(1)' })
      ),
    ]),
    transition('* => void', [
      animate(
        '200ms ease-in',
        style({ transform: 'translateX(50%) translateY(-50%) scale(0)' })
      ),
    ]),
  ]),

  opacity: trigger('opacity', [
    state('void', style({ opacity: '0' })),
    transition('void => *', [
      animate('200ms ease-out', style({ opacity: '1' })),
    ]),
    transition('* => void', [
      animate('200ms ease-in', style({ opacity: '0' })),
    ]),
  ]),

  slideInAnimation: trigger('routeAnimations', [
    transition('first <=> second', [
      style({ position: 'relative' }),
      query(':enter, :leave', [
        style({
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
        }),
      ], { optional: true }),
      query(':enter', [style({ left: '-100%' })], { optional: true }),
      query(':leave', animateChild(), { optional: true }),
      group([
        query(':leave', [animate('300ms ease-out', style({ left: '100%' }))], {
          optional: true,
        }),
        query(':enter', [animate('300ms ease-out', style({ left: '0%' }))], { optional: true }),
      ]),
    ]),
    transition('* <=> *', [
      style({ position: 'relative' }),
      query(':enter, :leave', [
        style({
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
        }),
      ],{ optional: true }),
      query(':enter', [style({ left: '-100%' })], { optional: true }),
      query(':leave', animateChild(), { optional: true }),
      group([
        query(
          ':leave',
          [animate('200ms ease-out', style({ left: '100%', opacity: 0 }))],
          { optional: true }
        ),
        query(':enter', [animate('300ms ease-out', style({ left: '0%' }))], { optional: true }),
        query('@*', animateChild(), { optional: true }),
      ]),
    ]),
  ]),
};
