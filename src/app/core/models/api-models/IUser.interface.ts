export interface IUser {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  firstArabicName: string;
  lastArabicName: string;
  displayName: string;
  permissionName: 'Admin' | 'User'  ;
  roles: [
    {
      id: number;
      permissionName: string;
    }
  ];
}