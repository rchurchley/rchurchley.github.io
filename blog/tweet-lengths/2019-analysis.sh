cat */*.json | jq '
  select( (.lang == "en") and (.retweeted_status | not) ) | 
  if (.extended_tweet.display_text_range) then 
    (.extended_tweet.display_text_range | .[1] - .[0] ) 
  elif (.extended_tweet.full_text) then 
    (.extended_tweet.full_text | length) 
  elif (.display_text_range) then 
    (.display_text_range | .[1] - .[0] ) 
  else 
    (.text | length)
  end
' | sort -n | uniq -c
