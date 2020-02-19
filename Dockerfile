FROM python:3

ADD exam/ /
CMD "pip install --upgrade pip"

RUN "pip install -r requirements.txt"