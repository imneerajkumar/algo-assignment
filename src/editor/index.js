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

const AssessmentCoding = ({ question = 1, activeExecute = {} }) => {
  const [height, setHeight] = useState(0);
  const [activeTab, setActiveTab] = useState(2);
  const [customInput, setCustomInput] = useState("");
  const [code, setCode] = useState();
  const [executeMode, setExecuteMode] = useState("cases");
  const [executeLoading, setExecuteLoading] = useState(false);
  const [questionDetails, setQuestionDetails] = useState();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const qDetails = questionsData[question - 1]?.question_details || {};
    setCode(JSON.parse(qDetails?.boiler_plate?.predefinedCode) || "");
    setQuestionDetails(qDetails);

    if (qDetails.custom_input) {
      setCustomInput(qDetails.custom_input.toString());
    } else {
      setCustomInput("");
    }
    // eslint-disable-next-line
  }, [question, questionsData]);

  const codeExecute = async (mode) => {
    if (executeLoading === false) {
      setExecuteLoading(true);
      const trimmedCustomInput = customInput ? customInput.trim() : "";
      if (
        code !== "" &&
        (mode === "cases" || (mode === "input" && trimmedCustomInput !== ""))
      ) {
        setExecuteMode(mode);

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
          .post("http://127.0.0.1:8000/api/execute/", {
            code: codeArray,
            language_id: questionDetails?.id || null,
          })
          .then((res) => {
            const data = res.data;
            const tokens = [];
            data.forEach((item) => tokens.push(item.token));
            axios
              .post("http://127.0.0.1:8000/api/get-result/", {
                tokens: tokens.join(","),
              })
              .then((res) => {
                const submissions = res.data.submissions;
                console.log(submissions);
                const questionDetailsCopy = { ...questionDetails };
                let count = 0;

                for (let i = 0; i < submissions.length; i++) {
                  if (mode === "input") {
                    questionDetailsCopy.custom_output =
                      base64_decode(submissions[i].stdout) || "";
                    questionDetailsCopy.custom_compiler_output =
                      submissions[i]?.status.description || "";
                    questionDetailsCopy.custom_compiler_output =
                      submissions[i]?.compiler_output || "";
                    questionDetailsCopy.custom_tle = submissions[i]?.tle;
                  } else if (mode === "cases") {
                    questionDetailsCopy.question_data[i].output_matched =
                      submissions[i]?.output_matched;
                    questionDetailsCopy.question_data[i].candidate_output =
                      base64_decode(submissions[i]?.stdout) || "";
                    questionDetailsCopy.question_data[i].show_correct = true;
                    questionDetailsCopy.question_data[i].description =
                      submissions[i]?.status.description || "";
                    questionDetailsCopy.question_data[i].compiler_output =
                      submissions[i]?.status.description || "";
                    questionDetailsCopy.question_data[i].tle =
                      submissions[i]?.tle;
                    if (
                      base64_decode(submissions[i]?.stdout).replace(
                        /\n/g,
                        ""
                      ) === questionDetailsCopy.question_data[i].std_output
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
                }
              })
              .catch((err) => {
                console.log(err);
              });
          })
          .catch((err) => {
            console.log(err);
          });
        setExecuteMode("");
        const tempHeight = height < 100 ? 200 : height;
        setHeight(tempHeight);
        setActiveTab(mode === "cases" ? 2 : activeTab);
      }
      setExecuteLoading(false);
    }
  };

  return (
    <Styled.ContentDiv>
      <Styled.LeftDiv style={{ width: "550px" }}>
        <Styled.QuestionDiv>{`Q${question}. ${questionDetails?.title}`}</Styled.QuestionDiv>
        <Styled.AnswerDiv>{questionDetails?.questions_detail}</Styled.AnswerDiv>
      </Styled.LeftDiv>
      <Styled.RightDiv>
        <Styled.LanguageWrapDiv>
          <Styled.LanguageDiv>
            <Styled.LanguageTextDiv>Language:</Styled.LanguageTextDiv>
            <Styled.LanguageTextDiv>Python</Styled.LanguageTextDiv>
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
                }}
                onClick={() => codeExecute("cases")}
              >
                Run Test
              </button>
            </Styled.RunWrapDiv>
          </Styled.ResultWrapDiv>
          <Styled.ResultDiv style={{ height: `${height}px` }}>
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
                      <div
                        style={{
                          margin: "8px 0px 0px 0px",
                        }}
                      >
                        Input
                      </div>
                      <Styled.CustomLoaderDiv
                        isLoading={executeMode === "input"}
                      />
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
                  {(questionDetails?.custom_output === "" ||
                    questionDetails?.custom_output === null) &&
                  questionDetails?.custom_description !== "Accepted" ? (
                    <Styled.CaseDescriptionsDiv>
                      {questionDetails?.custom_description}
                    </Styled.CaseDescriptionsDiv>
                  ) : (
                    ""
                  )}
                  {questionDetails?.custom_compiler_output !== null ||
                  questionDetails?.custom_compiler_output !== "" ? (
                    <Styled.CaseDescriptionsDiv>
                      {questionDetails?.custom_compiler_output}
                    </Styled.CaseDescriptionsDiv>
                  ) : (
                    ""
                  )}
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
          <div>
            <h4>Test Case {index + 1}</h4>
            <p>Input: {qDetail.std_input}</p>
            <p>Expected Output: {qDetail.std_output}</p>
            <p>Your Output: {qDetail.candidate_output}</p>
          </div>
        ))}
      </Modal>
    </Styled.ContentDiv>
  );
};

export default AssessmentCoding;
