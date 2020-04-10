export class UserDTO {
    constructor(
        public UserId: number,
        public LastName: string,
        public FirstName: string,
        public UserType: string,
        public Email: string,
        public UserName: string,
        public Password: string) { }
}