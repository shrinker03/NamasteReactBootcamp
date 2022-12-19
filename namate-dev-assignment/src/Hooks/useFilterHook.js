// import { useEffect, useState } from 'react';

const useFilterHook = (toFilter, filterFrom, data) => {
  //   const [latestarr, setLatestarr] = useState([]);
  const latestarr = [];
  for (let i = 0; i < data.length; i += 1) {
    if (data[i][filterFrom]?.trim().toLowerCase().includes(toFilter?.trim().toLowerCase())) {
      latestarr.push(data[i]);
      // setLatestarr(...latestarr, data[i]);
    }
  }
  return latestarr;
};

export default useFilterHook;
