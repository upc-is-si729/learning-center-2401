export class SignInResponse {
  public id: number;
  public username: string;
  public token: string;

  constructor(id: number, username: string, token: string) {
    this.token = token;
    this.username = username;
    this.id = id;
  }
}
