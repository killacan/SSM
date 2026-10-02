import './Tailwind.css'
import { Link } from "react-router";
import NLink from "./NLink";

export default function Header() {

    return (
        <div className="sticky top-0 z-50 bg-sky-50">
            <nav className="flex p-4 max-w-7xl w-full justify-stretch mx-auto">
                <Link to="/" className="flex-none font-bold mx-auto">Miss Sumer's Preschool</Link>
                <ul className="flex-auto flex justify-end gap-4 mx-auto">
                    <li>
                        <NLink to="/" text="Home" color="indigo" />
                    </li>
                    <li>
                        <NLink to="/about" text="About Me" color="red"/>
                    </li>
                    {/* <li>
                        <NLink to="/curriculum" text="Curriculum" color="green" />
                    </li>                 */}
                    <li>
                        <NLink to="/contact" text="Contact Me" color="yellow" />
                    </li>
                    {/* <li>
                        <p>Facebook</p>
                    </li> */}
                </ul>
            </nav>
        </div>
    )
}