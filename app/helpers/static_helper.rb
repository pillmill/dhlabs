module StaticHelper
  def scroll_arrow(next_section)
    arrow_icon = content_tag :i, '', class:'fa fa-angle-double-down fa-5x text-center'
    button = content_tag :button, arrow_icon, class:'btn btn-link', :data => {'next-section' => "#{next_section}" }, type:'button'
    content_tag :div, button, class:'scroll-arrow'
  end
end
