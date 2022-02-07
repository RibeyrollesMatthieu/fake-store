export interface I_addressState {
  readonly city: string;
  readonly street: string;
  readonly number: string;
  readonly zipcode: string;
  readonly geolocation?: {
    readonly lat: string;
    readonly long: string;
  }
}

export interface I__userDataState {
  readonly name: {
    readonly firstname: string;
    readonly lastname: string;
  }
  readonly email: string;
  readonly username: string;
  readonly address?: I_addressState,
  readonly phone?: string;
}

export interface I_userState {
  data: I__userDataState;
}