import os
from dotenv import load_dotenv
load_dotenv()
from langchain_community.document_loaders import JSONLoader
import json
from pathlib import Path
from pprint import pprint
from langchain_text_splitters import CharacterTextSplitter
from langchain_openai import OpenAIEmbeddings
from langchain_community.vectorstores import FAISS
from langchain_openai import ChatOpenAI
from langchain.chains.combine_documents import create_stuff_documents_chain
from langchain_core.prompts import ChatPromptTemplate
from langchain.chains import create_retrieval_chain



file_path='output.json'
data = json.loads(Path(file_path).read_text())
loader = JSONLoader(
    file_path='output.json',
    jq_schema='.[]',
    text_content=False)

data = loader.load()

text_splitter = CharacterTextSplitter(
    separator="{",
    chunk_size=1500,
    chunk_overlap=200,
)
docs= text_splitter.split_documents(data)

embeddings = OpenAIEmbeddings(api_key=os.getenv('OPENAI_API_KEY'))
vector = FAISS.from_documents(docs, embeddings)

llm = ChatOpenAI(api_key=os.getenv('OPENAI_API_KEY'), temperature=0.5)


#Using chains for answering questions

prompt = ChatPromptTemplate.from_template("""Answer the following question based only on the provided context:
Steps to follow:
1. For Large cap funds, check for 'classification' as Equity large cap fund. For Mid Cap funds, check for 'classification' as Equity mid cap fund. For Small cap fund check for 'classification' as Equity small cap fund.
2. Now to pick the best fund in their respective catagory, first check for the 'rupeevest_rating' which should be 3,4 or 5. 
3. Then check for, returns_1year, returns_2year, returns_3year, returns_5year, returns_10year (if there it is not null). These are the return percentage of the fund on a yearly basis. Suggest funds that have consistent better performance among their peers.
4. Compare yearly returns of all funds and provide the one that has been stable or good since 5-10 years and has been performing really well in the recent 5 years.

Give top three suggestions of funds to invest in based on the above steps and Inand include what is the basis of your suggestion and include numbers compulsarily to support your suggestion.

<context>
{context}
</context>

Question: Give the best funds options to invest in given {input}.
 """)

document_chain = create_stuff_documents_chain(llm, prompt)
retriever = vector.as_retriever()
retrieval_chain = create_retrieval_chain(retriever, document_chain)

def suggest_funds(inputt):
    if(inputt == "low risk"):
        return  "Suggest me the best large cap funds to invest in."
    elif(inputt == "medium risk"):
        return "Suggest me the best mid cap funds to invest in."
    elif(inputt == "high risk"):
        return "Suggest me the best small cap funds to invest in."
    
ans = suggest_funds("medium risk")

response = retrieval_chain.invoke({"input": ans})
print(response["answer"])