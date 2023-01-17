export const option = {
  snapshotListenOptions: { includeMetadataChanges: true },
};

export const formattedDates = () => {
  const formattedDate = new Intl.DateTimeFormat("ko-KR").format(new Date());
  const dates = formattedDate.split(".");
  const years = dates[0] + "년";
  const month = dates[1] + "월";
  const days = dates[2] + "일";

  return `${years}${month}${days}`;
};

export const findCurChatRoom = (chatRooms: any, id: string) => {
  return chatRooms?.find((item: any) => item.id === id);
};

// const [messages]: any = useCollection(
//   collection(db, "chatRooms", id, "messages"),
//   option
// );
