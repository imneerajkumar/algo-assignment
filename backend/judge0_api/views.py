import requests
from rest_framework.response import Response
from rest_framework.views import APIView
from .models import CodeSubmission

class CodeExecutionView(APIView):
    def post(self, request):
        code = request.data.get('code', '')
        url = "https://judge0-ce.p.rapidapi.com/submissions/batch"

        querystring = {"base64_encoded":"true"}

        payload = { "submissions":code }
        headers = {
            "content-type": "application/json",
            "Content-Type": "application/json",
            "X-RapidAPI-Key": "83193fd27fmshbf1bc2542901571p1accf1jsnd4da3cd60aa3",
            "X-RapidAPI-Host": "judge0-ce.p.rapidapi.com"
        }


        response = requests.post(url, json=payload, headers=headers, params=querystring)
        return Response(response.json())

class CodeResultView(APIView):
    def post(self, request):
        tokens= request.data.get('tokens', '')
        url = "https://judge0-ce.p.rapidapi.com/submissions/batch"

        querystring = {"tokens":tokens,"base64_encoded":"true","fields":"*"}

        headers = {
            "X-RapidAPI-Key": "83193fd27fmshbf1bc2542901571p1accf1jsnd4da3cd60aa3",
            "X-RapidAPI-Host": "judge0-ce.p.rapidapi.com"
        }

        response = requests.get(url, headers=headers, params=querystring)
        return Response(response.json())

class SubmissionView(APIView):
    def post(self, request):
        code = request.data.get('code', '')
        inputs = request.data.get('inputs', '')
        expected = request.data.get('expected', '')
        outputs = request.data.get('outputs', '')
        result = request.data.get('result', '')
        CodeSubmission.objects.create(code=code, inputs=inputs, expected=expected, outputs=outputs, result=result)
        return Response("message: {'Code entered into DB''}")

    def get(self, request):
        submissions = CodeSubmission.objects.all()
        submissionsList = [{'code': submission.code, 'inputs': submission.inputs, 'expected': submission.expected, 'outputs': submission.outputs, 'result': submission.result} for submission in submissions]
        return Response({'submissionsList': submissionsList})
        
