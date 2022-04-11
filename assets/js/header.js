function tabChange() {
    var tabs = ('.header-link > li');
    var active = tabs.filter('.active');
    var next = active.next('li').length? active.next('li').find('a') : tabs.filter(':first-child').find('a');
    next.tab('show');
}

tabChange();