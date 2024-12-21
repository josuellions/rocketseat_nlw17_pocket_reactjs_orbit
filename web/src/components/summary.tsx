import { Plus } from 'lucide-react'

import { DialogTrigger } from '@radix-ui/react-dialog'
import { Button } from './ui/button'
import { InOrbitIcon } from './in-orbit-icon'
import { Progress, ProgressIndicator } from './ui/progress-bar'
import { Separator } from './ui/separator'
import { OutlineButton } from './ui/outline-button'
import { useState } from 'react'

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
  return (
    <div className="py-10 max-w-[480px] px-5 mx-auto flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <InOrbitIcon />
          <h2>5 a 10 de Agosto</h2>
        </div>
        <DialogTrigger asChild>
          <Button>
            <Plus className="size-5" />
            Cadastrar meta
          </Button>
        </DialogTrigger>
      </div>

      <div className="flex flex-col gap-3">
        <Progress max={15} value={8}>
          <ProgressIndicator style={{ width: '8px' }} />
        </Progress>

        <div className="flex items-center justify-between text-xs text-zinc-400">
          <span>
            Você completou <span className="text-zinc-100">8</span> de{' '}
            <span className="text-zinc-100">15</span> metas nessa semana.
          </span>
          <span>58%</span>
        </div>

        <Separator />

        <div className="flex gap-3 flex-wrap">
          {goals.map((goal, index) => (
            <OutlineButton key={`${index}`}>
              <Plus className="size-4 text-zinc-600" />
              {goal.title}
            </OutlineButton>
          ))}
        </div>
      </div>
    </div>
  )
}
