
  export interface CommentDTO {
    id: string;
    memberId: string;
    testId: string;
    commentDate: string;
    content: string;
    username: string;
    thumbnailImage: string;
  }

  export interface CommentData {
    id: string;
    memberId: string;
    testId: string;
    commentDate: string;
    content: string;
  }

  export interface CommentResponse {
    commentDTOList: [CommentDTO];
    hasNextPage: boolean;
  }
