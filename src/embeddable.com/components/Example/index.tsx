import React from 'react';
import { useOverrideConfig } from '@embeddable.com/react';
import { Container, Theme } from 'vanilla-components';

// These props come from the associated .emb.ts file
type Props = {
  onChange: (v: string) => void;
  title?: string;
  value?: string;
  placeholder: string;
};

// We define this here because different components may pull in different overrides
type Overrides = {
  theme: Theme;
};

// The container component is a wrapper. It's not required but it includes things like the
// Download as CVS/PNG menu. We recommend using it around any charts/graphs/tables.
export default (props: Props) => {
  const overrides: Overrides = useOverrideConfig() as Overrides;

  // You can use the theme object to style your component
  const { theme } = overrides;

  return (
    <Container title={props.title}>
      <div className="w-full relative rounded-xl bg-white border border-[#DADCE1] pr-8 h-10">
        <span style={{ color: theme.brand.primary }}>Primary Brand Color!</span>
        <br />
        <span style={{ color: theme.brand.secondary }}>
          Secondary Brand Color!
        </span>
      </div>
    </Container>
  );
};
