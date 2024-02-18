import requests
from rest_framework.response import Response
from rest_framework.views import APIView

class CodeExecutionView(APIView):
    def post(self, request):
        code = request.data.get('code', '')
        # language_id = request.data.get('language_id', 71)  # Example: Python language ID
        url = "https://judge0-ce.p.rapidapi.com/submissions/batch"

        querystring = {"base64_encoded":"true"}

        payload = { "submissions":code }
        headers = {
            "content-type": "application/json",
            "Content-Type": "application/json",
            "X-RapidAPI-Key": "3b68920a96msh656e0304460499fp11f8c1jsn8e6d7cb6e1af",
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
            "X-RapidAPI-Key": "3b68920a96msh656e0304460499fp11f8c1jsn8e6d7cb6e1af",
            "X-RapidAPI-Host": "judge0-ce.p.rapidapi.com"
        }

        response = requests.get(url, headers=headers, params=querystring)
        return Response(response.json())
