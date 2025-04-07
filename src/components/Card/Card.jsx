/* eslint-disable react/prop-types */
import "./Card.css"

const Card = ({title , image}) => {
  return (
    <div className="card h-[200px] w-[450px] relative flex items-center justify-center overflow-hidden cursor-pointer bg-zinc-900 shadow-[2px_2px_2px_10px_black] rounded-2xl hover:shadow-none hover:border-[2px] hover:border-cyan-300">
      <h1 className="text-3xl bg-linear-90 from-blue-500 via-zinc-300 to-cyan-500 bg-clip-text text-transparent uppercase font-bold">{title}</h1>
      <div className="container h-[100%] w-full absolute top-[100%] transition-all duration-500 bg-linear-0 from-[rgba(121,205,220,0.486)] to-[rgba(12,17,20,0.495)] flex items-center justify-center">
        <img src={image} alt="" className="h-[90%]"/>
      </div>
    </div>
  )
}

export default Card