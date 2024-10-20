import SpinnerIcon from '@/components/icons/Spinner'

const loading = () => {
  return (
    <div className="flex h-[calc(100vh-250px)] w-screen items-center justify-center md:h-full md:w-full">
      <SpinnerIcon />
    </div>
  )
}

export default loading