import { SubmitHandler, useForm } from "react-hook-form";
import { Input } from "../../ui/Input";
import { FormState } from "../../types/FormState";

type Props = {
  onSubmit: SubmitHandler<FormState>;
  data?: Partial<FormState>;
};

export const RegistrationFormRHF = ({ onSubmit, data }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormState>();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input
        {...register("email")}
        label="E-mail"
        id="email"
        type="email"
        defaultValue={data?.email}
      />
      <Input
        {...register("password", { required: true })}
        label="Password"
        id="password"
        type="password"
        error={errors.password}
      />
      <Input {...register("language")} label="Language" id="language" />

      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};
