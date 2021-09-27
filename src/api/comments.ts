import { authFetch } from '../utils/request';
import { getEnvironmentVariables } from 'src/utils/env';

const API_URL = getEnvironmentVariables().apiUrls.madLearning;

export async function createComment(
  eventId: string,
  body: string,
  replyToCommentId?: string
): Promise<void> {
  const response = await authFetch(`${API_URL}/api/Event/${eventId}/Comment`, {
    method: 'POST',
    body: JSON.stringify({
      body,
      replyToCommentId,
    }),
  });

  if (!response.ok) {
    throw new Error(`Failed to create comment: ${response.statusText}.`);
  }
}

export async function deleteComment(
  eventId: string,
  commentId: string
): Promise<void> {
  const response = await authFetch(
    `${API_URL}/api/Event/${eventId}/Comment?commentId=${commentId}`,
    {
      method: 'DELETE',
    }
  );

  if (!response.ok) {
    throw new Error(`Failed to delete comment: ${response.statusText}.`);
  }
}
