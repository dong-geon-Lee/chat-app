export interface UserProps {
  id?: string;
  name?: string;
  email?: string;
  password?: string;
  avatar?: string;
}

export interface ChatProps {
  id?: string;
  users?: string[];
  hostUserId?: string;
  hostUserEmail?: string;
  chatRoomName?: string;
  timestamp?: object;
  find?: Function;
}
