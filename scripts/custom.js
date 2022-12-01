let removeRedundantString = (str) => {
    str = str.replace(/(<div class="powered-by">).*(<\/div>)/s, ``);
    str = str.replace(/(<span class="with-love">).*(<span class="author")/s, `$2`);
    return str
  }
  
  
  
  hexo.extend.filter.register('after_render:html', (str, data) => {
    //here data is an object that have information about your blog within 
    // you can try console.log data to see is inside it.
    if (data.config.theme_config.no_hexo_credit) {
      str = removeRedundantString(str);
    }
    return str;
  })