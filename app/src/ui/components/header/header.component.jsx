import { useLogout } from '../../../hook/useLogout/useLogout.hook';
import { Container } from '../../index';
import './header.style.css';

export function Header() {
  const { handleLogout } = useLogout();

  return (
    <header className="header">
      <Container>
        <div className="header-container">
          <nav>
            <ul className="menu">
              <li>
                <a href="/home" className="link-transition">
                  Início
                </a>
              </li>
              <li>
                <a href="/" className="link-transition" onClick={handleLogout}>
                  Logout
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </Container>
    </header>
  );
}
