import type { Meta, StoryObj } from '@storybook/react'
import MessageDisplay from './MessageDisplay'

const meta = {
  title: 'Layout/Display',
  component: MessageDisplay,
  parameters: {
    layout: 'padded'
  },
  tags: ['autodocs']
} satisfies Meta<typeof MessageDisplay>

export default meta
type Story = StoryObj<typeof meta>

export const Main: Story = {
  args: {
    messages: [
      {
        id: '1',
        text: 'Text sent by myself',
        timestamp: new Date(),
        isSent: true
      },
      {
        id: '2',
        text: 'Text sent by a friend',
        timestamp: new Date(),
        isSent: false
      }
    ]
  }
}
