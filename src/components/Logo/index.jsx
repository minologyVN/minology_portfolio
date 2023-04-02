import { avatar_visual } from "../../assets";

export const Logo = () => {
  return (
    <div className="flex items-center gap-2 bg-primary font-medium">
      <div className="w-10 h-10 object-fit border-2 border-solid rounded-full overflow-hidden bg-blue">
        <img src={avatar_visual} alt="logo" className="w-full h-full" />
      </div>
      <h3>Minology</h3>
    </div>
  );
};
