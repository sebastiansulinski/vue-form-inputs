import CodeMirror from 'codemirror';
import 'codemirror/mode/xml/xml';
import 'froala-editor/js/plugins/link.min';
import 'froala-editor/js/plugins/lists.min';
import 'froala-editor/js/plugins/video.min';
import 'froala-editor/js/plugins/image.min';
import 'froala-editor/js/plugins/colors.min';
import 'froala-editor/js/plugins/code_view.min';
import 'froala-editor/js/plugins/inline_class.min';
import 'froala-editor/js/plugins/char_counter.min';
import 'froala-editor/js/plugins/image_manager.min';
import 'froala-editor/js/plugins/paragraph_style.min';
import 'froala-editor/js/plugins/code_beautifier.min';
import 'froala-editor/js/third_party/font_awesome.min';
export default {
  placeholderText: 'Edit Your Content Here!',
  heightMin: 400,
  codeMirror: CodeMirror,
  codeMirrorOptions: {
    indentWithTabs: true,
    lineNumbers: true,
    lineWrapping: true,
    mode: 'text/html',
    tabMode: 'indent',
    tabSize: 2,
  },
  codeBeautifierOptions: {
    end_with_newline: true,
    indent_inner_html: true,
    extra_liners: [
      'p',
      'h1',
      'h2',
      'h3',
      'h4',
      'h5',
      'h6',
      'blockquote',
      'pre',
      'ul',
      'ol',
      'table',
      'dl',
    ],
    brace_style: 'expand',
    indent_char: ' ',
    indent_size: 4,
    wrap_line_length: 0,
  },
  videoResponsive: true,
  pastePlain: true,
  imageEditButtons: [
    'imageReplace',
    'imageAlt',
    'imageRemove',
    '-',
    'imageLink',
    'linkOpen',
    'linkEdit',
    'linkRemove',
  ],
  toolbarButtons: {
    moreText: {
      buttons: ['bold', 'italic', 'underline', 'textColor', 'backgroundColor'],
      buttonsVisible: 0,
    },
    moreParagraph: {
      buttons: ['paragraphStyle', 'paragraphFormat'],
      buttonsVisible: 0,
    },
    moreRich: {
      buttons: [
        'insertImage',
        'insertLink',
        'insertTable',
        'insertVideo',
        'fontAwesome',
      ],
      buttonsVisible: 0,
    },
    moreMisc: {
      buttons: ['undo', 'redo', 'inlineClass', 'clearFormatting', 'html'],
      align: 'right',
      buttonsVisible: 6,
    },
  },
  linkStyles: {
    'text-green-500': 'Green',
    'text-red-500': 'Red',
  },
  inlineClasses: {
    'text-gray-600': 'Text gray 600',
    'text-red-600': 'Text red 600',
    'text-indigo-600': 'Text indigo 600',
  },
  paragraphStyles: {
    'text-xl': 'Extra large',
    'text-sm': 'Small',
  },
};
