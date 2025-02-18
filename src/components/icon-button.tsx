import type { ComponentProps } from 'react'

export function IconButton(props: ComponentProps<'button'>) {
  return (
    <button
      className="text-blue hover:bg-blue cursor-pointer rounded-md bg-gray-500 p-1.5 transition-colors duration-300 hover:text-gray-900"
      {...props}
    />
  )
}
