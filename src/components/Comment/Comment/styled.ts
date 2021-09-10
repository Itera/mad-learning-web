import styled from 'styled-components';

export const CommentWrapper = styled.div`
  margin-left: 40px;
  margin-top: 10px;
`;

export const CommentContent = styled.div`
  padding: 20px;
  font-size: medium;
  background-color: #f0f0f0;
`;

export const CommentAuthor = styled.a`
  margin-right: 5px;

  font-size: small;
  font-weight: bold;
`;

export const CommentCreated = styled.p`
  display: inline-block;
  margin: 0;

  font-size: small;
  color: #aaaaaa;
`;

export const CommentAction = styled.a`
  font-size: small;
`;
