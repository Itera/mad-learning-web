import styled from 'styled-components';

type CommentWrapperProps = {
  isTopLevel: boolean;
};

export const CommentWrapper = styled.div<CommentWrapperProps>`
  margin-left: ${(props) => (props.isTopLevel ? '0' : '40px')};
  margin-top: 10px;
`;

export const CommentContent = styled.div`
  padding: 20px;
  font-size: medium;
  background-color: #f0f0f0;
`;

export const CommentAuthor = styled.p`
  margin-right: 5px;
  font-size: small;
  font-weight: bold;
`;

export const CommentMetadata = styled.p`
  display: inline-block;
  margin: 0;

  font-size: small;
  color: #aaaaaa;
`;

export const CommentAction = styled.a`
  font-size: small;
`;
