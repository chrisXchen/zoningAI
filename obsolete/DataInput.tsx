import { IconMail, Input, IconProps } from '@supabase/ui';
import React from 'react';

interface DataInputProps {
  label?: string;
  descriptionText?: string;
  disabled?: boolean;
  icon?: React.ReactElement<IconProps>;
  placeholder?: string;
  type?: string;
  labelOptional?: string;
}

const DataInput: React.FC<DataInputProps> = ({
  label = "Default Label",
  descriptionText = "Default Description",
  disabled = false,
  icon = <IconMail />,
  placeholder = "Default Placeholder",
  type = "text",
  labelOptional = "Default Optional Label"
}) => {
  return (
    <Input
      label={label}
      descriptionText={descriptionText}
      disabled={disabled}
      icon={icon}
      placeholder={placeholder}
      type={type}
      labelOptional={labelOptional}
    />
  );
}

export default DataInput;
