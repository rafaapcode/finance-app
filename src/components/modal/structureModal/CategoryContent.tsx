type CategoryContentProps = {
  children: React.ReactNode;
}

function CategoryContent({children}: CategoryContentProps) {
  return (
    <div className="grid grid-cols-2 gap-2 mt-4">
      {children}
    </div>
  )
}

export default CategoryContent
