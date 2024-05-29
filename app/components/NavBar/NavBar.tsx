import { Linkedin,Mail, Github } from "lucide-react";
function NavBar() {
  return (
    <header className=" fixed left-0 top-0 z-10">
      <nav className="flex items-start flex-col justify-between w-40 h-screen p-4">
        <div className="flex flex-col gap-4">
          <h1 className="text-3xl font-bold">Etheve Fabien</h1>
          <ul className="flex flex-col gap-2">
            <li>
              <a href="#about" className="hover:underline">A propos</a>
            </li>
            <li>
              <a href="#projects" className="hover:underline">Projets</a>
            </li>
            <li>
              <a href="mailto:fabienethevepro@gmail.com" className="hover:underline">Contacts</a>
            </li>
          </ul>
          <div className="flex flex-wrap flex-col gap-2">
            <a href="https://www.linkedin.com/in/fabien-etheve-7125a0226/" target="_blank"><Linkedin/></a>
            <a href="mailto:fabienethevepro@gmail.com"><Mail/></a>
            <a href="https://github.com/scotty974" target="_blank"><Github/></a>
          </div>
        </div>

        <p className="text-sm">© 2022 Etheve Fabien. Tous droits réservés.</p>
      </nav>
    </header>
  );
}

export default NavBar;
