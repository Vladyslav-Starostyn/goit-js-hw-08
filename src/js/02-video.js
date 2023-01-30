import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const PLAYER_KEY = 'videoplayer-current-time';

player.on(
  'timeupdate',
  throttle(event => {
    localStorage.setItem(PLAYER_KEY, event.seconds);
  }, 1000)
);

player.setCurrentTime(localStorage.getItem(PLAYER_KEY) || 0);
