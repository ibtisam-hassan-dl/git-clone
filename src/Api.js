import {
  ApolloClient,
  InMemoryCache,
  gql,
  ApolloProvider,
} from "@apollo/client";
import { useQuery } from "@apollo/client";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar2 from "./Navbar2.js";
import Navbar from "./Navbar.js";
import "./Navbar.css";

const client = new ApolloClient({
  uri: "https://api.github.com/graphql",
  cache: new InMemoryCache(),
  headers: {
    Authorization: `Bearer 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`,
  },
});

const GET_USER_DATA = gql`
  query {
    user(login: "basilmeer") {
      name
      login
      bio
      avatarUrl
      location
      email
      websiteUrl
      repositories(first: 100) {
        nodes {
          name
          description
          url
        }
      }
      followers(first: 100) {
        nodes {
          name
          login
          avatarUrl
        }
      }
    }
  }
`;

function User() {
  const { loading, error, data } = useQuery(GET_USER_DATA);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :/</p>;

  const {
    name,
    login,
    bio,
    avatarUrl,
    location,
    email,
    websiteUrl,
    repositories,
    followers,
  } = data.user;

  return (
    <>
      <Navbar2 />
      <Navbar />
      <div class="container-fluid">
        <div class="row">
          <div class="col-3">
            <div className="profile-div">
              <img
                src={avatarUrl}
                alt={name}
                className="img-fluid rounded-circle mb-3 profileImg"
              />
              <div>
                <h1 className="mb-0 fs-3">{name}</h1>
                <h2 className="text-muted fs-5">{login}</h2>
                <p className="lead fs-5">{bio}</p>
                <h3 className="lead fs-6">
                  Followers: {followers.nodes.length}
                </h3>
                <ul className="list-unstyled">
                  {location && (
                    <li>
                      <i className="bi bi-geo-alt-fill"></i> {location}
                    </li>
                  )}
                  {email && (
                    <li>
                      <i className="bi bi-envelope-fill"></i> {email}
                    </li>
                  )}
                  {websiteUrl && (
                    <li>
                      <a
                        href={websiteUrl}
                        className="btn btn-primary"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="bi bi-link-45deg"></i> {websiteUrl}
                      </a>
                    </li>
                  )}
                </ul>
              </div>
            </div>
          </div>
          <div class="col-9">
            <div className="repo-div">
              <h2 className="mb-3">Repositories:</h2>
              {/* <ul className="list-group mb-4">
                {repositories.nodes.map((repo) => (
                  <li key={repo.name} className="list-group-item">
                    <a href={repo.url}>{repo.name}</a>: {repo.description}
                  </li>
                ))}
              </ul> */}
              <div className="container-fluid">
                <div className="row">
                  {repositories.nodes.map((repo) => (
                    <div className="col-6" style={{ marginBottom: "10px" }}>
                      <div class="card" style={{ minHeight: "10rem" }}>
                        <div class="card-body">
                          <h5 class="card-title">{repo.name}</h5>
                          <p class="card-text">{repo.description}</p>
                          <a href={repo.url} class="btn btn-primary">
                            Open Repo
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function App() {
  return (
    <ApolloProvider client={client}>
      <User />
    </ApolloProvider>
  );
}

export default App;
