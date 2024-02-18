import React, { useState, useEffect } from "react";
import { decode as base64_decode, encode as base64_encode } from "base-64";
import AceEditor from "react-ace";
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
      master_skill_id: "3ff84d6a-13db-46fc-aa64-e0d3ef3358ed",
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
          is_correct: false,
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
        {
          std_input:
            "16 56 214 64 8 211 290 228 246 243 41 13 20 199 151 62 92 33 102 242 57 59 73 174 262 154 160 143 169 182 218 11 281 266 161 222 224 10 67 298 113 24 196 144 105 163 148 184 244 110 258 297 1 153 134 123 263 86 200 271 77 270",
          std_output: "324",
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
          std_input: "177 35 287 254 192",
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
          std_input:
            "65 139 220 123 33 23 47 262 243 79 27 5 167 76 239 32 209",
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
          std_input: "109 4 222 82 212 50 246 280 178 9 35 40 191 28 151 23",
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
          std_input:
            "227 252 266 247 177 53 17 38 217 40 264 279 112 256 278 293 291 115 137 78 9 91 263 161 189 55 206 191 86 285 123 226 168 200 70 250 197 106 153 89 270 128 154 33 99 135 195 201 39 186 179 43 7 204 187 4 125 52 185 251 51 148 257 230 193 29 286 95 297 87 150 119 5 92 59 19 289 147 253 23 22 24 57 268 294 292 196 141 244 71 143 199 37 272 165 214 58 163 15 276",
          std_output: "324",
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
          std_input: "118 127",
          std_output: "144",
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
          std_input:
            "122 10 292 245 284 167 38 105 64 74 109 241 278 189 106 108 197 36 22 293 88 148 296 24",
          std_output: "324",
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
          std_input:
            "213 277 258 32 141 49 73 33 175 110 92 68 60 143 44 52 7 78 160 47",
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
    master_skill_id: "3ff84d6a-13db-46fc-aa64-e0d3ef3358ed",
    is_viewed: false,
    is_attempted: false,
  },
];

const AssessmentCoding = ({
  question = 1,
  activeExecute = {},
  setActiveExecute = () => {},
}) => {
  const [height, setHeight] = useState(0);
  const [activeTab, setActiveTab] = useState(2);
  const [activeTestCase, setActiveTestCase] = useState(0);
  const [customInput, setCustomInput] = useState("");
  const [code, setCode] = useState();
  const [executeMode, setExecuteMode] = useState("cases");
  const [executeLoading, setExecuteLoading] = useState(false);
  const [questionDetails, setQuestionDetails] = useState();

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

  const codeExecute = async (questionNumber, mode) => {
    if (executeLoading === false) {
      setExecuteLoading(true);
      const trimmedCustomInput = customInput ? customInput.trim() : "";
      if (
        code !== "" &&
        (mode === "cases" || (mode === "input" && trimmedCustomInput !== ""))
      ) {
        setExecuteMode(mode);
        let inputs = [];
        const questionData = questionDetails?.question_data;

        if (mode === "cases") {
          if (questionData && questionData.length > 0) {
            for (let i = 0; i < questionData.length; i++) {
              inputs.push({ loading: true });
            }
          }
        } else {
          inputs.push({ loading: true });
        }

        setActiveExecute({
          ...activeExecute,
          [questionNumber]: inputs,
        });
        const questionDetailsCopy = { ...questionDetails };

        // if (questionData && questionData.length > 0) {
        //   const data = {
        //     question_id: questionDetailsCopy?.id || null,
        //     language_id: questionDetailsCopy?.languageId || null,
        //     compile_mode:
        //       mode === "cases" ? "RUN_TESTCASES" : "RUN_CUSTOMINPUT",
        //     custom_input: mode === "cases" ? "" : trimmedCustomInput,
        //     predefinedCode: code,
        //   };
        // }

        axios
          .post("http://127.0.0.1:8000/api/execute/", {
            code: [
              {
                language_id: questionDetailsCopy?.languageId || null,
                source_code: base64_encode(code),
              },
            ],
            language_id: questionDetailsCopy?.id || null,
          })
          .then((res) => {
            const data = res.data;
            if (data?.length > 0) {
              axios
                .post("http://127.0.0.1:8000/api/get-result/", {
                  tokens: data[0].token,
                })
                .then((res) => console.log(res));
            }
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
            <Styled.TabWrapDiv>
              <Styled.TabButton
                active={activeTab === 1}
                onClick={() => {
                  const tempHeight = height < 100 ? 200 : height;
                  setHeight(tempHeight);
                  setActiveTab(1);
                }}
              >
                Test Input
              </Styled.TabButton>
              <Styled.TabButton
                active={activeTab === 2}
                onClick={() => {
                  const tempHeight = height < 100 ? 200 : height;
                  setHeight(tempHeight);
                  setActiveTab(2);
                }}
              >
                Test Cases
              </Styled.TabButton>
            </Styled.TabWrapDiv>
            <Styled.RunWrapDiv>
              {activeTab === 1 ? (
                <button
                  style={{
                    backgroundColor: "#ffffff",
                    color: "#1B49EA",
                    border: "1px solid #e6e6e6",
                  }}
                  onClick={() => codeExecute(question, "input")}
                >
                  Run Code
                </button>
              ) : (
                ""
              )}
              <button
                style={{
                  backgroundColor: "#ffffff",
                  color: "#1B49EA",
                  border: "1px solid #e6e6e6",
                }}
                onClick={() => codeExecute(question, "cases")}
              >
                Run Test
              </button>
            </Styled.RunWrapDiv>
          </Styled.ResultWrapDiv>

          <Styled.ResultDiv style={{ height: `${height}px` }}>
            <div style={{ padding: "0px", height: "100%" }}>
              {activeTab === 1 ? (
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
                      <div>{questionDetails.custom_output}</div>
                    </Styled.CaseInputDiv>
                    {(questionDetails.custom_output === "" ||
                      questionDetails.custom_output === null) &&
                    questionDetails.custom_description !== "Accepted" ? (
                      <Styled.CaseDescriptionsDiv>
                        {questionDetails.custom_description}
                      </Styled.CaseDescriptionsDiv>
                    ) : (
                      ""
                    )}
                    {questionDetails.custom_compiler_output !== null ||
                    questionDetails.custom_compiler_output !== "" ? (
                      <Styled.CaseDescriptionsDiv>
                        {questionDetails.custom_compiler_output}
                      </Styled.CaseDescriptionsDiv>
                    ) : (
                      ""
                    )}
                  </Styled.CaseValueWrapDiv>
                </Styled.CaseWrapDiv>
              ) : (
                ""
              )}

              {activeTab === 2 ? (
                <Styled.CaseWrapDiv>
                  <Styled.CaseNameDiv>
                    {questionDetails?.question_data &&
                      questionDetails?.question_data?.map((test, caseIndex) => {
                        let backgroundColor =
                          caseIndex === activeTestCase ? "#f2f2f2" : "#ffffff";
                        let color = "#1E2228";

                        const isExecuteLoading =
                          (activeExecute &&
                            activeExecute[`${question}`] &&
                            activeExecute[`${question}`][caseIndex]?.loading) ||
                          false;

                        if (
                          test.show_correct === true &&
                          isExecuteLoading === false
                        ) {
                          if (
                            test?.output_matched === true &&
                            test?.tle === false
                          ) {
                            color = "green";
                          } else if (
                            test?.output_matched === false ||
                            test?.tle === true
                          ) {
                            color = "#E03946";
                          }
                        }

                        return (
                          <Styled.CaseButton
                            isLoading={isExecuteLoading}
                            onClick={() => {}}
                            style={{
                              backgroundColor,
                              color,
                            }}
                          >
                            {test.tle === true &&
                            isExecuteLoading === false &&
                            test.show_correct === true ? (
                              <div>
                                <div>Time Limit Exceeded</div>
                              </div>
                            ) : (
                              ""
                            )}
                            {`Test Case ${caseIndex + 1}`}
                          </Styled.CaseButton>
                        );
                      })}
                  </Styled.CaseNameDiv>

                  {questionDetails?.question_data[activeTestCase].visibility ===
                  "PRIVATE" ? (
                    <Styled.CaseValueWrapDiv
                      id="casevaluewrapdiv"
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <div
                        style={{
                          fontSize: "14px",
                          marginTop: "12px",
                        }}
                      >
                        Hidden Test Case
                      </div>
                    </Styled.CaseValueWrapDiv>
                  ) : (
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
                        </div>
                        <div>
                          {
                            questionDetails?.question_data[activeTestCase]
                              .std_input
                          }
                        </div>
                      </Styled.CaseInputDiv>
                      <Styled.CaseInputDiv>
                        <div>Expected Output</div>
                        <div>
                          {
                            questionDetails?.question_data[activeTestCase]
                              .std_output
                          }
                        </div>
                      </Styled.CaseInputDiv>
                      <Styled.CaseInputDiv>
                        <div>Your Output</div>
                        <div>
                          {
                            questionDetails?.question_data[activeTestCase]
                              .candidate_output
                          }
                        </div>
                      </Styled.CaseInputDiv>
                      {(questionDetails?.question_data[activeTestCase]
                        .candidate_output === null ||
                        questionDetails?.question_data[activeTestCase]
                          .candidate_output === "") &&
                      questionDetails?.question_data[activeTestCase]
                        .description !== "Accepted" ? (
                        <Styled.CaseDescriptionsDiv>
                          {
                            questionDetails?.question_data[activeTestCase]
                              .description
                          }
                        </Styled.CaseDescriptionsDiv>
                      ) : (
                        ""
                      )}
                      {questionDetails?.question_data[activeTestCase]
                        .compiler_output !== null ||
                      questionDetails?.question_data[activeTestCase]
                        .compiler_output !== "" ? (
                        <Styled.CaseDescriptionsDiv>
                          {
                            questionDetails?.question_data[activeTestCase]
                              .compiler_output
                          }
                        </Styled.CaseDescriptionsDiv>
                      ) : (
                        ""
                      )}
                    </Styled.CaseValueWrapDiv>
                  )}
                </Styled.CaseWrapDiv>
              ) : (
                ""
              )}
            </div>
          </Styled.ResultDiv>
        </Styled.BottomDiv>
      </Styled.RightDiv>
    </Styled.ContentDiv>
  );
};

export default AssessmentCoding;
