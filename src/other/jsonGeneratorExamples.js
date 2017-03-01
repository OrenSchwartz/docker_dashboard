// images
[
  {
    'repeat(5, 30)': {
      org: '{{company()}}',
      repo: '{{random("master", "dev", "release", "GETT-4212", "GETT-9743", "GETT-1123", "GETT-5432")}}',
      tags: [
        {
          'repeat(5)': '{{lorem(1, "words")}}'
        }
      ],
      branch: '{{random("branch1", "branch2", "branch3", "branch4", "branch123")}}',
    buildDate: '{{moment(this.date(new Date(), new Date())).format("d/MM/YY")}}',
      buildTime: '{{moment(this.date(new Date(), new Date())).format("hh:m")}}',
      size: '{{integer(0, 400)}}',
      sha1: '{{guid()}}',
      dockerFile: '{{lorem(1, "words")}}',
      layers: {},
      commitMessage: '{{lorem(1, "paragraphs")}}',
      diff: '{{lorem(1, "paragraphs")}}',
      state: '{{random("up", "down", "idle")}}',
      containers: '{{random("container1", "c2", "c3", "c4", "c5")}}'

    }
  }
]
