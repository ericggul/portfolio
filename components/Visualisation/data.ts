export const DATA = {
  nodes: [
    //group 1
    { id: "Behaviour Aesthetics", group: 1, header: true, text: "Assuming Imperfectness of Spectator(Limited Time, Interest, Knowledge)" },
    { id: "Relating to the World", group: 1, text: "Positioning the Artwork within the Spectator's World(Mental Model)" },
    { id: "Explicit Narrative", group: 1, text: "Explicitly Placing the Narrative within the Artwork itself." },
    { id: "Emergence", group: 1, text: "Sudden Emergence of the Artwork." },
    { id: "Engagement", group: 1, text: "Enabling Spectator to Actively Engage with the Artwork." },
    { id: "Artified Process", group: 1, text: "Artifing Artistic Administrative Processes" },
    { id: "Non-Functioning Functionals", group: 1, text: "Hacking Funcitoning Components into Non-Functionals" },

    //group 2
    { id: "MDWA(Multi-Device Web Artwork)", group: 2, header: true },
    { id: "Screen Ignite", group: 2 },
    { id: "Screen Swap", group: 2 },
    { id: "Screen Conversation", group: 2 },
    { id: "Screen Contents Alteration", group: 2 },
    { id: "Hyperlink Transition", group: 2 },

    //group 3
    { id: "Dadaism", group: 3, header: true },
    { id: "Brecht Epic Theatre", group: 3 },
    { id: "Verfremdungseffekt", group: 3 },
    { id: "Unexpected Interaction", group: 3 },
    { id: "Non-reasonable Narratives", group: 3 },

    //group 4
    { id: "Embedded Reality(MR)", group: 4, header: true },
    { id: "Infinite Mirror", group: 4 },
    { id: "Physicality", group: 4 },
    { id: "Spatial-Temporal Dimension", group: 4 },
    { id: "Web-AR", group: 4 },

    //group 5
    { id: "Berlin Nonequality", group: 5, header: true },
    { id: "Entry Points", group: 5 },
    { id: "History-Social Context", group: 5 },
    { id: "Uniform UI-Diversing Context", group: 5 },
    { id: "Metonomical Transition", group: 5 },

    //group 6
    { id: "Postmodern", group: 6, header: true },
    { id: "Rhizome", group: 6 },
    { id: "Floating Signifier", group: 6 },
    { id: "Non-linearity", group: 6 },
    { id: "Complex Society", group: 6 },

    //group 7
    { id: "Roundabout Structure", group: 7 },
    { id: "Circus-Circus", group: 7 },
    { id: "Eternal Recurrence", group: 7 },
    { id: "Distributed Narrative", group: 7 },
  ],
  links: [
    //group 1
    { source: "Behaviour Aesthetics", target: "Relating to the World", value: 10 },
    { source: "Behaviour Aesthetics", target: "Explicit Narrative", value: 10 },
    { source: "Behaviour Aesthetics", target: "Emergence", value: 10 },
    { source: "Behaviour Aesthetics", target: "Engagement", value: 10 },
    { source: "Behaviour Aesthetics", target: "Artified Process", value: 10 },
    { source: "Behaviour Aesthetics", target: "Non-Functioning Functionals", value: 10 },
    { source: "Relating to the World", target: "Emergence", value: 3 },

    //group 2
    { source: "MDWA(Multi-Device Web Artwork)", target: "Screen Ignite", value: 10 },
    { source: "MDWA(Multi-Device Web Artwork)", target: "Screen Swap", value: 10 },
    { source: "MDWA(Multi-Device Web Artwork)", target: "Screen Conversation", value: 10 },
    { source: "MDWA(Multi-Device Web Artwork)", target: "Screen Contents Alteration", value: 10 },
    { source: "MDWA(Multi-Device Web Artwork)", target: "Hyperlink Transition", value: 10 },

    //group 1 to group 2
    { source: "Emergence", target: "Screen Ignite", value: 6 },

    //group 3
    { source: "Dadaism", target: "Brecht Epic Theatre", value: 7 },
    { source: "Dadaism", target: "Verfremdungseffekt", value: 7 },
    { source: "Brecht Epic Theatre", target: "Verfremdungseffekt", value: 7 },
    { source: "Non-Functioning Functionals", target: "Unexpected Interaction", value: 3 },
    { source: "Verfremdungseffekt", target: "Unexpected Interaction", value: 3 },
    { source: "Verfremdungseffekt", target: "Emergence", value: 3 },
    { source: "Verfremdungseffekt", target: "Screen Ignite", value: 3 },
    { source: "Unexpected Interaction", target: "Emergence", value: 1 },
    { source: "Dadaism", target: "Non-reasonable Narratives", value: 8 },
    { source: "Brecht Epic Theatre", target: "Non-reasonable Narratives", value: 3 },
    { source: "Dadaism", target: "Non-Functioning Functionals", value: 3 },
    { source: "Dadaism", target: "Artified Process", value: 2 },

    // //group 4
    { source: "Embedded Reality(MR)", target: "Infinite Mirror", value: 5 },
    { source: "Embedded Reality(MR)", target: "Physicality", value: 10 },
    { source: "Embedded Reality(MR)", target: "Spatial-Temporal Dimension", value: 10 },
    { source: "Embedded Reality(MR)", target: "Web-AR", value: 10 },
    { source: "Spatial-Temporal Dimension", target: "Physicality", value: 8 },
    { source: "Infinite Mirror", target: "Artified Process", value: 1 },
    { source: "Infinite Mirror", target: "Non-Functioning Functionals", value: 1 },
    { source: "Non-Functioning Functionals", target: "Dadaism", value: 3 },
    { source: "Physicality", target: "MDWA(Multi-Device Web Artwork)", value: 3 },
    { source: "Embedded Reality(MR)", target: "MDWA(Multi-Device Web Artwork)", value: 8 },
    { source: "Web-AR", target: "MDWA(Multi-Device Web Artwork)", value: 5 },

    //group 5
    { source: "Berlin Nonequality", target: "Entry Points", value: 10 },
    { source: "Berlin Nonequality", target: "History-Social Context", value: 10 },
    { source: "Berlin Nonequality", target: "Uniform UI-Diversing Context", value: 10 },
    { source: "Berlin Nonequality", target: "Metonomical Transition", value: 10 },
    { source: "Entry Points", target: "Non-Functioning Functionals", value: 8 },
    { source: "Entry Points", target: "Verfremdungseffekt", value: 8 },
    { source: "Entry Points", target: "Emergence", value: 8 },
    { source: "Entry Points", target: "Screen Ignite", value: 8 },
    { source: "History-Social Context", target: "Floating Signifier", value: 5 },
    { source: "History-Social Context", target: "Non-linearity", value: 3 },
    { source: "History-Social Context", target: "Complex Society", value: 7 },
    { source: "History-Social Context", target: "Rhizome", value: 3 },
    { source: "Berlin Nonequality", target: "Rhizome", value: 8 },
    { source: "Uniform UI-Diversing Context", target: "Roundabout Structure", value: 2 },
    { source: "Uniform UI-Diversing Context", target: "Floating Signifier", value: 7 },
    { source: "Uniform UI-Diversing Context", target: "Rhizome", value: 1 },
    { source: "Uniform UI-Diversing Context", target: "Screen Contents Alteration", value: 6 },
    { source: "Berlin Nonequality", target: "Screen Conversation", value: 10 },
    { source: "Berlin Nonequality", target: "Screen Swap", value: 10 },
    { source: "Metonomical Transition", target: "Screen Contents Alteration", value: 10 },
    { source: "Metonomical Transition", target: "Screen Conversation", value: 10 },
    { source: "Metonomical Transition", target: "Screen Swap", value: 10 },
    { source: "Metonomical Transition", target: "Hyperlink Transition", value: 10 },
    { source: "Metonomical Transition", target: "Postmodern", value: 3 },
    { source: "Metonomical Transition", target: "Rhizome", value: 3 },
    { source: "Hyperlink Transition", target: "Rhizome", value: 4 },
    { source: "Metonomical Transition", target: "Distributed Narrative", value: 4 },

    //group 6
    { source: "Postmodern", target: "Distributed Narrative", value: 10 },
    { source: "Postmodern", target: "Non-reasonable Narratives", value: 10 },
    { source: "Postmodern", target: "Rhizome", value: 10 },
    { source: "Postmodern", target: "Floating Signifier", value: 10 },
    { source: "Postmodern", target: "Complex Society", value: 10 },
    { source: "Postmodern", target: "Non-linearity", value: 10 },

    //group 7
    { source: "Roundabout Structure", target: "Screen Contents Alteration", value: 2 },
    { source: "Roundabout Structure", target: "Screen Conversation", value: 2 },
    { source: "Roundabout Structure", target: "Circus-Circus", value: 4 },
    { source: "Roundabout Structure", target: "Eternal Recurrence", value: 3 },
    { source: "Roundabout Structure", target: "Distributed Narrative", value: 2 },
  ],
};
