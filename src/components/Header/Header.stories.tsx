import type { Meta, StoryObj } from '@storybook/react'
import Header from './Header'

const meta = {
  title: 'Layout/Header',
  component: Header,
  parameters: {
    layout: 'padded'
  },
  tags: ['autodocs']
} satisfies Meta<typeof Header>

export default meta
type Story = StoryObj<typeof meta>

export const Connected: Story = {
  args: {
    isConnected: true
  }
}

export const Disconnected: Story = {
  args: {
    isConnected: false
  }
}
