import { useMemo } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useQueryClient } from '@tanstack/react-query'
import { X } from 'lucide-react'
import { z } from 'zod'

import { Label } from './ui/label'
import { Input } from './ui/input'
import { Button } from './ui/button'
import { createGoal } from '../http/create-goal'
import {
  DialogContent,
  DialogTitle,
  DialogClose,
  DialogDescription,
} from './ui/dialog'
import {
  RadioGroup,
  RadioGroupItem,
  RadioGroupIndicator,
} from './ui/radio-group'

interface DayWeekProps {
  amount: number
  title: string
  icon: string
}

const createGoalForm = z.object({
  title: z.string().min(1, 'Informe a atividade que deseja cadastrar.'),
  desiredWeeklyFrequency: z.coerce.number().min(1).max(7),
})

type CreateGoalForm = z.infer<typeof createGoalForm>

export function CreateGoal() {
  const queryClient = useQueryClient()
  const { register, control, handleSubmit, formState, reset } =
    useForm<CreateGoalForm>({
      resolver: zodResolver(createGoalForm),
    })
  const daysWeek = useMemo<DayWeekProps[]>(() => {
    return [
      {
        title: '1x na semana',
        icon: '🥱',
        amount: 1,
      },
      {
        title: '2x na semana',
        icon: '🙂',
        amount: 2,
      },
      {
        title: '3x na semana',
        icon: '😎',
        amount: 3,
      },
      {
        title: '4x na semana',
        icon: '🤪',
        amount: 4,
      },
      {
        title: '5x na semana',
        icon: '😜',
        amount: 5,
      },
      {
        title: '6x na semana',
        icon: '🤯',
        amount: 6,
      },
      {
        title: 'Todos os dias da semana ',
        icon: '🔥',
        amount: 7,
      },
    ]
  }, [])

  async function handleCreateGoal(data: CreateGoalForm) {
    await createGoal({
      title: data.title,
      desiredWeeklyFrequency: data.desiredWeeklyFrequency,
    })

    queryClient.invalidateQueries({ queryKey: ['pending-goals'] })
    queryClient.invalidateQueries({ queryKey: ['summary'] })
    reset()
  }

  return (
    <DialogContent>
      <div className="flex flex-col gap-6 h-full">
        <div className="flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <DialogTitle>Cadastrar meta</DialogTitle>
            <DialogClose>
              <X className="size-5 text-zinc-600" />
            </DialogClose>
          </div>

          <DialogDescription>
            Adicione atividades que te fazem bem e que você quer continuar
            praticando toda semana.
          </DialogDescription>
        </div>

        <form
          onSubmit={handleSubmit(handleCreateGoal)}
          className="flex-1 flex flex-col justify-between"
        >
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-6">
              <Label htmlFor="title">Qual atividade?</Label>
              <Input
                autoFocus
                id="title"
                {...register('title')}
                placeholder="Praticar exercícios, meditar, etc..."
              />
              {formState.errors.title && (
                <span className="text-red-400 text-sm">
                  {formState.errors.title.message}
                </span>
              )}
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="semana">Quantas vezes na semana?</Label>
              <Controller
                control={control}
                defaultValue={1}
                name="desiredWeeklyFrequency"
                render={({ field }) => (
                  <RadioGroup
                    onValueChange={field.onChange}
                    value={String(field.value)}
                  >
                    {daysWeek.map(day => (
                      <RadioGroupItem key={day.amount} value={`${day.amount}`}>
                        <RadioGroupIndicator />
                        <span className="text-sm leading-none text-zinc-300 font-medium">
                          {day.title}
                        </span>
                        <span className="text-lg leading-none">{day.icon}</span>
                      </RadioGroupItem>
                    ))}
                  </RadioGroup>
                )}
              />
            </div>
          </div>
          <div className="flex items-center gap-3">
            <DialogClose asChild>
              <Button type="button" className="flex-1" variant="secondary">
                Fechar
              </Button>
            </DialogClose>
            <Button type="submit" className="flex-1">
              Salvar
            </Button>
          </div>
        </form>
      </div>
    </DialogContent>
  )
}
