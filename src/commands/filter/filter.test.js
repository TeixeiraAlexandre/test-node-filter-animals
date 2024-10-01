const filter = require('.');

const inputData = [ 
  { 
    name: 'Dillauti',
    people: [ 
      { 
        name: 'Winifred Graham',
        animals:
          [ { name: 'Anoa' },
            { name: 'Duck' },
            { name: 'Narwhal' },
            { name: 'Badger' },
            { name: 'Cobra' },
            { name: 'Crow' }
        ]
      },
      {
        name: 'Blanche Viciani',
        animals: [ 
          { name: 'Barbet' },
          { name: 'Rhea' },
          { name: 'Snakes' },
          { name: 'Antelope' },
          { name: 'Echidna' },
          { name: 'Crow' },
          { name: 'Guinea Fowl' },
          { name: 'Deer Mouse' }
        ] 
      },
    ],
  },
];

describe('Animal Filter', () => {
  test('should filter animals with 0 result', () => {
    const result = filter('EMPTY RESULT', inputData);
    expect(result).toEqual([]);
  })

  test('should filter animals by pattern', () => {
    const expectedOutput = [ 
      { 
        name: 'Dillauti',
        people: [ 
          { 
            name: 'Winifred Graham',
            animals: [
                { name: 'Cobra' },
                { name: 'Crow' }
            ]
          },
          {
            name: 'Blanche Viciani',
            animals: [
              { name: 'Crow' },
            ] 
          },
        ],
      },
    ];

    const result = filter('C', inputData);
    expect(result).toEqual(expectedOutput);
  });
});