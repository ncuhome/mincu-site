const StackBlitz = ({
  src,
  url
}) => {
  return (
    <iframe 
      src={src || url}
      height={500}
      width="100%"
    />
  )
}


export default StackBlitz