

# Small file to parse html of files using as training set
# Experimental at this point, will probably change

import re
#from sklearn.datasets import load_files
#
#loading_html = load_files("./job-ad-files/train", description=None, categories=None,
#load_content=True, shuffle=False, encoding=None, decode_error='strict',
#random_state=0)
#
#raw_html = loading_html.data

# want to split document up into top level html elements, i.e. not child html elements

def main():

  x = ''
  with open("job-ad-files/files/job-ad-6", "r") as f:
    x = f.read()
  f.close()

  regexp = re.findall('<([a-zA-Z][a-zA-Z0-9]*)\b[^>]*>.*?</\1>', x, flags=re.MULTILINE)

  print re.match('<([a-zA-Z][a-zA-Z0-9]*)\b[^>]*>.*?</\1>', x, flags=re.MULTILINE)  
#  for i in regexp:
#    print i
  
if __name__ == "__main__":
  main()
