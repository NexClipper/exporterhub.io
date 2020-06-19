FROM python:3-slim

WORKDIR /
ENV FLASK_APP=app.py
STOPSIGNAL SIGINT
CMD ["python", "/app.py"]
RUN pip install flask prometheus_client flask_prometheus pymongo bs4 requests
COPY app.py /app.py