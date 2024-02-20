from django.urls import path
from .views import CodeExecutionView, CodeResultView, SubmissionView

urlpatterns = [
    path('execute/', CodeExecutionView.as_view(), name='code-execution'),
    path('get-result/',CodeResultView.as_view(), name="result"),
    path('set-submission/', SubmissionView.as_view(), name="submission")
]
