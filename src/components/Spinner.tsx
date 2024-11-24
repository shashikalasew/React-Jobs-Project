import React from 'react';
import ClipLoader from 'react-spinners/ClipLoader';

const override: React.CSSProperties = {
  display: 'block',
  margin: '100px auto',
};

interface SpinnerProps {
  loading: boolean;
}

const Spinner: React.FC<SpinnerProps> = ({ loading }) => {
  return (
    <ClipLoader 
      color="#4338ca" 
      loading={loading} 
      cssOverride={override} 
      size={150} 
    />
  );
};

export default Spinner;
