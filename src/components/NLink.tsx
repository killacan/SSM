import { Link } from "react-router";
import './Tailwind.css'

export default function NLink({to, text, color}: {to: string, text: string, color: string}) {
    // Define the full class names here
    const colorMap: Record<string, string> = {
        blue: 'bg-blue-600 hover:bg-blue-700',
        red: 'bg-red-600 hover:bg-red-700',
        lime: 'bg-lime-400 hover:bg-lime-500',
        pink: 'bg-pink-500 hover:bg-pink-600',
        indigo: 'bg-indigo-600 hover:bg-indigo-700',
        yellow: 'bg-yellow-400 hover:bg-yellow-500',
        green: 'bg-green-600 hover:bg-green-700',
    };

    // Fallback to blue if the color provided isn't in our map
    const colorClasses = colorMap[color] || colorMap.blue;

    const css = `w-full ${colorClasses} text-white font-bold py-3 px-4 rounded-xl transition-colors shadow-md text-center`;

    return (
        <Link className={css} to={to}>{text}</Link>
    )
}