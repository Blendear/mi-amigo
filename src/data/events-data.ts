import exampleImage from "../../../../../public/images/examplePath.png";
// hook1 - cut and paste this file to the original mi-amigo
// interface IToolTrapProtipObject {
//   poziom: number;
//   miejsce: string;
// }
//hook1 - how to add type requirements ot given propety value inside of the data array "eventsData"?
export const eventsData = [
  {
    test: "",
    id: "", //hook1 how to add them? firebase does it by itself? or hardcoded? but how to combine them with POST requested new events?
    title: "string",
    description: "jsx",
    imagePath: [exampleImage], //hook1 - how to let people add their own images with POST?
    traps: [
      // hook1 - where to GET them from?
      //hook1 - props are the same as "tools.programs", right? simply conditionally render them
    ],
    protips: [
      // hook1 - where to GET them from?
      //hook1 - props are the same as "tools.programs", right? simply conditionally render them
    ],
    tools: {
      // hook1 - where to GET them from?
      // hook1 - how to manage the possibility of changing wariant "written to link" and vice versa - because sometimes i cant listne to something and i need a written version of that trap/protip
      place: {
        //hook1 - props are the same as "tools.programs", right? simply conditionally render them
      },
      programs: {
        imagePath: "string",
        title: "string",
        shortDescription: "jsx",

        tutorialWritten: "jsx", // hook1 - if short description is enough   ||   if you cant listen right now, and no internet for mp4 download
        tutorialMP4Link: "string", //hook1 - linkt o YT or DB or other place. Not source files, they are too heavy
        tutorialMP3Link: "string", //hook1 - just like MP4, but it links to less heavy file for listening only
        // linkToStartProgram //hook2 - for one day. too complicated to add local links imo
      },
      objects: {
        //hook1 - props are the same as "tools.programs", right? simply conditionally render them
        // + without link, because they are physical objects, right?
      },
    },
    needsFulfilled: {
      // hook1 - 1 string ro actual "properties, that requires specific type chosen?
      wantOrQuest: "",
      energyTypeNeeded: { create: "", absorb: "", chill: "", vent: "" }, //hook1 - best way, because an event can have multiple at once, si?
      soloOrSquad: "",
      staticOrActive: "",
      homeOrWilderness: "",
      freshOrClassic: "",
    },
    isLooseParent: "boolean", // hook1 - or how to make the "loose / specific event" functionality?
    deadline: {}, // hook1 - use date-fns for one data object   &   hook1 - i will simpy check if deadline data exist, right? no need for dedicated property "hasDeadline"
  },
];
