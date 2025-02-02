// components/MathComponent.js
import Image from 'next/image'
import React from 'react';
import 'katex/dist/katex.min.css';
import TeX from '@matejmazur/react-katex';

const MathComponent = ({ equation }) => {
  return <TeX math={equation} />;
};

export default MathComponent;
