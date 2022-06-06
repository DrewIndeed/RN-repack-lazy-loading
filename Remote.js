import throttle from 'lodash.throttle';
import React, {lazy, Suspense} from 'react';
import {Text, View} from 'react-native';
import {
  DebugInstructions,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const Section = lazy(() =>
  import(/* webpackChunkName: "andrew-section" */ './Section'),
);

export default function Remote() {
  throttle(() => {}, 0);
  return (
    <View>
      <Suspense fallback={<Text>Getting Remote ...</Text>}>
        <Section title="Step One">
          Edit <Text style={{fontWeight: '700'}}>App.js</Text> to change this
          screen and then come back to see your edits.
        </Section>
        <Section title="See Your Changes">
          <ReloadInstructions />
        </Section>
        <Section title="Debug">
          <DebugInstructions />
        </Section>
        <Section title="Learn More">
          Read the docs to discover what to do next:
        </Section>
        <LearnMoreLinks />
      </Suspense>
    </View>
  );
}
