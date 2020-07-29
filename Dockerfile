FROM python:3.8-slim-buster
ADD . /app
WORKDIR /app
RUN pip install flask prometheus_client flask_prometheus pymongo bs4 requests parse markdown python-dotenv
CMD ["python", "app.py"]