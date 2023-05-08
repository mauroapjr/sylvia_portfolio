// import React, { useRef, useEffect } from "react";
// import ReactQuill from "react-quill";
// import Quill from 'quill';
// import "react-quill/dist/quill.snow.css";
// import "react-quill/dist/quill.bubble.css";

// const NewLineBlot = Quill.import('blots/break');
// NewLineBlot.blotName = 'br';
// NewLineBlot.tagName = 'BR';

// class NewLineHandler {
//   constructor() {
//     const Quill = ReactQuill.Quill;
//     const Break = Quill.import("blots/break");

//     class NewLineBlot extends Break {
//       static create() {
//         const node = super.create();
//         node.setAttribute("data-linebreak", true);
//         return node;
//       }
//     }

//     Quill.register(NewLineBlot);
//   }

//   register() {
//     Quill.register(NewLineBlot);
//   }
// }

// const editorModules = {
//   toolbar: {
//     container: [
//       [{ header: [1, 2, 3, 4, 5, 6, false] }],
//       ["bold", "italic", "underline", "strike", "blockquote"],
//       [
//         { list: "ordered" },
//         { list: "bullet" },
//         { indent: "-1" },
//         { indent: "+1" },
//       ],
//       ["link", "image"],
//       ["clean"],
//     ],
//   },
//   clipboard: {
//     matchVisual: false,
//   },
//   keyboard: {
//     bindings: {
//       tab: {
//         key: 9,
//         handler: function (range) {
//           return true;
//         },
//       },
//       enter: {
//         key: 13,
//         handler: function (range) {
//           const currentLeaf = this.quill.getLeaf(range.index)[0];
//           const nextLeaf = this.quill.getLeaf(range.index + 1)[0];

//           if (nextLeaf == null || nextLeaf === undefined) {
//             return true;
//           }

//           if (
//             currentLeaf.parent === nextLeaf.parent &&
//             currentLeaf.parent instanceof NewLineBlot
//           ) {
//             this.quill.setSelection(range.index + 1, range.length);
//           } else {
//             this.quill.insertEmbed(range.index, "NewLineBlot", true, "user");
//             this.quill.setSelection(range.index + 2, range.length);
//           }
//         },
//       },
//     },
//   },
// };

// Quill.register(NewLineBlot);

// const editorFormats = [
//   "header",
//   "bold",
//   "italic",
//   "underline",
//   "strike",
//   "blockquote",
//   "list",
//   "bullet",
//   "indent",
//   "link",
//   "image",
// ];

// class ReactQuillComponent extends React.Component {
//   constructor(props) {
//     super(props);

//     this.newLineHandler = new NewLineHandler();
//     this.newLineHandler.register();

//     this.modules = {
//       ...editorModules,
//     };

//     this.formats = editorFormats;
//   }

//   render() {
//     return (
//       <ReactQuill
//         value={this.props.value}
//         onChange={this.props.onChange}
//         modules={this.modules}
//         formats={this.formats}
//         theme="snow"
//       />
//     );
//   }
// }





import ReactQuill from "react-quill";
import Quill from 'quill';
import "react-quill/dist/quill.snow.css";
import "react-quill/dist/quill.bubble.css";

const NewLineHandler = () => {
  const Quill = ReactQuill.Quill;
  const Break = Quill.import("blots/break");

  class NewLineBlot extends Break {
    static create() {
      const node = super.create();
      node.setAttribute("data-linebreak", true);
      return node;
    }
  }
  Quill.register(NewLineBlot);
};

const NewLineBlot = Quill.import('blots/break');
NewLineBlot.blotName = 'br';
NewLineBlot.tagName = 'BR';

const editorModules = {
  toolbar: {
    container: [
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["link", "image"],
      ["clean"],
    ],
  },
  clipboard: {
    matchVisual: false,
  },
  keyboard: {
    bindings: {
      tab: {
        key: 9,
        handler: function (range) {
          return true;
        },
      },
      enter: {
        key: 13,
        handler: function (range) {
          const currentLeaf = this.quill.getLeaf(range.index)[0];
          const nextLeaf = this.quill.getLeaf(range.index + 1)[0];

          if (nextLeaf == null || nextLeaf === undefined) {
            return true;
          }

          if (
            currentLeaf.parent === nextLeaf.parent &&
            currentLeaf.parent instanceof NewLineBlot
          ) {
            this.quill.setSelection(range.index + 1, range.length);
          } else {
            this.quill.insertEmbed(range.index, "NewLineBlot", true, "user");
            this.quill.setSelection(range.index + 2, range.length);
          }
        },
      },
    },
  },
};

Quill.register(NewLineBlot);

const editorFormats = [
  "header",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "indent",
  "link",
  "image",
];

const ReactQuillComponent = ({ value, onChange }) => {
  NewLineHandler();
  return (
    <ReactQuill
      value={value}
      onChange={onChange}
      modules={editorModules}
      formats={editorFormats}
    />
  );
};

export default ReactQuillComponent;