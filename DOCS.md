# capstone-api v0.0.0



- [Lockstatus](#lockstatus)
	- [Create lockstatus](#create-lockstatus)
	- [Delete lockstatus](#delete-lockstatus)
	- [Retrieve lockstatus](#retrieve-lockstatus)
	- [Retrieve lockstatuses](#retrieve-lockstatuses)
	- [Update lockstatus](#update-lockstatus)
	


# Lockstatus

## Create lockstatus



	POST /lockstatuses


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| status			| 			|  <p>Lockstatus's status.</p>							|

## Delete lockstatus



	DELETE /lockstatuses/:id


## Retrieve lockstatus



	GET /lockstatuses/:id


## Retrieve lockstatuses



	GET /lockstatuses


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| q			| String			| **optional** <p>Query to search.</p>							|
| page			| Number			| **optional** <p>Page number.</p>							|
| limit			| Number			| **optional** <p>Amount of returned items.</p>							|
| sort			| String[]			| **optional** <p>Order of returned items.</p>							|
| fields			| String[]			| **optional** <p>Fields to be returned.</p>							|

## Update lockstatus



	PUT /lockstatuses/:id


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| status			| 			|  <p>Lockstatus's status.</p>							|


