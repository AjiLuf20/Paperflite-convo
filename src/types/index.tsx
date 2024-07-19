export interface Member {
  name: string;
  lastViewed: string;
  image: string;
}

export interface Information {
  title: string;
  assets: string;
  recipients: string;
  emailOpenRate: string;
  contentClickRate: string;
  totalTimeSpent: string;
  dealValue: string;
}

export interface IUser {
  id: string;
  name: string;
  title: string;
  createdDate: number;
  image: string;
  lastActivity?: number;
  timeSpent?: number;
  members: Member[];
  information: Information;
}

export interface IDatabase {
  users: IUser[];
}
