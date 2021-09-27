import { usingColors, usingTypography } from 'src/hooks/theme';
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
  font-size: ${usingTypography((t) => t.scaleSpacing(6))}px;
  background-color: #f0f0f0;

  & > p {
    margin-top: ${usingTypography((t) => t.scaleSpacing(4))}px;
    margin-bottom: ${usingTypography((t) => t.scaleSpacing(4))}px;
  }
`;

export const CommentAuthor = styled.p`
  display: inline-block;
  margin-right: ${usingTypography((t) => t.scaleSpacing(3))}px;

  font-size: ${usingTypography((t) => t.scaleSpacing(5))}px;
  font-weight: bold;
`;

export const CommentMetadata = styled.p`
  display: inline-block;
  margin: 0;

  font-size: ${usingTypography((t) => t.scaleSpacing(5))}px;
  color: #aaaaaa;
`;

export const CommentActionsContainer = styled.div`
  margin-top: ${usingTypography((t) => t.scaleSpacing(6))}px;
`;

export const CommentAction = styled.a`
  margin-right: ${usingTypography((t) => t.scaleSpacing(3))}px;
  padding: ${usingTypography((t) => t.scaleSpacing(2))}px;

  font-size: ${usingTypography((t) => t.scaleSpacing(5))}px;
  border: 1px solid ${usingColors((c) => c.ON.PRIMARY_ACCENT)};
`;
