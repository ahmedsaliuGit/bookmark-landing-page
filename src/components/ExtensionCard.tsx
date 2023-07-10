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
    <div>
      <img src={`${img}`} alt={altText} />
      <h4>{title}</h4>
      <p>{para}</p>
      <button>Add & Install Extension</button>
    </div>
  );
};
