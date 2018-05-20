const dropDown = (active) => ({
  display: active ? 'block' : 'none',
  width: '200px',
  position: 'absolute',
  right: `${12}px`,
  top: `${12}px`,
  margin: '0',
  lineHeight: '12px',
  background: 'rgb(164, 212, 159)',
  boxShadow: `0px 8px 16px 0px rgba(0,0,0,0.2)`,
  zIndex: 4,
});

const li = {
  padding: '12px',
};

const liSpan = {
  color: 'black'
};

const dropDownItemIcon = (color) => ({
  marginTop: '-6px',
  color: color,
});

export default {
  dropDown,
  li,
  liSpan,
  dropDownItemIcon,
};