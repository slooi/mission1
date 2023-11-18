# Install
npm i -D jest typescript ts-jest @types/jest
# Createa config
npx ts-jest config:init
# Run tests
npm test 


# Learnings
import express from "express" NOT import {express} from "express"

expect(()=>getAlphabetPosition("SS")).toThrow(ERROR_ARGUMENT_LENGTH_NOT_ONE.message)


# Positive testing
- test what we expect users SHOULD do
# Negative testing
- test what we expect users SHOULDN'T do


# Zod notes
- should refactor 




# Learnings for reviewing other people's code:
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

# Learnings - testing
expect(response.body).toHaveProperty("error");
