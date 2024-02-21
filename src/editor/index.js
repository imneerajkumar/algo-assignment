import React, { useState, useEffect } from "react";
import { decode as base64_decode, encode as base64_encode } from "base-64";
import AceEditor from "react-ace";
import { Modal } from "antd";
import * as Styled from "./styled";
import "ace-builds/src-noconflict/mode-python";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/ext-language_tools";
import axios from "axios";

var questionsData = [
  {
    question_id: "d079cef6-ba61-4889-ad61-0b3579de280f",
    title: "Nearest Square",
    marks: 20,
    question_details: {
      id: "d079cef6-ba61-4889-ad61-0b3579de280f",
      questions_detail:
        "You are given a unique array. Your task is to find the maximum element in that array. After finding that element, check whether it is a perfect square. If yes then return that element otherwise return the next perfect square. For example [11 15 13 12] is the given array. The maximum element in this array is 15. 15 is not a perfect square so the next perfect square 16 will be returned as an output.\n\nInput Format\nTest cases contain the space-separated integers denoting the elements of arrays.\n\nOutput format\nThe output should be an integer according to the above-mentioned conditions.\n\nSample Input - 1\n11 15 13 12 \n\nSample Output - 1\n16\n\nExplanation 1\nThe maximum element is 15 which is not a perfect square. So 16 is the next perfect square so that's the required answer.\n\nSample Input - 2\n20 21 11 30 36\n\nSample Output - 2\n36\n\nExplanation 2\nThe maximum element is 36 which is a perfect square. So 36 is the required answer.",
      title: "Nearest Square",
      question_data: [
        {
          std_input: "11 15 13 12",
          std_output: "16",
          visibility: "PUBLIC",
          base64_folder: "",
          execution_time: 1,
          type: "CONSOLE",
          zip_folder_link: "",
          candidate_output: null,
          is_correct: true,
          show_correct: false,
          compiler_output: "",
        },
        {
          std_input: "20 21 11 30 36",
          std_output: "36",
          visibility: "PUBLIC",
          base64_folder: "",
          execution_time: 1,
          type: "CONSOLE",
          zip_folder_link: "",
          candidate_output: null,
          is_correct: false,
          show_correct: false,
          compiler_output: "",
        },
        {
          std_input: "182 269 74 57 137 160 212 214 197 268 99 203",
          std_output: "289",
          visibility: "PUBLIC",
          base64_folder: "",
          execution_time: 1,
          type: "CONSOLE",
          zip_folder_link: "",
          candidate_output: null,
          is_correct: false,
          show_correct: false,
          compiler_output: "",
        },
        {
          std_input: "190 120 24 231 56 90 285 170 229 75 53",
          std_output: "289",
          visibility: "PUBLIC",
          base64_folder: "",
          execution_time: 1,
          type: "CONSOLE",
          zip_folder_link: "",
          candidate_output: null,
          is_correct: false,
          show_correct: false,
          compiler_output: "",
        },
      ],
      question_type_name: "Compiler Question",
      question_type_code: "COMPILER",
      boiler_plate: {
        id: 71,
        name: "Python (3.8.1)",
        languageCode: "Python",
        predefinedCode:
          '"def solution(arr,n):\\n    #write your code\\n    return 0\\n\\ndef main():\\n    n=input()\\n    arr=list(map(int,n.split()))\\n\\n    print(solution(arr,n))\\n\\nmain()"',
        fileReaderFn: '""',
        customInputFn: '""',
        matchOutputFn: '""',
      },
      halt_level: "dW5kZWZpbmVk",
      languageCode: "Python",
      languageId: 71,
      custom_input: "11 15 13 12",
      custom_output: "",
      custom_description: "",
      custom_compiler_output: "",
    },
    is_viewed: false,
    is_attempted: false,
  },
];

const AssessmentCoding = () => {
  const [customInput, setCustomInput] = useState("");
  const [code, setCode] = useState();
  const [executeLoading, setExecuteLoading] = useState(false);
  const [questionDetails, setQuestionDetails] = useState();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [tab, setTab] = useState(false);
  const [prevSubmissions, setPrevSubmissions] = useState([]);
  // const url = "http://127.0.0.1:8000/api";
  const url = "http://54.236.88.86:8000/api";

  useEffect(() => {
    const qDetails = questionsData[0]?.question_details || {};
    setCode(JSON.parse(qDetails?.boiler_plate?.predefinedCode) || "");
    setQuestionDetails(qDetails);

    if (qDetails.custom_input) {
      setCustomInput(qDetails.custom_input.toString());
    } else {
      setCustomInput("");
    }

    axios
      .get(`${url}/set-submission/`)
      .then((res) => {
        setPrevSubmissions(res.data.submissionsList);
      })
      .catch((e) => console.log(e));
    // eslint-disable-next-line
  }, [questionsData]);

  const codeExecute = async (mode) => {
    if (executeLoading === false) {
      setExecuteLoading(true);
      const trimmedCustomInput = customInput ? customInput.trim() : "";
      if (
        code !== "" &&
        (mode === "cases" || (mode === "input" && trimmedCustomInput !== ""))
      ) {
        const codeArray = [];
        if (mode === "input") {
          codeArray.push({
            language_id: questionDetails?.languageId || null,
            source_code: base64_encode(code),
            stdin: base64_encode(trimmedCustomInput?.replace(/\n/g, "")),
          });
        } else {
          questionDetails?.question_data?.forEach((data) => {
            codeArray.push({
              language_id: questionDetails?.languageId || null,
              source_code: base64_encode(code),
              stdin: base64_encode(data?.std_input?.replace(/\n/g, "")),
            });
          });
        }

        axios
          .post(`${url}/execute/`, {
            code: codeArray,
            language_id: questionDetails?.id || null,
          })
          .then((res) => {
            const data = res.data;
            const tokens = [];
            data?.forEach((item) => tokens.push(item.token));
            axios
              .post(`${url}/get-result/`, {
                tokens: tokens.join(","),
              })
              .then((res) => {
                const submissions = res.data.submissions;
                const questionDetailsCopy = { ...questionDetails };
                let count = 0;

                for (let i = 0; i < submissions.length; i++) {
                  if (mode === "input") {
                    questionDetailsCopy.custom_output = submissions[i]?.stdout
                      ? base64_decode(submissions[i]?.stdout).replace(/\n/g, "")
                      : "";
                    questionDetailsCopy.custom_compiler_output =
                      submissions[i]?.status.description || "";
                  } else if (mode === "cases") {
                    questionDetailsCopy.question_data[i].candidate_output =
                      submissions[i]?.stdout
                        ? base64_decode(submissions[i]?.stdout).replace(
                            /\n/g,
                            ""
                          )
                        : "";
                    questionDetailsCopy.question_data[i].compiler_output =
                      submissions[i]?.status.description || "";
                    if (
                      questionDetailsCopy.question_data[i].candidate_output ===
                      questionDetailsCopy.question_data[i].std_output
                    ) {
                      count += 1;
                    }
                  }
                }
                setQuestionDetails(questionDetailsCopy);
                if (mode === "cases") {
                  setMessage(
                    `${count}/${submissions?.length} test cases passed.`
                  );
                  setIsModalOpen(true);
                  axios
                    .post(`${url}/set-submission/`, {
                      code: code,
                      result: `${count}/${submissions?.length} test cases passed.`,
                      inputs: questionDetails?.question_data
                        .map((qDetail) => qDetail.std_input)
                        .join("#^#"),
                      expected: questionDetails?.question_data
                        .map((qDetail) => qDetail.std_output)
                        .join("#^#"),
                      outputs: questionDetails?.question_data
                        .map((qDetail) => qDetail.candidate_output)
                        .join("#^#"),
                    })
                    .then((res) => console.log(res))
                    .catch((e) => console.log(e));
                }
              })
              .catch((err) => {
                console.log(err);
              });
          })
          .catch((err) => {
            console.log(err);
          });
      }
      setExecuteLoading(false);
    }
  };

  return (
    <Styled.ContentDiv>
      <Styled.LeftDiv style={{ width: "550px" }}>
        <Styled.QuestionDiv>{`Q1. ${questionDetails?.title}`}</Styled.QuestionDiv>
        {!tab && (
          <Styled.AnswerDiv>
            {questionDetails?.questions_detail}
          </Styled.AnswerDiv>
        )}
        {tab && (
          <Styled.AnswerDiv>
            {prevSubmissions.map((item, idx) => (
              <div
                key={item.result + idx}
                style={{ borderBottom: "2px solid black" }}
              >
                <h3>Code: </h3>
                <p
                  style={{
                    backgroundColor: "#ccc",
                    padding: "15px",
                    borderRadius: "20px",
                  }}
                >
                  {item.code}
                </p>
                <h4>Inputs: </h4>
                {item?.inputs?.split("#^#").map((input, i) => (
                  <p key={input + i}>
                    Input {i + 1}: {input}
                  </p>
                ))}
                <h4>Expected Outputs: </h4>
                {item?.expected?.split("#^#").map((output, i) => (
                  <p key={output + i}>
                    Output {i + 1}: {output}
                  </p>
                ))}
                <h4>Your Outputs: </h4>
                {item?.outputs?.split("#^#").map((output, i) => (
                  <p key={output + i}>
                    Output {i + 1}: {output}
                  </p>
                ))}
                <h4 style={{ color: "green" }}>{item.result}</h4>
              </div>
            ))}
          </Styled.AnswerDiv>
        )}
      </Styled.LeftDiv>
      <Styled.RightDiv>
        <Styled.LanguageWrapDiv>
          <Styled.LanguageDiv>
            <Styled.LanguageTextDiv>Language:</Styled.LanguageTextDiv>
            <Styled.LanguageTextDiv>Python (3.8.2)</Styled.LanguageTextDiv>
          </Styled.LanguageDiv>
        </Styled.LanguageWrapDiv>
        <Styled.TopDiv>
          <AceEditor
            placeholder="Placeholder Text"
            mode="python"
            theme="monokai"
            name="blah2"
            onChange={(value) => setCode(value)}
            width="100%"
            height="100%"
            fontSize={14}
            showPrintMargin={true}
            showGutter={true}
            highlightActiveLine={true}
            value={code}
            setOptions={{
              enableBasicAutocompletion: true,
              enableLiveAutocompletion: true,
              enableSnippets: false,
              showLineNumbers: true,
              tabSize: 2,
            }}
          />
        </Styled.TopDiv>
        <Styled.BottomDiv>
          <Styled.ResultWrapDiv>
            <Styled.RunWrapDiv>
              <button
                style={{
                  backgroundColor: "#ffffff",
                  color: "#1B49EA",
                  border: "1px solid #e6e6e6",
                  cursor: "pointer",
                }}
                onClick={() => codeExecute("input")}
              >
                Run Code
              </button>
              <button
                style={{
                  backgroundColor: "#ffffff",
                  color: "#1B49EA",
                  border: "1px solid #e6e6e6",
                  cursor: "pointer",
                }}
                onClick={() => codeExecute("cases")}
              >
                Run Test
              </button>
              <button
                style={{
                  backgroundColor: "#1B49EA",
                  color: "#ffffff",
                  border: "1px solid #e6e6e6",
                  cursor: "pointer",
                }}
                onClick={() => setTab(!tab)}
              >
                {tab ? "Hide Submissions" : "View Submissions"}
              </button>
            </Styled.RunWrapDiv>
          </Styled.ResultWrapDiv>
          <Styled.ResultDiv style={{ height: "200px" }}>
            <div style={{ padding: "0px", height: "100%" }}>
              <Styled.CaseWrapDiv>
                <Styled.CaseValueWrapDiv id="casevaluewrapdiv">
                  <Styled.CaseInputDiv>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                    >
                      <div>Input</div>
                    </div>
                    <textarea
                      rows="4"
                      value={customInput}
                      onChange={(e) => setCustomInput(e?.target?.value)}
                    />
                  </Styled.CaseInputDiv>
                  <Styled.CaseInputDiv>
                    <div>Your Output</div>
                    <div>{questionDetails?.custom_output}</div>
                  </Styled.CaseInputDiv>
                  <Styled.CaseDescriptionsDiv>
                    {questionDetails?.custom_compiler_output !== "Accepted" &&
                      questionDetails?.custom_compiler_output}
                  </Styled.CaseDescriptionsDiv>
                </Styled.CaseValueWrapDiv>
              </Styled.CaseWrapDiv>
            </div>
          </Styled.ResultDiv>
        </Styled.BottomDiv>
      </Styled.RightDiv>
      <Modal
        title={message}
        open={isModalOpen}
        onCancel={() => setIsModalOpen(false)}
        onOk={() => setIsModalOpen(false)}
      >
        {questionDetails?.question_data?.map((qDetail, index) => (
          <div key={index}>
            <h4>Test Case {index + 1}</h4>
            <p>Input: {qDetail.std_input}</p>
            <p>Expected Output: {qDetail.std_output}</p>
            <p>Your Output: {qDetail.candidate_output}</p>
            <p style={{ color: "green" }}>
              {qDetail.std_output === qDetail.candidate_output && "Passed"}
            </p>
            <p style={{ color: "red" }}>
              {qDetail.compiler_output !== "Accepted" &&
                qDetail.compiler_output}
            </p>
          </div>
        ))}
      </Modal>
    </Styled.ContentDiv>
  );
};

export default AssessmentCoding;
