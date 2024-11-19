import EmptySvg from '../../assets/svg/empty.svg';

const Empty = () => {
  return (
    <div className="relative flex flex-col items-center justify-center flex-1">
      <img src={EmptySvg} alt="" className="h-[30rem] w-[30rem]" />
      <h2>No Data found</h2>
    </div>
  );
};

export default Empty;
