import React from 'react';
import {ReloadInstructions} from 'react-native/Libraries/NewAppScreen';
import Section from './Section';

export default function Section2() {
  return (
    <Section title="See Your Changes">
      <ReloadInstructions />
    </Section>
  );
}
