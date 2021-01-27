import { Select } from '@chakra-ui/react';

type Props = {
  concluded: boolean;
  hired: boolean;
  interview: boolean;
  offer: boolean;
  onChange(e: React.ChangeEvent<HTMLSelectElement>): void;
};

const ApplicationStagesDropdown: React.FC<Props> = ({
  concluded,
  interview,
  offer,
  onChange,
}) => {
  return (
    <Select
      borderRadius={3}
      focusBorderColor="purple.500"
      size="sm"
      value={
        offer && !concluded
          ? 'offer'
          : interview && !concluded
          ? 'interview'
          : concluded && !offer
          ? 'notAMatch'
          : offer && concluded
          ? 'accept'
          : 'review'
      } // Revise Logic
      onChange={onChange}
    >
      <option value="review">Reviewing</option>
      <option value="interview">Interview</option>
      <option value="offer">Offer</option>
      <option value="accept">A Match</option>
      <option value="notAMatch">Not A Match</option>
    </Select>
  );
};

export default ApplicationStagesDropdown;
