import { InputHTMLAttributes } from "react";

interface InputWithIconProps extends InputHTMLAttributes<HTMLInputElement> {
  icon?: React.ReactNode;
}

export function InputWithIcon({ icon, ...props }: InputWithIconProps) {
  return (
    <div className="flex items-center space-x-2 border rounded-lg p-2">
      {icon && <span className="text-gray-500">{icon}</span>}
      <input
        className="flex-1 border-none outline-none focus:ring-0"
        {...props}
      />
    </div>
  );
}
