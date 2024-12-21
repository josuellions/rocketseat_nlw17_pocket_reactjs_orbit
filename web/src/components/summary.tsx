import { Plus } from 'lucide-react'

import { DialogTrigger } from '@radix-ui/react-dialog'
import { Button } from './ui/button'
import { InOrbitIcon } from './in-orbit-icon'

export function Summary() {
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
    </div>
  )
}
