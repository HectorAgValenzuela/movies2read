from sklearn.metrics.pairwise import cosine_similarity
from sklearn.feature_extraction.text import TfidfVectorizer
import pandas as pd

def get_recommendations(N, scores ):
    # load in recipe dataset
    df_recipes = pd.read_csv("Book_P_Path.csv")
    
    # order the scores with and filter to get the highest N scores

    top = sorted(range(len(scores)), key= (lambda i: scores[i]), reverse=True)[:N]

    # create dataframe to load in recommendations
    colu = ["url","title","authors","lang","img","year","description"]
    recommendation = pd.DataFrame(colu)
    count = 0
    for i in top:
        recommendation.at[count, 'title'] = df_recipes['title'][i]      
        recommendation.at[count, 'url'] = df_recipes['url'][i]
        recommendation.at[count, 'lang'] = df_recipes['lang'][i]
        recommendation.at[count, 'authors'] = df_recipes['authors'][i]
        recommendation.at[count, 'img'] = df_recipes['img'][i]
        recommendation.at[count, 'year'] = df_recipes['year'][i]
        recommendation.at[count, 'description'] = df_recipes['description'][i]

        count += 1
    return recommendation

def Recomendar(movieID):
    moovieData = pd.read_csv("Movie_P_Path.csv")
    bookData = pd.read_csv("Book_P_Path.csv")
    bookDataParse = bookData["Tags"].values.astype('U')
    nweTfidf = TfidfVectorizer() 
    tfidf_recipe = nweTfidf.fit_transform(bookDataParse)

    movies_tfidf = nweTfidf.transform(moovieData[ moovieData["item_id"] == int(movieID)]["Tags"])
    cos_sim = map(lambda x: cosine_similarity(movies_tfidf, x), tfidf_recipe)
    scores = list(cos_sim)
    return (get_recommendations(5,scores))
    
