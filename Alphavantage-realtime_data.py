# Outputs the realtime data of a stock using the Alphavantage API

import getpass
import os

os.environ["ALPHAVANTAGE_API_KEY"] = getpass.getpass()
from langchain_community.utilities.alpha_vantage import AlphaVantageAPIWrapper
alpha_vantage = AlphaVantageAPIWrapper()
alpha_vantage._get_time_series_daily("IBM")