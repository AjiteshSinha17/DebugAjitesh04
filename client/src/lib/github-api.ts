export interface GitHubRepository {
  id: number;
  name: string;
  description: string | null;
  language: string | null;
  stargazers_count: number;
  html_url: string;
  updated_at: string;
}

export interface GitHubUser {
  login: string;
  name: string;
  bio: string | null;
  avatar_url: string;
  html_url: string;
  location: string | null;
  email: string | null;
  public_repos: number;
  followers: number;
  following: number;
}

export const fetchGitHubUser = async (username: string): Promise<GitHubUser> => {
  const response = await fetch(`https://api.github.com/users/${username}`);
  if (!response.ok) {
    throw new Error(`Failed to fetch GitHub user: ${response.statusText}`);
  }
  return response.json();
};

export const fetchGitHubRepositories = async (username: string): Promise<GitHubRepository[]> => {
  const response = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=10`);
  if (!response.ok) {
    throw new Error(`Failed to fetch GitHub repositories: ${response.statusText}`);
  }
  return response.json();
};
