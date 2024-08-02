import { Title } from "../../../../../components/common/Title";
import { FormLogin } from "../../../../../components/forms/FormLogin";

export const Login = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="w-full max-w-md p-6 mx-4 space-y-6 bg-gray-950 dark:bg-white rounded-lg ">
        <div className="flex justify-center">
          <Title title="Login" />
        </div>
        <FormLogin />
      </div>
    </div>
  );
};
