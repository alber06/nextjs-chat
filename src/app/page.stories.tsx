import type { Meta, StoryObj } from '@storybook/react'
import page from './page'

const meta = {
  title: 'Pages/Main',
  component: page,
  parameters: {
    layout: 'padded'
  },
  tags: ['autodocs']
} satisfies Meta<typeof page>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {}
}
