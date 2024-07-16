



export const Footer = () => {

const today = new Date()
const year = today.toLocaleString("default", {
    year: "numeric"
})


  return (
        <footer className="h-12 grid place-items-center bg-gray-950 text-gray-50 text-sm">
            &copy; {year}&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;Taras Terry Babyuk
        </footer>  
    )
}
