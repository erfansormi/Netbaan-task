const AssetsBoxChart = ({ numbers }: { numbers: number[] }) => {
  const maxNumber = Math.max(...numbers);
  const maxPixelHeight = 38;

  return (
    <div className="flex items-center gap-1">
      {numbers.map((number, i) => {
        return (
          <div
            key={i}
            style={{
              height: toPixel({ value: number, maxValue: maxNumber, maxPixel: maxPixelHeight }),
            }}
            className="w-1.5 bg-brand-cyan rounded-md"
          ></div>
        );
      })}
    </div>
  );
};
export default AssetsBoxChart;

const toPixel = ({
  value,
  maxValue,
  maxPixel,
}: {
  value: number;
  maxValue: number;
  maxPixel: number;
}) => {
  const percentage = (value / maxValue) * 100;
  return (percentage / 100) * maxPixel;
};
