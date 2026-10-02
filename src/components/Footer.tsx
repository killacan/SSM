import './Tailwind.css'

export default function Footer() {

    return (
      <footer className="py-12 text-center bg-purple-100 border-t-8 border-purple-300">
        <p className="text-purple-800 font-black text-lg">
          🌈 Miss Sumer's Preschool &copy; {new Date().getFullYear()}
        </p>
      </footer>
    )
}