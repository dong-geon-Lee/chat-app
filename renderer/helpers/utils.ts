import { NextRouter } from "next/router";
import { ChatProps, UserProps } from "../@types/types";

export const formattedDates = () => {
  const formattedDate = new Intl.DateTimeFormat("ko-KR").format(new Date());
  const dates = formattedDate.split(".");
  const years = dates[0] + "년";
  const month = dates[1] + "월";
  const days = dates[2] + "일";

  return `${years}${month}${days}`;
};

export const findCurChatRoom = (chatRooms: ChatProps, id: string) => {
  return chatRooms?.find((item: ChatProps) => item.id === id);
};

export const formattedPath = (router: NextRouter) => {
  const pathString = router.pathname.split("/")[1];
  const pathName = pathString.slice(0, 1).toUpperCase() + pathString.slice(1);
  return pathName;
};

export const generateId = (id: string) => {
  const createdId = id + Math.floor(Math.random() * 10000);
  return createdId;
};

export const findCurUser = (userLists: UserProps[], authUserId: string) => {
  return userLists?.filter((x: UserProps) => x.id === authUserId) || [];
};

export const findOtherUsers = (userLists: UserProps[], authUserId: string) => {
  return userLists?.filter((x: UserProps) => x.id !== authUserId);
};

export const existChatRoomUser = (chatUsers: string[], email: string) => {
  return chatUsers.find((x: string) => x === email);
};

export const findChatRooms = (chatRooms: ChatProps[], userInfo: UserProps) => {
  return (
    chatRooms?.filter(
      (chatRooms: ChatProps) => chatRooms?.hostUserId === userInfo?.id
    ) || []
  );
};

export const findSharedRoom = (chatRooms: ChatProps[], userInfo: UserProps) => {
  return (
    chatRooms?.filter((x: ChatProps) => x.users?.includes(userInfo?.email)) ||
    []
  );
};

export const checkAuthUser = (
  users: UserProps[],
  email: string,
  password: string
) => {
  return users?.find(
    (user) => user.email === email && user.password === password
  );
};

export const option = {
  snapshotListenOptions: { includeMetadataChanges: true },
};
