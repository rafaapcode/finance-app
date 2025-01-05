
type ContentTitleProps = {
  title: string;
}

function ContentTitle({title}: ContentTitleProps) {
  return (
    <p className="text-xl text-center">{title}</p>
  )
}

export default ContentTitle
