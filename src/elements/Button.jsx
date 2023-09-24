import styled, {css} from 'styled-components';
export default styled.button`
 font-family: 'aration';
 font-size:1.3rem;
 border:none;
 border-radius:5px;
 padding:7px 10px;
 background:orange;
 margin:10px 5px;
 ${(props) => props.background && css`
 background:${(props) =>props.background}; `}
 color:cyan;
 &:hover{
 text-decoration:underline;
 }
`;