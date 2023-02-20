/* eslint-disable no-undef, import/no-extraneous-dependencies */
import { configure } from '@testing-library/react-native';

// Import Jest Native matchers
import '@testing-library/jest-native/extend-expect';

import { enableFetchMocks } from 'jest-fetch-mock'

// Silence the warning: Animated: `useNativeDriver` is not supported because the native animated module is missing
jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');

enableFetchMocks()
// Enable excluding hidden elements from the queries by default
configure({
  defaultIncludeHiddenElements: false,
});
