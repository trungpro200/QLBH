import { CheckIcon } from "@radix-ui/react-icons";

interface SuccessF {
  message?: string;
}

export const FormSuccess = ({ message = "" }: SuccessF) => {
  if (!message) {
    return null;
  }

  return (
    <div className="bg-emerald-500/15 rounded-md flex items-center gap-x-2 p-3 text-emerald-800 my-2">
      <CheckIcon className="h-5 w-5 inline"></CheckIcon>
      <p>{message}</p>
    </div>
  );
};
