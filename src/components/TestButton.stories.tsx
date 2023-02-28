import React from 'react'
import { type ComponentStory, type ComponentMeta } from '@storybook/react'
import TestButton from './TestButton'

const componentMeta: ComponentMeta<typeof TestButton> = {
  title: 'Example/Button',
  component: TestButton,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
}

export default componentMeta

const Template: ComponentStory<typeof TestButton> = args => (
  <TestButton {...args} />
)

export const Primary = Template.bind({})

Primary.args = {
  children: 'Test button',
}

export const Secondary = Template.bind({})

Secondary.args = {
  children: 'Test button',
  isSecondary: true,
}
