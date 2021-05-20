import * as React from 'react';
import { MeControl } from './index';

export const MeControlExample = () => (
  <div style={{ display: 'flex' }}>
    <style>{`
      @font - face {
      font-family: 'Segoe UI';
      src: local('Segoe UI Light'),
      url(//c.s-microsoft.com/static/fonts/segoe-ui/west-european/light/latest.woff2) format('woff2'),
      url(//c.s-microsoft.com/static/fonts/segoe-ui/west-european/light/latest.woff) format('woff'),
      url(//c.s-microsoft.com/static/fonts/segoe-ui/west-european/light/latest.ttf) format('truetype');
      font-weight: 100;
    }

      @font-face {
      font-family: 'Segoe UI';
      src: local('Segoe UI Semilight'),
      url(//c.s-microsoft.com/static/fonts/segoe-ui/west-european/semilight/latest.woff2) format('woff2'),
      url(//c.s-microsoft.com/static/fonts/segoe-ui/west-european/semilight/latest.woff) format('woff'),
      url(//c.s-microsoft.com/static/fonts/segoe-ui/west-european/semilight/latest.ttf) format('truetype');
      font-weight: 200;
    }

      @font-face {
      font-family: 'Segoe UI';
      src: local('Segoe UI'),
      url(//c.s-microsoft.com/static/fonts/segoe-ui/west-european/normal/latest.woff2) format('woff2'),
      url(//c.s-microsoft.com/static/fonts/segoe-ui/west-european/normal/latest.woff) format('woff'),
      url(//c.s-microsoft.com/static/fonts/segoe-ui/west-european/normal/latest.ttf) format('truetype');
      font-weight: 400;
    }

      @font-face {
      font-family: 'Segoe UI';
      src: local('Segoe UI Semibold'),
      url(//c.s-microsoft.com/static/fonts/segoe-ui/west-european/semibold/latest.woff2) format('woff2'),
      url(//c.s-microsoft.com/static/fonts/segoe-ui/west-european/semibold/latest.woff) format('woff'),
      url(//c.s-microsoft.com/static/fonts/segoe-ui/west-european/semibold/latest.ttf) format('truetype');
      font-weight: 600;
    }

      @font-face {
      font-family: 'Segoe UI';
      src: local('Segoe UI Bold'),
      url(//c.s-microsoft.com/static/fonts/segoe-ui/west-european/bold/latest.woff2) format('woff2'),
      url(//c.s-microsoft.com/static/fonts/segoe-ui/west-european/bold/latest.woff) format('woff'),
      url(//c.s-microsoft.com/static/fonts/segoe-ui/west-european/bold/latest.ttf) format('truetype');
      font-weight: 700;
    }
    `}</style>
    <div style={{ padding: '20px' }}>
      <h2>Phase 1</h2>
      <MeControl />
    </div>
    <div style={{ padding: '20px' }}>
      <h2>Phase 2</h2>
      <MeControl enablePhase2 />
    </div>
  </div>
);

export default {
  title: 'MeControl',
  component: MeControl,
};
