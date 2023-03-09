import defaultAvatar from '../../../assets/default_avatar.jpg';
import { LinkButton } from '../linkButton/linkButton.component';
export function PostModel({ posts }) {
  return posts.map(
    ({
      curtidas,
      dataPublicacao,
      statusVisualizacao,
      texto,
      nomePublicador,
      imagemPublicador,
      id,
    }) => {
      return (
        <div key={id}>
          <div className="data-ajust">
            <div className="avatar-area">
              <img
                src={imagemPublicador || defaultAvatar}
                alt={nomePublicador}
              />
              <h3>{nomePublicador}</h3>
              <LinkButton
                link={`/comentarios/${id}`}
                linkButtonName="Ver comentários"
              />
            </div>
            <div className="user-data">
              <p>Curtidas: {curtidas}</p>
              <p>Data da publicação: {dataPublicacao}</p>
              <p>Status: {statusVisualizacao}</p>
              <h2>Publicação</h2>
              <div className="text-config">
                <p>{texto}</p>
              </div>
            </div>
          </div>
        </div>
      );
    }
  );
}
