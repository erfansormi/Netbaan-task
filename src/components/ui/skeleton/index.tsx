import styles from "./skeleton.module.css";

interface Props {
  className?: string;
  width?: number | string;
  height?: number | string;
}

const Skeleton = ({ width, height, className }: Props) => {
  return (
    <div
      style={{ width, height }}
      className={`${styles.skeleton_box} rounded-xl ${className}`}
    ></div>
  );
};

export default Skeleton;
