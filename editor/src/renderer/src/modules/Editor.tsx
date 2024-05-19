import React, { useState } from "react"
import { createEditor } from 'slate'
import { Slate, Editable, withReact } from 'slate-react'
import { BaseEditor, Descendant } from 'slate'
import { ReactEditor } from 'slate-react'

type CustomElement = { type: 'paragraph'; children: CustomText[] }
type CustomText = { text: string }

declare module 'slate' {
    interface CustomTypes {
        Editor: BaseEditor & ReactEditor
        Element: CustomElement
        Text: CustomText
    }
}

const Editor: React.FC = () => {
    const [editor] = useState(() => withReact(createEditor()))
    const initialValue: Descendant[] = [
        {
            type: 'paragraph',
            children: [{ text: 'A line of text in a paragraph.' }],
        },
    ]
    return (
        <>
            <Slate editor={editor} initialValue={initialValue}>
                <Editable />
            </Slate>
        </>
    )
}

export default Editor;
