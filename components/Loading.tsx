import "../styles/loading.css"

type Props = {
  message: string
}

const Loading = ({ message }: Props) => {
  return (
    <div className="flex flex-col items-center justify-center gap-2 rounded-2xl border border-white/10 bg-(--colors-cdtDarkBlue)/80 p-6 shadow-lg">
      <p className="text-lg font-semibold text-(--colors-cdtLightBlue)">{message}</p>
      
      
      <div className="mt-2 h-1 w-32 overflow-hidden rounded-full bg-white/10">
        <div className="loading-progress-bar"></div>
      </div>
    </div>
  )
}

export default Loading
