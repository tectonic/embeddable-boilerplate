/*
 * This is a simple container that adds a little styling around the components
 *
 * You can delete this folder once you move to Vanilla Components post-Onboarding
 */
import React from 'react';

type Props = {
  children: React.ReactNode;
};

const Container: React.FC<Props> = (props) => {
  const { children } = props;

  const styles: React.CSSProperties = {
    backgroundColor: 'transparent',
    border: '1px solid #ddd',
    borderRadius: '10px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    boxSizing: 'border-box',
    height: '100%',
    padding: '20px',
  };

  return <div style={styles}>{children}</div>;
};

export default Container;
