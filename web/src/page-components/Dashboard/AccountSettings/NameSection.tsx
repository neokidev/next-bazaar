import { TextInput, useForm } from '@/components/Form'
import { User } from '@/features/auth'
import { useUpdateUser } from '@/features/user'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button, Flex, rem } from '@mantine/core'
import { z } from 'zod'

interface NameSectionProps {
  user: User
  isCurrentUserTestUser: boolean
  saving: boolean
  onSubmit?: () => void
  onSubmitSuccess?: () => void
}

export function NameSection({
  user,
  isCurrentUserTestUser,
  saving,
  onSubmit,
  onSubmitSuccess,
}: NameSectionProps) {
  const schema = z.object({
    name: z.string().min(1, { message: 'Required' }),
  })

  const updateUserMutation = useUpdateUser({
    onSuccess: onSubmitSuccess,
    onError: (error) => {
      throw new Error(error.message)
    },
  })

  const [Form] = useForm<{
    name: string
  }>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: user.name,
    },
    onSubmit: (data) => {
      updateUserMutation.mutate({ data: { ...user, ...data } })
      onSubmit?.()
    },
  })

  return (
    <Form>
      <Flex gap="md" align="end" maw={rem(392)}>
        <div style={{ flex: 1 }}>
          <TextInput
            label="Username"
            name="name"
            disabled={isCurrentUserTestUser}
          />
        </div>
        <Button
          type="submit"
          color="dark"
          disabled={isCurrentUserTestUser || saving}
        >
          Save
        </Button>
      </Flex>
    </Form>
  )
}
