let removeRedundantStr = (str) => {
    // remove powered-by section
    str = str.replace(/(<div class="powered-by">).*(<\/div>)/s, ``);
    str = str.replace(/(<span class="with-love">).*(<span class="author")/s, `$2`);
    return str
  }
  
  
  
  hexo.extend.filter.register('after_render:html', (str, data) => {
    // console.log(data)
    return removeRedundantStr(str);
  })