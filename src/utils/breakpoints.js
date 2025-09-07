// breakpoints.js
export const size = {
  mobile: '320px',
  tablet: '743.98px',
  laptop: '1024px',
  desktop: '1439.98px',
};

export const device = {
  mobile: `(max-width: ${size.mobile})`,
  tablet: `(max-width: ${size.tablet})`,
  laptop: `(max-width: ${size.laptop})`,
  desktop: `(max-width: ${size.desktop})`,
};

export const range = {
  mobileToTablet: `(min-width: ${size.mobile}) and (max-width: ${size.tablet})`,
  tabletToDesktop: `(min-width: 744px) and (max-width: ${size.desktop})`,
  fromDesktop: `(min-width: 1440px)`,
};
