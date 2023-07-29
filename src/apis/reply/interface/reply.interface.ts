export interface ReplyCurData {
  id: number;
  name: string;
  choiceid: {
    id: number;
    choice: string;
    score: number;
    questionid: {
      id: number;
      question: string;
      surveyid: {
        id: number;
        name: string;
        description: string;
      };
    };
  };
}

export interface ReplyAccData {
  name: string;
  surveyName: string;
  surveyDescription: string;
  response: [{ question: string; choice: string }];
  totalScore: number;
  find: any;
  findIndex: any;
  push: any;
}
