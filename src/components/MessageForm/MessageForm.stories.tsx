import type { Meta, StoryObj } from '@storybook/react'
import MessageForm from './MessageForm'

const meta = {
  title: 'Layout/Form',
  component: MessageForm,
  parameters: {
    layout: 'padded'
  },
  tags: ['autodocs']
} satisfies Meta<typeof MessageForm>

export default meta
type Story = StoryObj<typeof meta>

export const Connected: Story = {
  args: {
    setMessages: () => {},
    isConnected: true
  }
}

export const Disconnected: Story = {
  args: {
    setMessages: () => {},
    isConnected: false
  }
}
