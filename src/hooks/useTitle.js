import { useEffect } from 'react';

const useTitle = (title) => {
  useEffect(() => {
    document.title = `${title} - News 360`;
  }, [title]);
};

export default useTitle;
