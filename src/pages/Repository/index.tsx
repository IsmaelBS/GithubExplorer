import React from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { Header, RepositoryInfo, Issues } from './styles';
import logo from '../../assets/logo.svg';

interface RouteParams {
  repository: string;
}
const Repository: React.FC = () => {
  const { params } = useRouteMatch<RouteParams>();
  return (
    <>
      <Header>
        <img src={logo} alt="Github Explorer" />
        <Link to="/">
          Voltar <FiChevronLeft size={20} />
        </Link>
      </Header>

      <RepositoryInfo>
        <header>
          <img
            src="https://avatars0.githubusercontent.com/u/20816966?s=460&u=406fbc6ababf2c82038fd1e8a67b8e20b1eb8887&v=4"
            alt="Rocketseat"
          />
          <div>
            <strong>Rocketseat/unform</strong>
            <p>Descrição do repositório</p>
          </div>
        </header>
        <ul>
          <li>
            <strong>1808</strong>
            <span>Stars</span>
          </li>
          <li>
            <strong>48</strong>
            <span>Forks</span>
          </li>
          <li>
            <strong>67</strong>
            <span>Issues Abertas</span>
          </li>
        </ul>
      </RepositoryInfo>

      <Issues>
        <Link to="kdjkaj">
          <div>
            <strong>hsjdhasjda</strong>
            <p>jhjshjsd</p>
          </div>
          <FiChevronRight size={20} />
        </Link>
      </Issues>
    </>
  );
};

export default Repository;
