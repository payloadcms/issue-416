import React, { useCallback, FunctionComponent } from 'react'
import { useField } from 'payload/components/forms'
import { Field, FieldWithPath } from 'payload/types'
import Editor from 'rich-markdown-editor'

// Make sure to never re-render the editor, since it tracks the value on its own.
const MemorizedEditor = React.memo(Editor, (prev, next) => prev.id === next.id)

export const MarkdownField: FunctionComponent<FieldWithPath> = (
	props
) => {
	const { path, admin } = props
	const { value, setValue, initialValue } = useField<string>({ path })
	const onChange = useCallback(
		(getValue) => {
			const newValue = getValue().replace(/^\s*\\/gm, '')
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
				defaultValue={initialValue}
				onChange={onChange}
			/>
		</div>
	)
}
