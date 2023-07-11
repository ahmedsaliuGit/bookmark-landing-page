type ExtensionCardProps = {
  img: string;
  title: string;
  para: string;
  altText: string;
};

export const ExtensionCard = function ({
  img,
  title,
  para,
  altText,
}: ExtensionCardProps) {
  return (
    <div className="shadow-lg pt-12 pb-4 rounded-2xl">
      <img src={`${img}`} alt={altText} className="inline-block" />
      <h3 className="font-medium mt-8">{title}</h3>
      <p className="text-grayish-blue mt-2 mb-8">{para}</p>
      <div className="my-4 py-1 bg-[url('assets/bg-dots.svg')] bg-repeat-x"></div>
      <button className="bg-soft-blue py-4 px-8 font-normal text-white rounded-lg">
        Add & Install Extension
      </button>
    </div>
  );
};
