export const scrollDiv = () => {

  $('.scroll_div').each(function(){
    // console.log($(this));
    let id = $(this).attr('id');
    // console.log(id);
    $(this).waypoint({
      handler: () => {
        render(id); //argument has to be the same as line 23 variable
      }
    });
  });
};

const render = id => {
  let year = id.replace('div_','');
  let subset = data.filter(d => {
        return d.Year == year;
      });
  console.log(subset);
};
