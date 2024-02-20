import styled from "styled-components";

export const ContentDiv = styled.div`
  padding: 0px;
  height: 100vh;
  overflow: hidden;
  display: flex;
  text-align: left;
  box-sizing: border-box;
  @media (max-width: 992px) {
    flex-direction: column;
    overflow: scroll;
  }
`;
export const LeftDiv = styled.div`
  flex-shrink: 0;
  height: 100vh;
  overflow-y: scroll;
  background-color: #ffffff;
  border-right: 1px solid #efefef;
  -ms-overflow-style: none;
  scrollbar-width: none;
  ::-webkit-scrollbar {
    display: none;
  }
  @media (max-width: 992px) {
    width: 100% !important;
  }
`;
export const RightDiv = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  flex-grow: 1;
  border-left: 1px solid #efefef;
`;
export const LanguageWrapDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 30px;
  background-color: #f7f8f9;
`;
export const LanguageDiv = styled.div`
  display: flex;
  align-items: center;
  font-size: 14px;
  color: #7a7d81;
`;
export const LanguageTextDiv = styled.div`
  padding: 11px 0px;
  margin-right: 15px;
  color: #7a7d81;
`;
export const TopDiv = styled.div`
  display: flex;
  flex-grow: 1;
  border-top: 1px solid rgb(231, 233, 234);
  border-bottom: 1px solid rgb(231, 233, 234);
`;
export const BottomDiv = styled.div`
  border-top: 1px solid rgb(231, 233, 234);
`;
export const ResultWrapDiv = styled.div`
  background-color: #f7f8f9;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
`;
export const RunWrapDiv = styled.div`
  display: flex;
  align-items: center;
  padding: 15px 24px;
  & button {
    border: none;
    padding: 12px 18px;
    text-shadow: none;
    box-shadow: none;
    border-radius: 6px;
    background-color: #1b49ea;
    color: #ffffff;
    font-size: 13px;
    font-weight: 700;
    margin-right: 15px;
  }
  & button:last-child {
    margin-right: 0px;
  }
`;
export const QuestionDiv = styled.div`
  padding: 30px 30px 20px 30px;
  font-size: 20px;
  font-weight: 700;
  border-bottom: 3px solid black;
  text-align: left;
  line-height: 30px;
  color: #1e2431;
`;
export const AnswerDiv = styled.div`
  font-size: 14px;
  line-height: 16.51px;
  padding: 30px;
  white-space: pre-wrap;
  box-sizing: border-box;
  word-break: break-all;
  color: #1e2431;
`;
export const ResultDiv = styled.div`
  overflow-x: hidden;
  background-color: #ffffff;
`;
export const CaseWrapDiv = styled.div`
  height: 100%;
  display: flex;
`;
export const CaseValueWrapDiv = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  flex-grow: 1;
  box-sizing: border-box;
  overflow-y: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;
  ::-webkit-scrollbar {
    display: none;
  }
`;
export const CaseInputDiv = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 14px;
  margin-bottom: 12px;
  color: #1e2228;
  & > div:first-child {
    font-weight: 700;
    margin-bottom: 8px;
  }
  & > div:last-child,
  textarea {
    border: 1px solid #d8dfea;
    background: #ffffff;
    min-height: 34px;
    border-radius: 6px;
    padding: 8px;
    white-space: pre-wrap;
    line-height: 16px;
    word-break: break-all;
  }
`;
export const CaseDescriptionsDiv = styled.div`
  color: red;
  font-size: 14px;
  margin-top: 12px;
`;
