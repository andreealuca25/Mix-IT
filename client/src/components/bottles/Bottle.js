const Bottle = ({ name, quantity }) => {
  return (
    <div className="flex flex-col items-center">
      <img
        src={`/images/bottles/${name}.png`}
        alt={`${name} bottle`}
        className="w-12 h-12"
      />
      <p className="text-center text-sm">{quantity} ml</p>
    </div>
  );
};

export default Bottle;
