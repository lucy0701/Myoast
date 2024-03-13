import { ContentsSelectOptions } from '@/types/selectOptions';

export function getContentsSelectOptions(
  value: string,
  label: string,
  disabled?: boolean,
) {
  return {
    label,
    value,
    disabled,
  } as ContentsSelectOptions;
}
