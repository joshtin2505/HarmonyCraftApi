# Harmony Craft Api

> [!note]
> This API is created from musicans for musicans. 

## End Points
`https://harmonycraftapi.onrender.com/api`
``` js
    endPoints: [
      {
        url: 'api/notes',
        method: 'GET',
        description: 'Get all notes'
      },
      {
        url: 'api/mod',
        method: 'GET',
        description: 'Get all mods'
      },
      {
        url: 'api/modes',
        method: 'GET',
        description: 'Get all modes'
      },
      {
        url: 'api/random/tone',
        params: ['nat - alt', 'min - maj'],
        method: 'GET',
        description: 'Get a random tone'
      }
    ]
```