/* eslint-disable react/prop-types */

const TabContent = ({ active, children }) => {
  return active ? <div>{children}</div> : null;
};

export default TabContent;
