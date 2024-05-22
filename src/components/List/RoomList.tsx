const RoomNameContainer = ({ name }: { name: string }) => {
  return <span className=" font-bold text-[15px]">{name}</span>;
};

const RoomAvailableNumber = ({
  availableNumber,
}: {
  availableNumber: number;
}) => {
  if (availableNumber > 0) {
    return (
      <span className="font-semibold text-[13px]">{availableNumber} 병상</span>
    );
  }
  return <span className="font-semibold text-[13px]">병상 없음</span>;
};

const RoomList = ({
  name,
  availableNumber,
}: {
  name: string;
  availableNumber: number;
}) => {
  return (
    <article
      className={`flex justify-between items-center w-[200px] h-[35px] rounded-[10px] border border-[rgba(16, 17, 18, 0.10)] p-[15px] gap-[16px] ${
        availableNumber > 0 ? ' bg-blue-300' : ' bg-red-300'
      }`}
    >
      <div>
        <RoomNameContainer name={name} />
      </div>
      <div>
        <RoomAvailableNumber availableNumber={availableNumber} />
      </div>
    </article>
  );
};

export default RoomList;
