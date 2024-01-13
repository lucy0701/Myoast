
  export interface CommentData {
    id: string;
    memberId: string;
    testId: string;
    commentDate: string;
    content: string;
    username: string;
    thumbnailImage: string;
  }

  export interface CommentsData {
    commentDTOList: [CommentData];
    hasNextPage: boolean;
  }