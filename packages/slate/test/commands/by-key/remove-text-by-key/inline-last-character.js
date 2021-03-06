/** @jsx h */

import h from '../../../helpers/h'

export default function(editor) {
  editor.removeTextByKey('a', 0, 1)
}

export const input = (
  <value>
    <document>
      <paragraph>
        <text />
        <link>
          <text key="a">a</text>
        </link>
        <text />
      </paragraph>
    </document>
  </value>
)

export const output = (
  <value>
    <document>
      <paragraph>
        <text />
        <link>
          <text />
        </link>
        <text />
      </paragraph>
    </document>
  </value>
)
