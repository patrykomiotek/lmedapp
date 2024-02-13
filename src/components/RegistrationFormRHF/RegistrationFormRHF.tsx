import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "../../ui/Input";

import {
  CreateUserDto,
  validationSchema,
} from "../../types/dtos/CreateUserDto";
import { Button } from "../../ui";

type Props = {
  onSubmit: SubmitHandler<CreateUserDto>;
  data?: Partial<CreateUserDto>;
};

export const RegistrationFormRHF = ({ onSubmit, data }: Props) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<CreateUserDto>({
    resolver: zodResolver(validationSchema),
    values: {
      email: data?.email || "",
      password: data?.password || "",
      language: data?.language || "",
    },
  });

  const watchedField = watch("language");

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mt-4">
      <Input
        {...register("email")}
        label="E-mail"
        id="email"
        type="email"
        defaultValue={data?.email}
        error={errors.email}
      />
      <Input
        {...register("password", { required: true })}
        label="Password"
        id="password"
        type="password"
        error={errors.password}
      />
      <Input
        {...register("language")}
        label="Language"
        id="language"
        error={errors.language}
      />
      <p>{watchedField}</p>
      <div>
        <Button label="Submit" type="submit" />
      </div>
    </form>
  );
};
