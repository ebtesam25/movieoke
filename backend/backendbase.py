
import os
import pymongo
import json
import random
# import psycopg2
import hashlib
import time

from hashlib import sha256


def edit_distance(string1, string2):

    maxlen = len(string1)

    if len(string1) > len(string2):
        maxlen = len(string2)
        difference = len(string1) - len(string2)
        string1[:difference]

    elif len(string2) > len(string1):
        maxlen = len(string1)
        difference = len(string2) - len(string1)
        string2[:difference]

    else:
        difference = 0

    for i in range(maxlen):
        if string1[i] != string2[i]:
            difference += 1

    return difference


def editDistance(str1, str2, m, n):
 
    # If first string is empty, the only option is to
    # insert all characters of second string into first
    if m == 0:
        return n
 
    # If second string is empty, the only option is to
    # remove all characters of first string
    if n == 0:
        return m
 
    # If last characters of two strings are same, nothing
    # much to do. Ignore last characters and get count for
    # remaining strings.
    if str1[m-1] == str2[n-1]:
        return editDistance(str1, str2, m-1, n-1)
 
    # If last characters are not same, consider all three
    # operations on last character of first string, recursively
    # compute minimum cost for all three operations and take
    # minimum of three values.
    return 1 + min(editDistance(str1, str2, m, n-1),    # Insert
                   editDistance(str1, str2, m-1, n),    # Remove
                   editDistance(str1, str2, m-1, n-1)    # Replace
                   )


def hashthis(st):


    hash_object = hashlib.md5(st.encode())
    h = str(hash_object.hexdigest())
    return h






def dummy(request):
    """Responds to any HTTP request.
    Args:
        request (flask.Request): HTTP request object.
    Returns:
        The response text or any set of values that can be turned into a
        Response object using
        `make_response <http://flask.pocoo.org/docs/1.0/api/#flask.Flask.make_response>`.
    """
    if request.method == 'OPTIONS':
        # Allows GET requests from origin https://mydomain.com with
        # Authorization header
        headers = {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'POST',
            'Access-Control-Allow-Headers': '*',
            'Access-Control-Max-Age': '3600',
            'Access-Control-Allow-Credentials': 'true'
        }
        return ('', 204, headers)

    # Set CORS headers for main requests
    headers = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': 'true'
    }

    request_json = request.get_json()

    
    mongostr = os.environ.get('MONGOSTR')
    client = pymongo.MongoClient(mongostr)
    db = client["movieoke"]


    retjson = {}

    action = request_json['action']


    if action == "adduser" :
        maxid = 1
        col = db.users
        for x in col.find():
            id = x["id"]
            maxid +=1
        id = str(maxid+1)

        payload = {}

        uid = id 
        payload["id"] = id
        # payload["uid"] = request_json['uid']
        # payload["name"] = request_json['name']
        payload["email"] = request_json['email']
        payload["password"] = request_json['password']
        
        result=col.insert_one(payload)

        retjson = {}

        # retjson['dish'] = userid
        retjson['status'] = "successfully added"
        retjson['id'] = id

        return json.dumps(retjson)


    if action == "login":
        col = db.users
        for x in col.find():
            if x['email'] == request_json['email'] and x['password'] == request_json['password']:
                uid = x['id']
                retjson = {}

                # retjson['dish'] = userid
                retjson['status'] = "success"
                retjson['id'] = uid

                return json.dumps(retjson)
        retjson = {}

        # retjson['dish'] = userid
        retjson['status'] = "fail"
        retjson['id'] = "-1"

        return json.dumps(retjson)



    if action == "attempt":
        col = db.scenes

        uid = request_json['uid']
        sid = request_json['sid']

        uline = request_json['line']

       
        for x in col.find():
            if x['id'] == sid:
                line = x['dialogue']
        
        num = len(line)
        # score = num - editDistance(line, uline, len(line), len(uline))

        score = num - edit_distance(line, uline)


        if score < 0:
            score = 0 
                
        retjson = {}

        # retjson['dish'] = userid
        retjson['score'] = score
        retjson['id'] = "-1"

        return json.dumps(retjson)


    if action == "getrandomvideo":
        col = db.scenes

        maxid = 0
        for x in col.find():
            maxid = int(x["id"])
        
        index = random.randint(1, maxid)

        for x in col.find():
            if x['id'] == str(index):
                sid = x['id']
                url = x['url']
                line = x['dialogue']
                retjson = {}

                # retjson['dish'] = userid
                retjson['url'] = url
                retjson['id'] = sid
                retjson['dialogue'] = line

                return json.dumps(retjson)
        retjson = {}

        # retjson['dish'] = userid
        retjson['status'] = "fail"
        retjson['id'] = "-1"

        return json.dumps(retjson)    




    if action == 'getuserface':
        uid = request_json['userid']
        res = getuserface(conn, uid)

        # res = login(conn, uemail, pw)

        retjson['status'] = str(res[0])
        retjson['userface1'] = str(res[2])
        retjson['userface2'] = str(res[3])
        

        return json.dumps(retjson)

    if action == 'setuserface':
        uid = request_json['userid']
        userface = request_json['userface']

        res = updateface(conn, uid, userface)


        # res = login(conn, uemail, pw)

        retjson['status'] = "completed"
        

        return json.dumps(retjson)


    retstr = "action not done"

    if request.args and 'message' in request.args:
        return request.args.get('message')
    elif request_json and 'message' in request_json:
        return request_json['message']
    else:
        return retstr
