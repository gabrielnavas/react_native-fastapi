import psycopg2

# Connect to your postgres DB
conn = psycopg2.connect("dbname=fastapi user=postgres password=dev host=localhost port=5435")