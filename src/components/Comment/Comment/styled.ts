import { usingColors } from 'src/hooks/theme';
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
  display: inline-block;
  margin: 10px 10px 0 0;
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
  margin-right: 0.5em;
  padding: 0.5em;
  border: 1px solid ${usingColors((c) => c.ON.PRIMARY_ACCENT)};
`;
