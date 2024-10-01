const parseArgs = require('.');
const CommandsPriorityEnum = require('../../constants/CommandsPriorityEnum');
const CommandsNonPriorityEnum = require('../../constants/CommandsNonPriorityEnum');


describe('parseArgs Function', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('should parse prioritized commands correctly', () => {
    const inputArgs = [`${CommandsPriorityEnum.FILTER}=testValue`, `${CommandsNonPriorityEnum.HELP}`];

    const expectedOutput = {
      prioritized: {
        [CommandsPriorityEnum.FILTER]: 'testValue',
      },
      others: {
        [CommandsNonPriorityEnum.HELP]: undefined,
      },
    };

    const result = parseArgs(inputArgs);
    expect(result).toEqual(expectedOutput);
  });

  test('should handle invalid value for prioritized command', () => {
    const inputArgs = [`${CommandsPriorityEnum.FILTER}=`];

    // Mock
    console.error = jest.fn();
    process.exit = jest.fn();

    parseArgs(inputArgs);

    expect(console.error).toHaveBeenCalledWith(`Invalid value for the command: ${CommandsPriorityEnum.FILTER}`);
    expect(process.exit).toHaveBeenCalled();
  });

  test('should handle unknown commands', () => {
    const inputArgs = ['--unknownCommand=value'];

    // Mock
    console.error = jest.fn();
    process.exit = jest.fn();

    parseArgs(inputArgs);

    expect(console.error).toHaveBeenCalledWith(`Unknown command: --unknownCommand`);
    expect(process.exit).toHaveBeenCalled();
  });

  test('should return empty prioritized and others when no valid commands provided', () => {
    const inputArgs = [];

    const expectedOutput = {
      prioritized: {},
      others: {},
    };

    const result = parseArgs(inputArgs);
    expect(result).toEqual(expectedOutput);
  });
});