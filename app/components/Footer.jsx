

export const Footer = () => {

  const today = new Date()
  const year = today.toLocaleString("default", {
    year: "numeric"
  })


  return (
    <footer className="h-12 grid place-items-center bg-gray-100 text-black text-sm">
        &copy; {year}&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;Taras Terry Babyuk&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;Strictly Web Dev
    </footer>
  )
}