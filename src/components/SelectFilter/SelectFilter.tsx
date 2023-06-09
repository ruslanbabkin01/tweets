import styled from 'styled-components';
import Select from 'react-select';
import { GroupBase } from '../../types/select';

interface ISelectFilterProps {
  options: { value: string; label: string }[];
  onChange: (option: GroupBase) => void;
}

function SelectFilter({ options, onChange }: ISelectFilterProps) {
  return <CustomSelect options={options} onChange={onChange} />;
}

export default SelectFilter;

export const CustomSelect = styled(Select)`
  margin-bottom: 20px;
  margin-left: auto;
`;
