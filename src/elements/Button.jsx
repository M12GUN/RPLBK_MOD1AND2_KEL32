import styled, {css} from 'styled-components';
export default styled.button`
 font-family: 'sans-serif';
 font-size:1.3rem;
 border:none;
 border-radius:5px;
 padding:7px 10px;
 background:rgb(0, 0, 0);
 margin:10px 5px;
 ${(props) => props.background && css`
 background:${(props) =>props.background}; `}
 color: rgb(244, 236, 236);
 &:hover{
 text-decoration:underline;
 }
`;