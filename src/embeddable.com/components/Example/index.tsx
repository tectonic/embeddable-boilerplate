import React from 'react';
import { useTheme } from '@embeddable.com/react';
import { Container, Theme } from '@embeddable.com/vanilla-components';

// These props come from the associated .emb.ts file
type Props = {
  onChange: (v: string) => void;
  title?: string;
  value?: string;
  placeholder: string;
};

// The container component is a wrapper. It's not required but it includes things like
// the Download as CVS/PNG menu. We recommend using it around any charts/graphs/tables.
const ExampleComponent: React.FC<Props> = (props) => {
  // You can use the theme object to style your component
  const theme: Theme = useTheme() as Theme;

  return (
    <Container title={props.title}>
      <div>
        <span style={{ color: theme.brand.primary }}>Primary Brand Color!</span>
        <br />
        <span style={{ color: theme.brand.secondary }}>
          Secondary Brand Color!
        </span>
      </div>
    </Container>
  );
};

export default ExampleComponent;
