import PostsRepository from "./InfoRepository";


const repositories = {
  info: PostsRepository,
  // other repositories ...
};

export const RepositoryFactory = {
  get: name => repositories[name]
};