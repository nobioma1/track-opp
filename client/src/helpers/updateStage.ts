import { StageValue, States } from 'types';

const updateStage = (value: StageValue): States => {
  const stageState = {
    concluded: false,
    hired: false,
    interview: false,
    offer: false,
  };

  switch (value) {
    case 'interview':
      return {
        ...stageState,
        interview: true,
        offer: false,
        hired: false,
        concluded: false,
      };
    case 'offer':
      return {
        ...stageState,
        concluded: false,
        hired: false,
        offer: true,
      };
    case 'notAMatch':
      return {
        ...stageState,
        concluded: true,
        hired: false,
      };
    case 'accept':
      return {
        ...stageState,
        offer: true,
        concluded: true,
        hired: true,
      };
    default:
      return stageState;
  }
};

export default updateStage;
