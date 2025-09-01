import './drawermenu.scss'
import { LuHouse } from "react-icons/lu";
import { IoSearch } from "react-icons/io5";
import { FiCalendar } from "react-icons/fi";
import Link from 'next/link';

export default function DrawerMenu() {
    return (
        <>
            <nav className="navbar">
                <div className='navbar-container'>
                    <div className='navbar-icons'>
                        <Link className='/activitiespage' href="/">
                            <LuHouse />
                        </Link>
                        <Link className='/searchpage' href="/">
                            <IoSearch />
                        </Link>
                        <Link className='/calendarpage' href="/">
                            <FiCalendar />
                        </Link>
                    </div>
                </div>
            </nav>
        </>
    )
}