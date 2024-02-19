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
export const ThemeDiv = styled.div`
  display: flex;
  align-items: center;
`;
export const HelpTooltipDiv = styled.div`
  background: none;
  height: 36px;
  width: 36px;
  position: relative;
  &:hover > div {
    display: block;
  }
  & img {
    height: 36px;
    width: 36px;
    opacity: 0.5;
  }
  & div {
    width: 240px;
    position: absolute;
    padding: 12px;
    border-radius: 4px;
    right: -12px;
    top: 42px;
    z-index: 9;
    font-size: 14px;
    background-color: #000000;
    color: #ffffff;
    display: none;
    &:before {
      content: "";
      height: 12px;
      width: 12px;
      position: absolute;
      transform: rotate(45deg);
      top: -4px;
      right: 24px;
      background-color: #000000;
    }
    &:after {
      content: "";
      height: 16px;
      width: 35px;
      position: absolute;
      top: -8px;
      right: 14px;
    }
  }
`;
export const ThemeChangeButton = styled.button`
  background: none;
  height: 36px;
  width: 36px;
  & img {
    height: 36px;
    width: 36px;
    opacity: 0.5;
  }
`;
export const TopDiv = styled.div`
  display: flex;
  flex-grow: 1;
  border-top: 1px solid rgb(231, 233, 234);
  border-bottom: 1px solid rgb(231, 233, 234);
`;
export const WidthResizeDiv = styled.div`
  width: 14px;
  background-color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: ew-resize;
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
export const ResultResizeButton = styled.button`
  position: absolute;
  top: -18px;
  height: 36px;
  width: 36px;
  border-radius: 36px;
  border: 1px solid #efefef;
  background-color: #efefef;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
  left: 50%;
  cursor: row-resize;
  &:after {
    content: "";
    height: 8px;
    width: 8px;
    position: absolute;
    margin-bottom: ${(props) => (props.active ? "4px" : "-4px")};
    transform: ${(props) =>
      props.active ? "rotate(45deg)" : "rotate(-135deg)"};
    border-right: 2px solid #979797;
    border-bottom: 2px solid #979797;
  }
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
export const TabWrapDiv = styled.div`
  display: flex;
  align-items: flex-end;
  padding-left: 10px;
`;
export const TabButton = styled.button`
  border: none;
  padding: 20px;
  text-shadow: none;
  box-shadow: none;
  border-radius: 6px 6px 0px 0px;
  background: ${(props) => (props.active ? "#ffffff" : "none")};
  color: ${(props) => (props.active ? "#1E2228" : "#7A7D81")};
  font-size: 13px;
  font-weight: 700;
  margin: 15px 10px 0px 10px;
  position: relative;
  display: flex;
  justify-content: center;
  &:after {
    content: "";
    display: ${(props) => (props.active ? "block" : "none")};
    height: 5px;
    width: 60px;
    position: absolute;
    bottom: 0px;
    background-color: #81aee3;
  }
`;
export const QuestionDiv = styled.div`
  padding: 30px 30px 20px 30px;
  font-size: 20px;
  font-weight: 700;
  border-bottom: 1px solid #efefef;
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
export const TestResultDiv = styled.div`
  font-size: 16px;
  font-weight: 700;
  color: #1e2228;
`;
export const TestCaseTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  text-align: left;
  margin: 0px;
  border: 1px solid #d8dfea;
  & button {
    width: 94px;
    box-shadow: none;
    text-shadow: none;
    border: none;
    cursor: pointer;
    padding: 7px;
    border-radius: 4px;
    font-size: 12px;
    font-weight: 700;
  }
  & thead {
    color: #939599;
    font-size: 12px;
    font-weight: 700;
  }
  & th {
    padding: 12px;
    border: none;
    text-align: left;
    white-space: nowrap;
    & button {
      background-color: #1b49ea;
      color: #ffffff;
    }
  }
  & td {
    font-size: 14px;
    text-align: left;
    padding: 12px;
    vertical-align: top;
  }
`;
export const TestTableRow = styled.tr`
  padding: 0px 4px;
  border-top: 1px solid #d8dfea;
  color: #1e2228;
  &:nth-child(even) {
    background-color: #fafafe;
  }
  &:nth-child(odd) {
    background-color: #ffffff;
  }
  &:last-child {
    border-bottom-right-radius: 10px;
    border-bottom-left-radius: 10px;
  }
`;
export const TestCaseDiv = styled.div`
  min-width: 80px;
  height: 34px;
  overflow: scroll;
  display: flex;
  border: 1px solid #d8dfea;
  border-radius: 6px;
  background: #ffffff;
  padding: 8px;
  white-space: pre-wrap;
  line-height: 14px;
`;
export const TestCaseButton = styled.button`
  width: 94px;
  padding: 7px;
  border-radius: 4px;
  font-size: 12px;
  font-weight: 700;
  color: #1b49ea;
  background-color: #edf0fd;
  display: flex;
  align-items: center;
  justify-content: space-around;
  &:before {
    flex-shrink: 0;
    content: "";
    border: 3px solid #1b49ea;
    border-radius: 50%;
    border-top: 2px solid transparent;
    width: 10px;
    height: 10px;
    -webkit-animation: spin 1s linear infinite;
    animation: spin 1s linear infinite;
    display: ${(props) =>
      props.isLoading && props.isLoading === true ? "block" : "none"};
    @-webkit-keyframes spin {
      0% {
        -webkit-transform: rotate(0deg);
      }
      100% {
        -webkit-transform: rotate(360deg);
      }
    }
    @keyframes spin {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
  }
`;
export const CaseWrapDiv = styled.div`
  height: 100%;
  display: flex;
`;
export const CaseNameDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex-shrink: 0;
  overflow-y: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;
  ::-webkit-scrollbar {
    display: none;
  }
  overflow-x: auto;
  background-color: #f7f8f9;
`;
export const CaseButton = styled.button`
  width: 130px;
  height: 50px;
  display: flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
  color: #1e2228;
  border: 1px solid #d8dfea !important;
  font-size: 14px;
  & > div {
    background: none;
    height: 22px;
    width: 20px;
    position: relative;
    &:hover > div {
      display: block;
    }
    & img {
      height: 20px;
      width: 20px;
    }
    & div {
      width: 120px;
      position: absolute;
      padding: 8px;
      border-radius: 4px;
      left: -12px;
      top: 30px;
      z-index: 9;
      font-size: 10px;
      background-color: #000000;
      color: #ffffff;
      display: none;
      &:before {
        content: "";
        height: 12px;
        width: 12px;
        position: absolute;
        transform: rotate(45deg);
        top: -4px;
        left: 14px;
        background-color: #000000;
      }
      &:after {
        content: "";
        height: 16px;
        width: 35px;
        position: absolute;
        top: -8px;
        left: 2px;
      }
    }
  }
  &:before {
    flex-shrink: 0;
    margin-right: 8px;
    content: "";
    border: 3px solid #1b49ea;
    border-radius: 50%;
    border-top: 2px solid transparent;
    width: 10px;
    height: 10px;
    -webkit-animation: spin 1s linear infinite;
    animation: spin 1s linear infinite;
    display: ${(props) =>
      props.isLoading && props.isLoading === true ? "block" : "none"};
    @-webkit-keyframes spin {
      0% {
        -webkit-transform: rotate(0deg);
      }
      100% {
        -webkit-transform: rotate(360deg);
      }
    }
    @keyframes spin {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
  }
`;
export const TimeLimitDiv = styled.div`
  font-size: 12px;
  font-weight: bold;
  color: #e03946;
`;
export const CustomLoaderDiv = styled.div`
  flex-shrink: 0;
  content: "";
  border: 3px solid #1b49ea;
  border-radius: 16px;
  border-top: 2px solid transparent;
  width: 18px;
  height: 18px;
  -webkit-animation: spin 1s linear infinite;
  animation: spin 1s linear infinite;
  display: ${(props) =>
    props.isLoading && props.isLoading === true ? "block" : "none"};
  @-webkit-keyframes spin {
    0% {
      -webkit-transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
    }
  }
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
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
export const CaseTextDiv = styled.div`
  font-weight: 700;
  margin-bottom: 8px;
`;
export const CaseDescriptionsDiv = styled.div`
  color: #737373;
  font-size: 14px;
  margin-top: 12px;
`;
