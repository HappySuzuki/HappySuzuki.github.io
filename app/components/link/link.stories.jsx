import { Link } from '~/components/link';
import { StoryContainer } from '../../../.storybook/story-container';

export default {
  title: 'Link',
};

export const Default = () => (
  <StoryContainer style={{ fontSize: 18 }}>
    <Link href="https://Kaiw.com">Primary link</Link>
    <Link secondary href="https://Kaiw.com">
      Secondary link
    </Link>
  </StoryContainer>
);
