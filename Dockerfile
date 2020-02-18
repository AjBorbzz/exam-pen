FROM python:3

ADD exam/ /
CMD ["python", "./my_script.py"]