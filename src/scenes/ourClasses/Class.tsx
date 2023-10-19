type Props = {
  name: string;
  description?: string;
  image: string;
};

function Class({ name, description, image }: Props) {
  const overlayStyles = `p-5 absolute z-30 flex
    h-[380px] w-[470px] flex-col items-center justify-center
    whitespace-normal bg-primary-500 text-center text-white
    opacity-0 transition duration-500 hover:opacity-90`;

  return (
    <div className="relative h-[380px] w-[470px]">
      <div className={overlayStyles}>
        <p className="text-2xl">{name}</p>
        <p className="mt-5">{description}</p>
      </div>
      <img className="h-full w-auto" alt={`${image}`} src={image} />
    </div>
  );
}

export default Class;
