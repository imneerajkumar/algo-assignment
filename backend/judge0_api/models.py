from django.db import models

class CodeSubmission(models.Model):
  code = models.CharField(max_length=200000)
  inputs = models.CharField(max_length=20000, default="")
  expected = models.CharField(max_length=20000, default="")
  outputs = models.CharField(max_length=20000, default="")
  result = models.CharField(max_length=200)

