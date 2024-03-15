import { ContentsSelectOptions } from '@/types/selectOptions';

export function getContentsSelectOptions(
  value: string,
  label: string,
  page: number,
  disabled?: boolean,
) {
  return {
    label,
    value,
    page,
    disabled,
  } as ContentsSelectOptions;
}
