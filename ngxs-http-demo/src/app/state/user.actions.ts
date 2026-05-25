
export class FetchUsers {
  static readonly type = '[User] Fetch';
}

export class AddUser {
  static readonly type = '[User] Add';
  constructor(public payload: { name: string, email: string }) {}
}
