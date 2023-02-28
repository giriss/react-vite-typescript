/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React, { type HTMLAttributes } from 'react'
import styled from 'styled-components'

interface TestButtonProps extends HTMLAttributes<HTMLButtonElement> {
  /**
   * Size of the button
   */
  size?: 'small' | 'regular' | 'large'
  /**
   * Whether or not the button is primary
   */
  isSecondary?: boolean
}

/**
 * Primary UI button component
 */
const TestButton = styled(
  ({ children, size, isSecondary, ...props }: TestButtonProps) => (
    <button {...props}>{children}</button>
  )
)`
  background-color: black;
  color: white;
  border: solid 1px black;
  border-radius: 3px;

  ${({ size }) => {
    switch (size) {
      case 'small':
        return 'padding: 2px 5px;'
      case 'regular':
        return 'padding: 4px 10px;'
      case 'large':
        return 'padding: 6px 15px;'
      default:
        return ''
    }
  }}

  ${({ isSecondary }) => isSecondary! && 'background-color: white;'}
  ${({ isSecondary }) => isSecondary! && 'color: black;'}
`

TestButton.defaultProps = {
  size: 'regular',
  isSecondary: false,
}

export default TestButton
