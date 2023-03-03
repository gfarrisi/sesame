import { useWallet } from '@/hooks/use-wallet';
import styles from '@/styles/Home.module.css';
import React from 'react';

const sesameLogo = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="150"
      zoomAndPan="magnify"
      viewBox="0 0 600 149.999998"
      height="40"
      preserveAspectRatio="xMidYMid meet"
      version="1.0"
    >
      <defs>
        <g />
      </defs>
      <g fill="#2c2a3f" fillOpacity="1">
        <g transform="translate(9.122435, 109.718949)">
          <g>
            <path d="M 38.53125 2.53125 C 32.976562 2.53125 27.988281 1.75 23.5625 0.1875 C 19.144531 -1.363281 15.375 -3.273438 12.25 -5.546875 C 9.132812 -7.828125 6.734375 -10.296875 5.046875 -12.953125 C 3.367188 -15.609375 2.53125 -18.03125 2.53125 -20.21875 C 2.53125 -22.070312 2.882812 -23.835938 3.59375 -25.515625 C 4.3125 -27.203125 5.300781 -28.675781 6.5625 -29.9375 C 7.832031 -31.207031 9.304688 -32.21875 10.984375 -32.96875 C 12.671875 -33.726562 14.484375 -34.109375 16.421875 -34.109375 C 17.679688 -34.109375 18.859375 -33.894531 19.953125 -33.46875 C 21.054688 -33.050781 22.050781 -32.566406 22.9375 -32.015625 C 23.820312 -31.472656 24.554688 -30.925781 25.140625 -30.375 C 25.734375 -29.832031 26.195312 -29.394531 26.53125 -29.0625 C 27.789062 -27.789062 29.347656 -26.414062 31.203125 -24.9375 C 33.054688 -23.46875 35.078125 -22.734375 37.265625 -22.734375 C 39.460938 -22.734375 41.171875 -23.257812 42.390625 -24.3125 C 43.609375 -25.375 44.21875 -26.535156 44.21875 -27.796875 C 44.21875 -29.140625 43.226562 -30.234375 41.25 -31.078125 C 39.269531 -31.921875 36.765625 -32.765625 33.734375 -33.609375 C 30.703125 -34.453125 27.457031 -35.460938 24 -36.640625 C 20.550781 -37.816406 17.3125 -39.457031 14.28125 -41.5625 C 11.25 -43.664062 8.742188 -46.398438 6.765625 -49.765625 C 4.785156 -53.140625 3.796875 -57.398438 3.796875 -62.546875 C 3.796875 -66.160156 4.613281 -69.671875 6.25 -73.078125 C 7.894531 -76.492188 10.210938 -79.53125 13.203125 -82.1875 C 16.191406 -84.84375 19.726562 -86.96875 23.8125 -88.5625 C 27.894531 -90.164062 32.378906 -90.96875 37.265625 -90.96875 C 42.660156 -90.96875 47.503906 -90.226562 51.796875 -88.75 C 56.097656 -87.28125 59.742188 -85.472656 62.734375 -83.328125 C 65.722656 -81.179688 68.015625 -78.84375 69.609375 -76.3125 C 71.210938 -73.78125 72.015625 -71.503906 72.015625 -69.484375 C 72.015625 -67.546875 71.632812 -65.734375 70.875 -64.046875 C 70.113281 -62.367188 69.101562 -60.894531 67.84375 -59.625 C 66.582031 -58.363281 65.109375 -57.375 63.421875 -56.65625 C 61.734375 -55.945312 59.96875 -55.59375 58.125 -55.59375 C 56.851562 -55.59375 55.671875 -55.800781 54.578125 -56.21875 C 53.484375 -56.644531 52.492188 -57.128906 51.609375 -57.671875 C 50.722656 -58.222656 49.984375 -58.769531 49.390625 -59.3125 C 48.804688 -59.863281 48.347656 -60.304688 48.015625 -60.640625 C 47.671875 -60.984375 47.203125 -61.425781 46.609375 -61.96875 C 46.023438 -62.519531 45.3125 -63.066406 44.46875 -63.609375 C 43.625 -64.160156 42.695312 -64.644531 41.6875 -65.0625 C 40.675781 -65.488281 39.625 -65.703125 38.53125 -65.703125 C 36.59375 -65.703125 35.160156 -65.28125 34.234375 -64.4375 C 33.304688 -63.59375 32.84375 -62.539062 32.84375 -61.28125 C 32.84375 -59.925781 33.832031 -58.828125 35.8125 -57.984375 C 37.789062 -57.148438 40.296875 -56.3125 43.328125 -55.46875 C 46.367188 -54.625 49.613281 -53.609375 53.0625 -52.421875 C 56.519531 -51.242188 59.765625 -49.601562 62.796875 -47.5 C 65.828125 -45.394531 68.332031 -42.65625 70.3125 -39.28125 C 72.289062 -35.914062 73.28125 -31.664062 73.28125 -26.53125 C 73.28125 -22.738281 72.4375 -19.09375 70.75 -15.59375 C 69.0625 -12.101562 66.703125 -9.007812 63.671875 -6.3125 C 60.640625 -3.625 57 -1.476562 52.75 0.125 C 48.5 1.726562 43.757812 2.53125 38.53125 2.53125 Z M 38.53125 2.53125 " />
          </g>
        </g>
      </g>
      <g fill="#2c2a3f" fillOpacity="1">
        <g transform="translate(102.725633, 109.718949)">
          <g>
            <path d="M 21.484375 0 C 17.347656 0 13.992188 -1.257812 11.421875 -3.78125 C 8.859375 -6.3125 7.578125 -9.472656 7.578125 -13.265625 L 7.578125 -75.171875 C 7.578125 -78.960938 8.859375 -82.117188 11.421875 -84.640625 C 13.992188 -87.171875 17.347656 -88.4375 21.484375 -88.4375 L 60.640625 -88.4375 C 64.765625 -88.4375 68.113281 -87.171875 70.6875 -84.640625 C 73.257812 -82.117188 74.546875 -78.960938 74.546875 -75.171875 C 74.546875 -71.378906 73.257812 -68.21875 70.6875 -65.6875 C 68.113281 -63.164062 64.765625 -61.90625 60.640625 -61.90625 L 35.375 -61.90625 L 35.375 -56.859375 L 52.4375 -56.859375 C 54.289062 -56.859375 56.035156 -56.519531 57.671875 -55.84375 C 59.316406 -55.164062 60.726562 -54.257812 61.90625 -53.125 C 63.082031 -51.988281 64.007812 -50.660156 64.6875 -49.140625 C 65.363281 -47.628906 65.703125 -45.988281 65.703125 -44.21875 C 65.703125 -42.445312 65.363281 -40.800781 64.6875 -39.28125 C 64.007812 -37.769531 63.082031 -36.445312 61.90625 -35.3125 C 60.726562 -34.175781 59.316406 -33.269531 57.671875 -32.59375 C 56.035156 -31.914062 54.289062 -31.578125 52.4375 -31.578125 L 35.375 -31.578125 L 35.375 -26.53125 L 60.640625 -26.53125 C 64.765625 -26.53125 68.113281 -25.265625 70.6875 -22.734375 C 73.257812 -20.210938 74.546875 -17.054688 74.546875 -13.265625 C 74.546875 -9.472656 73.257812 -6.3125 70.6875 -3.78125 C 68.113281 -1.257812 64.765625 0 60.640625 0 Z M 21.484375 0 " />
          </g>
        </g>
      </g>
      <g fill="#2c2a3f" fillOpacity="1">
        <g transform="translate(196.328831, 109.718949)">
          <g>
            <path d="M 38.53125 2.53125 C 32.976562 2.53125 27.988281 1.75 23.5625 0.1875 C 19.144531 -1.363281 15.375 -3.273438 12.25 -5.546875 C 9.132812 -7.828125 6.734375 -10.296875 5.046875 -12.953125 C 3.367188 -15.609375 2.53125 -18.03125 2.53125 -20.21875 C 2.53125 -22.070312 2.882812 -23.835938 3.59375 -25.515625 C 4.3125 -27.203125 5.300781 -28.675781 6.5625 -29.9375 C 7.832031 -31.207031 9.304688 -32.21875 10.984375 -32.96875 C 12.671875 -33.726562 14.484375 -34.109375 16.421875 -34.109375 C 17.679688 -34.109375 18.859375 -33.894531 19.953125 -33.46875 C 21.054688 -33.050781 22.050781 -32.566406 22.9375 -32.015625 C 23.820312 -31.472656 24.554688 -30.925781 25.140625 -30.375 C 25.734375 -29.832031 26.195312 -29.394531 26.53125 -29.0625 C 27.789062 -27.789062 29.347656 -26.414062 31.203125 -24.9375 C 33.054688 -23.46875 35.078125 -22.734375 37.265625 -22.734375 C 39.460938 -22.734375 41.171875 -23.257812 42.390625 -24.3125 C 43.609375 -25.375 44.21875 -26.535156 44.21875 -27.796875 C 44.21875 -29.140625 43.226562 -30.234375 41.25 -31.078125 C 39.269531 -31.921875 36.765625 -32.765625 33.734375 -33.609375 C 30.703125 -34.453125 27.457031 -35.460938 24 -36.640625 C 20.550781 -37.816406 17.3125 -39.457031 14.28125 -41.5625 C 11.25 -43.664062 8.742188 -46.398438 6.765625 -49.765625 C 4.785156 -53.140625 3.796875 -57.398438 3.796875 -62.546875 C 3.796875 -66.160156 4.613281 -69.671875 6.25 -73.078125 C 7.894531 -76.492188 10.210938 -79.53125 13.203125 -82.1875 C 16.191406 -84.84375 19.726562 -86.96875 23.8125 -88.5625 C 27.894531 -90.164062 32.378906 -90.96875 37.265625 -90.96875 C 42.660156 -90.96875 47.503906 -90.226562 51.796875 -88.75 C 56.097656 -87.28125 59.742188 -85.472656 62.734375 -83.328125 C 65.722656 -81.179688 68.015625 -78.84375 69.609375 -76.3125 C 71.210938 -73.78125 72.015625 -71.503906 72.015625 -69.484375 C 72.015625 -67.546875 71.632812 -65.734375 70.875 -64.046875 C 70.113281 -62.367188 69.101562 -60.894531 67.84375 -59.625 C 66.582031 -58.363281 65.109375 -57.375 63.421875 -56.65625 C 61.734375 -55.945312 59.96875 -55.59375 58.125 -55.59375 C 56.851562 -55.59375 55.671875 -55.800781 54.578125 -56.21875 C 53.484375 -56.644531 52.492188 -57.128906 51.609375 -57.671875 C 50.722656 -58.222656 49.984375 -58.769531 49.390625 -59.3125 C 48.804688 -59.863281 48.347656 -60.304688 48.015625 -60.640625 C 47.671875 -60.984375 47.203125 -61.425781 46.609375 -61.96875 C 46.023438 -62.519531 45.3125 -63.066406 44.46875 -63.609375 C 43.625 -64.160156 42.695312 -64.644531 41.6875 -65.0625 C 40.675781 -65.488281 39.625 -65.703125 38.53125 -65.703125 C 36.59375 -65.703125 35.160156 -65.28125 34.234375 -64.4375 C 33.304688 -63.59375 32.84375 -62.539062 32.84375 -61.28125 C 32.84375 -59.925781 33.832031 -58.828125 35.8125 -57.984375 C 37.789062 -57.148438 40.296875 -56.3125 43.328125 -55.46875 C 46.367188 -54.625 49.613281 -53.609375 53.0625 -52.421875 C 56.519531 -51.242188 59.765625 -49.601562 62.796875 -47.5 C 65.828125 -45.394531 68.332031 -42.65625 70.3125 -39.28125 C 72.289062 -35.914062 73.28125 -31.664062 73.28125 -26.53125 C 73.28125 -22.738281 72.4375 -19.09375 70.75 -15.59375 C 69.0625 -12.101562 66.703125 -9.007812 63.671875 -6.3125 C 60.640625 -3.625 57 -1.476562 52.75 0.125 C 48.5 1.726562 43.757812 2.53125 38.53125 2.53125 Z M 38.53125 2.53125 " />
          </g>
        </g>
      </g>
      <g fill="#2c2a3f" fillOpacity="1">
        <g transform="translate(289.932019, 109.718949)">
          <g>
            <path d="M 15.796875 0 C 11.328125 0 7.785156 -1.257812 5.171875 -3.78125 C 2.566406 -6.3125 1.265625 -9.472656 1.265625 -13.265625 C 1.265625 -14.023438 1.347656 -14.847656 1.515625 -15.734375 C 1.679688 -16.617188 1.890625 -17.4375 2.140625 -18.1875 C 2.484375 -19.113281 2.820312 -20 3.15625 -20.84375 L 26.53125 -79.59375 C 27.375 -81.445312 28.507812 -83.132812 29.9375 -84.65625 C 31.125 -85.914062 32.726562 -87.070312 34.75 -88.125 C 36.769531 -89.175781 39.296875 -89.703125 42.328125 -89.703125 C 45.273438 -89.703125 47.78125 -89.175781 49.84375 -88.125 C 51.90625 -87.070312 53.523438 -85.914062 54.703125 -84.65625 C 56.140625 -83.132812 57.28125 -81.445312 58.125 -79.59375 L 81.484375 -20.84375 L 82.375 -18.1875 C 82.625 -17.4375 82.851562 -16.617188 83.0625 -15.734375 C 83.28125 -14.847656 83.390625 -14.023438 83.390625 -13.265625 C 83.390625 -9.472656 82.082031 -6.3125 79.46875 -3.78125 C 76.851562 -1.257812 73.316406 0 68.859375 0 C 66.328125 0 64.195312 -0.523438 62.46875 -1.578125 C 60.75 -2.628906 59.382812 -3.785156 58.375 -5.046875 C 57.195312 -6.566406 56.269531 -8.253906 55.59375 -10.109375 L 54.328125 -13.890625 L 30.328125 -13.890625 L 29.0625 -10.109375 C 28.300781 -8.253906 27.332031 -6.566406 26.15625 -5.046875 C 25.144531 -3.785156 23.796875 -2.628906 22.109375 -1.578125 C 20.421875 -0.523438 18.316406 0 15.796875 0 Z M 48.015625 -34.109375 L 42.953125 -49.28125 L 41.6875 -49.28125 L 36.640625 -34.109375 Z M 48.015625 -34.109375 " />
          </g>
        </g>
      </g>
      <g fill="#2c2a3f" fillOpacity="1">
        <g transform="translate(392.376874, 109.718949)">
          <g>
            <path d="M 21.484375 0 C 17.347656 0 13.992188 -1.257812 11.421875 -3.78125 C 8.859375 -6.3125 7.578125 -9.472656 7.578125 -13.265625 L 7.578125 -75.171875 C 7.578125 -78.960938 8.859375 -82.117188 11.421875 -84.640625 C 13.992188 -87.171875 17.347656 -88.4375 21.484375 -88.4375 C 23.503906 -88.4375 25.394531 -88.035156 27.15625 -87.234375 C 28.925781 -86.441406 30.488281 -85.582031 31.84375 -84.65625 C 33.351562 -83.5625 34.742188 -82.296875 36.015625 -80.859375 L 52.4375 -63.171875 L 68.859375 -80.859375 C 70.117188 -82.296875 71.507812 -83.5625 73.03125 -84.65625 C 74.375 -85.582031 75.910156 -86.441406 77.640625 -87.234375 C 79.367188 -88.035156 81.285156 -88.4375 83.390625 -88.4375 C 87.515625 -88.4375 90.859375 -87.171875 93.421875 -84.640625 C 95.992188 -82.117188 97.28125 -78.960938 97.28125 -75.171875 L 97.28125 -13.265625 C 97.28125 -9.472656 95.992188 -6.3125 93.421875 -3.78125 C 90.859375 -1.257812 87.515625 0 83.390625 0 C 79.265625 0 75.914062 -1.257812 73.34375 -3.78125 C 70.769531 -6.3125 69.484375 -9.472656 69.484375 -13.265625 L 69.484375 -45.484375 L 61.90625 -37.265625 C 61.0625 -36.429688 60.175781 -35.675781 59.25 -35 C 58.40625 -34.40625 57.414062 -33.894531 56.28125 -33.46875 C 55.144531 -33.050781 53.863281 -32.84375 52.4375 -32.84375 C 51 -32.84375 49.710938 -33.050781 48.578125 -33.46875 C 47.441406 -33.894531 46.453125 -34.40625 45.609375 -35 C 44.679688 -35.675781 43.796875 -36.429688 42.953125 -37.265625 L 35.375 -45.484375 L 35.375 -13.265625 C 35.375 -9.472656 34.085938 -6.3125 31.515625 -3.78125 C 28.953125 -1.257812 25.609375 0 21.484375 0 Z M 21.484375 0 " />
          </g>
        </g>
      </g>
      <g fill="#2c2a3f" fillOpacity="1">
        <g transform="translate(515.031181, 109.718949)">
          <g>
            <path d="M 21.484375 0 C 17.347656 0 13.992188 -1.257812 11.421875 -3.78125 C 8.859375 -6.3125 7.578125 -9.472656 7.578125 -13.265625 L 7.578125 -75.171875 C 7.578125 -78.960938 8.859375 -82.117188 11.421875 -84.640625 C 13.992188 -87.171875 17.347656 -88.4375 21.484375 -88.4375 L 60.640625 -88.4375 C 64.765625 -88.4375 68.113281 -87.171875 70.6875 -84.640625 C 73.257812 -82.117188 74.546875 -78.960938 74.546875 -75.171875 C 74.546875 -71.378906 73.257812 -68.21875 70.6875 -65.6875 C 68.113281 -63.164062 64.765625 -61.90625 60.640625 -61.90625 L 35.375 -61.90625 L 35.375 -56.859375 L 52.4375 -56.859375 C 54.289062 -56.859375 56.035156 -56.519531 57.671875 -55.84375 C 59.316406 -55.164062 60.726562 -54.257812 61.90625 -53.125 C 63.082031 -51.988281 64.007812 -50.660156 64.6875 -49.140625 C 65.363281 -47.628906 65.703125 -45.988281 65.703125 -44.21875 C 65.703125 -42.445312 65.363281 -40.800781 64.6875 -39.28125 C 64.007812 -37.769531 63.082031 -36.445312 61.90625 -35.3125 C 60.726562 -34.175781 59.316406 -33.269531 57.671875 -32.59375 C 56.035156 -31.914062 54.289062 -31.578125 52.4375 -31.578125 L 35.375 -31.578125 L 35.375 -26.53125 L 60.640625 -26.53125 C 64.765625 -26.53125 68.113281 -25.265625 70.6875 -22.734375 C 73.257812 -20.210938 74.546875 -17.054688 74.546875 -13.265625 C 74.546875 -9.472656 73.257812 -6.3125 70.6875 -3.78125 C 68.113281 -1.257812 64.765625 0 60.640625 0 Z M 21.484375 0 " />
          </g>
        </g>
      </g>
    </svg>
  );
};

const sesame = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="30"
      zoomAndPan="magnify"
      viewBox="0 0 375 374.999991"
      height="30"
      preserveAspectRatio="xMidYMid meet"
      version="1.0"
    >
      <path
        fill="#2c2a3f"
        d="M 187.597656 0.828125 C 187.402344 0.828125 187.175781 0.828125 186.949219 0.863281 C 185.652344 0.992188 184.421875 1.511719 183.417969 2.386719 C 183.417969 2.386719 169.058594 14.828125 154.671875 32.71875 C 140.28125 50.640625 125.277344 74.007812 125.277344 97.925781 C 125.277344 143.261719 158.625 168.898438 187.5 168.898438 C 216.375 168.898438 249.753906 143.261719 249.753906 97.925781 C 249.753906 74.007812 234.75 50.640625 220.363281 32.71875 C 205.972656 14.828125 191.582031 2.386719 191.582031 2.386719 C 190.480469 1.414062 189.089844 0.863281 187.597656 0.828125 Z M 19.335938 124.597656 C 11.75 124.628906 6.988281 124.984375 6.988281 124.984375 C 3.910156 125.179688 1.445312 127.640625 1.21875 130.722656 C 1.21875 130.722656 -0.175781 149.710938 2.320312 172.527344 C 4.785156 195.34375 10.746094 222.5 27.664062 239.417969 C 59.714844 271.46875 101.425781 265.992188 121.839844 245.574219 C 142.257812 225.125 147.703125 183.480469 115.617188 151.398438 C 98.734375 134.511719 71.609375 128.582031 48.792969 126.085938 C 37.386719 124.855469 26.917969 124.5625 19.335938 124.597656 Z M 355.664062 124.597656 C 348.050781 124.597656 337.613281 124.855469 326.207031 126.085938 C 303.390625 128.582031 276.234375 134.511719 259.316406 151.398438 C 227.265625 183.480469 232.742188 225.125 253.160156 245.574219 C 273.609375 265.992188 315.285156 271.46875 347.335938 239.417969 C 364.253906 222.5 370.214844 195.34375 372.679688 172.527344 C 375.175781 149.710938 373.78125 130.722656 373.78125 130.722656 C 373.554688 127.640625 371.089844 125.179688 368.011719 124.984375 C 368.011719 124.984375 363.25 124.628906 355.664062 124.597656 Z M 187.597656 206.101562 C 187.402344 206.101562 187.175781 206.132812 186.949219 206.132812 C 185.652344 206.265625 184.421875 206.78125 183.417969 207.65625 C 183.417969 207.65625 169.058594 220.136719 154.671875 238.023438 C 140.28125 255.914062 125.277344 279.28125 125.277344 303.195312 C 125.277344 348.535156 158.625 374.171875 187.5 374.171875 C 216.375 374.171875 249.753906 348.535156 249.753906 303.195312 C 249.753906 279.28125 234.75 255.914062 220.363281 238.023438 C 205.972656 220.136719 191.582031 207.65625 191.582031 207.65625 C 190.480469 206.6875 189.089844 206.132812 187.597656 206.101562 "
        fillOpacity="1"
        fill-rule="nonzero"
      />
    </svg>
  );
};
export type AccountDetails = {
  avatar: string;
  name: string;
  balance?: number;
};

interface AccountProps {
  account_details: AccountDetails;
}

export const Account: React.FunctionComponent<
  React.PropsWithChildren<AccountProps>
> = (props) => {
  const { account_details } = props;
  const { address } = useWallet();

  return (
    <div>
      <div className={styles.account_header}>
        <svg viewBox="0 0 100 80" width="18" height="18">
          <rect width="100" height="20"></rect>
          <rect y="30" width="100" height="20"></rect>
          <rect y="60" width="100" height="20"></rect>
        </svg>
        <div style={{ marginTop: 10 }}>{sesameLogo()}</div>
        <div>{sesame()}</div>
      </div>
    </div>
  );
};
