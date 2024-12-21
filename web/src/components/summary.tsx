import dayjs from 'dayjs'
import pdBR from 'dayjs/locale/pt-br'

import { CheckCircle2, Plus } from 'lucide-react'

import { DialogTrigger } from '@radix-ui/react-dialog'
import { Button } from './ui/button'
import { InOrbitIcon } from './in-orbit-icon'
import { Progress, ProgressIndicator } from './ui/progress-bar'
import { Separator } from './ui/separator'
import { OutlineButton } from './ui/outline-button'
import { useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { getSummary } from '../http/get-summary'

dayjs.locale(pdBR)

interface GoalsProps {
  title: string
}

export function Summary() {
  const [goals, setGoals] = useState<GoalsProps[]>([
    { title: 'Meditar' },
    { title: 'Nadar' },
    { title: 'Praticar execícios' },
    { title: 'Ler livro' },
  ])

  const firstDayOfWeek = dayjs().startOf('week').format('D MMM')
  const lastDayOfWeek = dayjs().endOf('week').format('D MMM')

  const { data } = useQuery({
    queryKey: ['summary'],
    queryFn: getSummary,
    staleTime: 1000 * 60, //60 segundos
  })

  if (!data) {
    return
  }

  const completedPercentage = Math.round((data.completed * 100) / data.total)

  return (
    <div className="py-10 max-w-[480px] px-5 mx-auto flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <InOrbitIcon />
          <span className="text-lg font-semibold capitalize">
            {firstDayOfWeek} - {lastDayOfWeek}
          </span>
        </div>
        <DialogTrigger asChild>
          <Button>
            <Plus className="size-5" />
            Cadastrar meta
          </Button>
        </DialogTrigger>
      </div>

      <div className="flex flex-col gap-3">
        <Progress max={data.total} value={data.completed}>
          <ProgressIndicator style={{ width: `${completedPercentage}px` }} />
        </Progress>

        <div className="flex items-center justify-between text-xs text-zinc-400">
          <span>
            Você completou{' '}
            <span className="text-zinc-100">{data?.completed}</span> de{' '}
            <span className="text-zinc-100">{data?.total}</span> metas nessa
            semana.
          </span>
          <span>{completedPercentage}%</span>
        </div>

        <Separator />

        <div className="flex gap-3 flex-wrap">
          {goals.map(goal => (
            <OutlineButton key={goal.title}>
              <Plus className="size-4 text-zinc-600" />
              {goal.title}
            </OutlineButton>
          ))}
        </div>

        <div className="flex flex-col gap-6">
          <h2>Sua semana</h2>
          {Object.entries(data.goalsPerDay).map(([date, goals]) => (
            <div className="flex flex-col gap-4" key={date}>
              <h3 className="font-medium">
                <span className="capitalize">{dayjs(date).format('dddd')}</span>{' '}
                <span className="text-zinc-400 text-xs">
                  ({dayjs(date).format('d[ de ] MMMM')})
                </span>
              </h3>
              <ul className="flex flex-col gap-3">
                {goals.map(goal => (
                  <li className="flex items-center gap-2" key={goal.id}>
                    <CheckCircle2 className="size-4 text-pink-500" />
                    <span className="text-sm text-zinc-400">
                      Você completou "
                      <span className="text-zinc-100">{goal.title}</span>" às{' '}
                      <span className="text-zinc-100">
                        {dayjs(goal.completedAt).format('HH:mm')}h
                      </span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
