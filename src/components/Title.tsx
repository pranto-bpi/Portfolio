type Props = {
     title:string
     className?: string;
}
const Title = ( {title, className}:Props) => {
  return <h2 className= {`text-3xl  font-bold cursor-pointer, ${className}`}>{title}</h2>
  
}

export default Title