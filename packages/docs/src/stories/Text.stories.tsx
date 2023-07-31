import type { StoryObj, Meta } from '@storybook/react'
import { Text, TextProps } from '@ignite-ui/react'

export default {
  title: 'Typography/Text',
  component: Text,
  tags: ['autodocs'],
  args: {
    children:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam optio autem suscipit asperiores nam doloremque temporibus cupiditate illo ducimus explicabo cumque aut, aliquam ipsa ipsam maxime, quam facere sint fugiat!',
  },
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}

export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: 'Strong text',
    as: 'strong',
  },
}
