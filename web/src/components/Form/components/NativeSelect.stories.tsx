import { zodResolver } from '@hookform/resolvers/zod'
import type { Meta, StoryObj } from '@storybook/react'
import { z } from 'zod'
import { renderDecorator } from '../utils/storybook'
import { NativeSelect } from './NativeSelect'

const label = 'Browser'
const name = 'browser'
const options = [
  { label: 'Internet Explorer', value: 'ie' },
  { label: 'Firefox', value: 'firefox' },
  { label: 'Edge', value: 'edge' },
  { label: 'Chrome', value: 'chrome' },
  { label: 'Opera', value: 'opera' },
  { label: 'Safari', value: 'safari' },
]

const schema = z.object({
  browser: z.string().refine((value) => value !== 'ie', {
    message: 'Internet Explorer is not supported',
  }),
})

const resolver = zodResolver(schema)

const defaultValues = {
  browser: 'ie',
}

const meta: Meta<typeof NativeSelect> = {
  title: 'Components/Form/NativeSelect',
  component: NativeSelect,
  tags: ['autodocs'],
  argTypes: {},
}

export default meta
type Story = StoryObj<typeof NativeSelect>

export const Default: Story = {
  args: {
    label,
    name,
    options,
  },
  decorators: [(Story) => renderDecorator(Story, resolver, defaultValues)],
}

export const WithAsterisk: Story = {
  args: {
    label,
    name,
    options,
    withAsterisk: true,
  },
  decorators: [(Story) => renderDecorator(Story, resolver, defaultValues)],
}

export const ErrorMessage: Story = {
  args: {
    label,
    name,
    options,
    withAsterisk: true,
  },
  decorators: [
    (Story) => renderDecorator(Story, resolver, defaultValues, true),
  ],
}
