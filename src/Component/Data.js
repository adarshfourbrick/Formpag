export const columns = [
    {
      name: 'Existing Technology ',
      selector: 'title',
      sortable: true,
    },
    {
      name: 'Existing Sector',
      selector: 'director',
      sortable: true,
    },
    // {
    //   name: 'Genres',
    //   selector: 'genres',
    //   sortable: true,
    //   cell: d => <span>{d.genres.join(', ')}</span>,
    // },
    // {
    //   name: 'Year',
    //   selector: 'year',
    //   sortable: true,
    // },
  ];
  
  export const data = [
    {
      title: '',
      year: '1988',
      genres: [
        'Comedy',
        'Fantasy',
      ],
      director: '',
    },
    {
      id: 2,
      title: '',
      year: '1984',
      runtime: '127',
      genres: [
        'Crime',
        'Drama',
        'Music',
      ],
      director: '',
    }];


