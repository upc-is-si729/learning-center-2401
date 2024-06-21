export class SignUpResponse {
  public id: number;
  public username: string;

  constructor(id: number, username: string) {
    this.username = username;
    this.id = id;
  }
}
