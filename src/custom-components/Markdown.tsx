import React, { useCallback, FunctionComponent } from 'react'
import { useField } from 'payload/components/forms'
import { Field } from 'payload/types'
import Editor from 'rich-markdown-editor'

// Make sure to never re-render the editor, since it tracks the value on its own.
const MemorizedEditor = React.memo(Editor, (prev, next) => prev.id === next.id)

type FieldWithPath = Field & { path?: string }

export const MarkdownField: FunctionComponent<FieldWithPath> = (
	props: FieldWithPath
) => {
	const { path, admin } = props
	const { value, setValue } = useField<string>({ path })
	const onChange = useCallback(
		(getValue) => {
			const newValue = getValue().replace(/^\s*\\/gm, '')
			console.log(newValue);
			setValue(newValue)
		},
		[path]
	)

	const topLevelStyle: React.CSSProperties = {
		...((admin as any)?.style ?? {}),
		marginBottom: '60px',
	}

	return (
		<div style={topLevelStyle} className="field-type markdown">
			<MemorizedEditor
				id={`markdown-field-${path.replace(/W/g, '-')}`}
				defaultValue={value}
				value={value}
				onChange={onChange}
			/>
		</div>
	)
}
