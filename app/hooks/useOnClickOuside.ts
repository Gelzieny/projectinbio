import { useEffect } from 'react'

export function useOnClickOutside(
  ref: React.RefObject<HTMLDivElement>,
  handler?: (event: MouseEvent | TouchEvent) => void
) {
  useEffect(() => {
    const listener = (event: MouseEvent | TouchEvent) => {
      if (!ref.current || ref.current.contains(event.target as Node)) {
        return
      }
      handler?.(event) // Apenas chama o handler se ele for definido
    }

    document.addEventListener('mousedown', listener)
    document.addEventListener('touchstart', listener)

    return () => {
      document.removeEventListener('mousedown', listener)
      document.removeEventListener('touchstart', listener)
    }
  }, [ref, handler]) // Adicione todas as dependências aqui
}
