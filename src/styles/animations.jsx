import styled, { keyframes, css } from 'styled-components'

const rotateRight = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

const rotateLeft = keyframes`
  from {
    transform: rotate(360deg);
  }
  to {
    transform: rotate(0deg);
  }
`

const upDown = keyframes`
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(10vh);
  }
`

const upDownWide = keyframes`
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(30vh);
  }
`

const upDownAnimation = css`
  ${upDown} ${props => props.length || '8s'} ease-in-out infinite alternate;
`

const upDownWideAnimation = css`
  ${upDownWide} ${props =>
    props.length || '12s'} ease-in-out infinite alternate;
`

export const UpDown = styled.div`
  animation: ${upDownAnimation};
  width: ${props => props.width || '150px'};
`

export const UpDownWide = styled.div`
  animation: ${upDownWideAnimation};
  width: ${props => props.width || '150px'};
`

export const RotateAnimation = styled.div`
  animation: ${props => (props.left ? rotateLeft : rotateRight)}
    ${props => props.length || '12s'} linear infinite;
`
