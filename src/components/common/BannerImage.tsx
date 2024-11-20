import BgImage from '../../assets/images/bg-img.jpg';
import Icon from '../../assets/logo.svg';

const BannerImage = ({ title }: { title: string }) => {
  return (
    <div className="h-[25rem] relative ">
      <img src={BgImage} alt="" className="object-cover w-full h-full" />
      <div className="absolute inset-0 bg-black/10 backdrop-blur-md"></div>
      <div className="absolute left-[50%] flex flex-col items-center gap-4 top-[50%] translate-x-[-50%] translate-y-[-50%]">
        <img src={Icon} alt="" height={40} width={40} />
        <h2 className="text-4xl ">{title}</h2>
      </div>
    </div>
  );
};

export default BannerImage;
