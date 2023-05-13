/* eslint-disable no-unused-vars */
// eslint-disable-next-line react/prop-types
const TabItem = ({ active, onClick, children }) => {
  return (
    <button
      className={`p-4 text-2xl text-red-500 font-bold ${
        active && "border-b-2 border-b-white text-green-500 transition-all delay-75"
      }`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default TabItem;
