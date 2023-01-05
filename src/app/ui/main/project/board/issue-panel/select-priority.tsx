import { useState } from "react";
import * as Select from "@radix-ui/react-select";
import { Priority, priorities, priorityDict } from "@domain/priority";
import { PriorityIcon } from "@app/components/priority-icon";
import {
  SelectTrigger,
  SelectTriggerIcon,
  SelectContent,
  SelectItem,
  SelectItemIndicator,
} from "@app/components/select";

export const SelectPriority = ({ initPriority }: Props): JSX.Element => {
  const [selectValue, setSelectValue] = useState<Priority>(initPriority);

  const onValueChange = (value: string) => {
    const priority = value as Priority;
    setSelectValue(priority);
  };

  return (
    <Select.Root
      name="priority"
      defaultValue={initPriority}
      onValueChange={onValueChange}
    >
      <SelectTrigger>
        <div className="mr-2">
          <PriorityIcon priority={selectValue} />
        </div>
        <Select.Value />
        <SelectTriggerIcon />
      </SelectTrigger>
      <SelectContent>
        <Select.ScrollUpButton />
        <Select.Viewport>
          {priorities.map((priority, index) => (
            <SelectItem
              key={index}
              value={priority}
              className="text-xs uppercase"
            >
              <SelectItemIndicator />
              <PriorityIcon priority={priority} />
              <Select.ItemText>{priorityDict[priority]}</Select.ItemText>
            </SelectItem>
          ))}
          <Select.Separator />
        </Select.Viewport>
        <Select.ScrollDownButton />
      </SelectContent>
    </Select.Root>
  );
};

interface Props {
  initPriority: Priority;
}