import { ExclamationTriangleIcon } from "@radix-ui/react-icons";

interface ErrorF {
  message?: string;
}

export const FormError = ({ message = "" }: ErrorF) => {
  if (!message) {
    return null;
  }

  return (
    <div className="bg-destructive/15 rounded-md flex items-center gap-x-2 p-3 text-destructive my-2">
      <ExclamationTriangleIcon className="h-5 w-5 inline"></ExclamationTriangleIcon>
      <p>{message}</p>
    </div>
  );
};
