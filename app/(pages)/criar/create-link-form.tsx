'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

import { sanitizeLink } from '../../lib/utils'
import { Button } from '@/components/ui/button'
import { TextInput } from '@/components/ui/text-input'
import { verifyLink } from '../../actions/verify-link'
import { createLink } from '../../actions/create-link'

export  function CreateLinkForm() {
  const router = useRouter()

  const [link, setLink] = useState('')
  const [error, setError] = useState('')

  function handleLinkChange(e: React.ChangeEvent<HTMLInputElement>) {
    setLink(sanitizeLink(e.target.value))
    setError('')
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    if (link.length === 0) return setError('Escolha um link primeiro :)')

    const isLinkTaken = await verifyLink(link)

    if (isLinkTaken) return setError('Desculpe, esse link já está em uso.')

    const isLinkCreated = await createLink(link)

    if (!isLinkCreated)
      return setError('Erro ao criar o perfil. Tente novamente.')

    router.push(`/${link}`)
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="w-full flex items-center gap-2">
        <span>projectinbio.com/</span>
        <TextInput value={link} onChange={handleLinkChange} />
        <Button className="w-[126px]">Criar</Button>
      </form>
      <div>
        <span className="text-accent-pink">{error}</span>
      </div>
    </>
  )
}
