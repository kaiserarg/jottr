import { Flex } from '@chakra-ui/react';
import { on } from 'events';
import { Edit } from 'lucide-react';
import { useCallback, useState } from 'react';
import {createEditor, BaseEditor, Descendant, Editor, Element, Transforms} from 'slate';
import { Slate, Editable, withReact, ReactEditor } from 'slate-react';

type CustomElement = { type: 'paragraph'; children: CustomText[] };
type CustomText = { text: string };

declare module 'slate' {
  interface CustomTypes {
    Editor: BaseEditor & ReactEditor
    Element: CustomElement
    Text: CustomText
  }
}

const initialValue = [
  {
    type: 'paragraph',
    children: [{ text: 'A line of text in a paragraph.' }],
  },
];

const CustomEditor = {
  isBoldMarkActive(editor) {
    const marks = Editor.marks(editor)
    return marks ? marks.bold === true : false
  },

  toggleBoldMark(editor) {
    const isActive = CustomEditor.isBoldMarkActive(editor)
    if (isActive) {
      Editor.removeMark(editor, 'bold')
    }
    else {
      Editor.addMark(editor, 'bold', true)
    }
  }
};

const DefaultElement = (props: { attributes: any; children: any }) => {
  return <p {...props.attributes}>{props.children}</p>;
};

const leaf = props => {
  <span
    {...props.attributes}
    style={{ fontWeight: props.leaf.bold ? 'bold' : 'normal' }}
  >
    {props.children}
  </span>
}

const EditingBlock = () => {
  const [Editor] = useState(() => withReact(createEditor()));

  const renderElement = useCallback(props => {
    return <DefaultElement {...props} />;
  }, [])

  const renderLeaf = useCallback(props => <Leaf {...props} />, [])

  return (
    <Flex direction="column">
      <Slate 
        editor={Editor}
        initialValue={initialValue}
        onChange={(value) => {
          const isAstChange = editor.operations.some(
            op => op.type === 'set_selection'
          )

          if (isAstChange) {
            const content = JSON.stringify(value)
            localStorage.setItem('content', content)
          }
        }}
      >
        <Flex borderLeft="1px solid">
          <button 
            onMouseDown={(event) => {
              event.preventDefault()
              CustomEditor.toggleBoldMark(editor)
            }}
            type="button"
            className="btn btn-primary"
          >
            Bold
          </button>
          <button
            onClick={(event) => {
              event.preventDefault()
              console.log('save')
            }}
            marginLeft="1"
            type="button"
            className="btn btn-primary"
          >
            Save
          </button>
        </Flex>
        <Editable 
          onChange={(value) => {
            console.log('onChange', value)
          }}
          onKeyDown={(event) => {
            if (event.ctrlKey) {
              return 
            }

            switch (event.key) {
              case 'b': {
                event.preventDefault()
                CustomEditor.toggleBoldMark(editor)
                break
              }
            }
          }}
          // renderElement={renderElement}
          // renderLeaf={renderLeaf}
        />
      </ Slate>
    </Flex>
  );
};

export default EditingBlock;