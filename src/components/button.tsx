import type { ComponentProps } from 'react'

export function Button(props: ComponentProps<'button'>) {
  return (
    <button
      className="text-blue hover:bg-blue flex h-12 w-full cursor-pointer items-center justify-between rounded-xl bg-gray-500 px-5 font-semibold transition-colors duration-300 hover:text-gray-900"
      {...props}
    />
  )
}
