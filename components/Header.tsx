import Image from "next/image";
import Link from "next/link";
import { GoBell, GoSearch } from "react-icons/go";

const Header: React.FC = () => {
	return (
		<header>
			<div className="header__wrapper">
				<div className="header__first-menu">
					<div className="header__logo">
						<Image
							src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
							alt="logo"
							layout="fill"
						/>
					</div>
					<ul>
						<li className="active">
							<Link href="">
								<a>Home</a>
							</Link>
						</li>
						<li>
							<Link href="">
								<a>TV Shows</a>
							</Link>
						</li>
						<li>
							<Link href="">
								<a>Movies</a>
							</Link>
						</li>
						<li>
							<Link href="">
								<a>New & Popular</a>
							</Link>
						</li>
						<li>
							<Link href="">
								<a>My List</a>
							</Link>
						</li>
						<li>
							<Link href="">
								<a>Browse by Languages</a>
							</Link>
						</li>
					</ul>
				</div>
				<div className="header__second-menu">
					<button className="header__btn">
						<GoSearch size={20} />
					</button>
					<GoBell size={20} />
					<div className="header__profile">
						<div className="header__account"></div>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
