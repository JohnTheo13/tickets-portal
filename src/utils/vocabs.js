// flow
/**
 * This is a map of keys to actual text displayed in application
 * the %s placeholder is for passing values to text
 *
 * keys for error messages starts with err_
 * keys for other kinda texts starts with txt_
 * ... open for new conventions ;)
 */
const vocabs: Object<string, string> = {
  //  login screen
  login_username: 'Username',
  login_password: 'Password',
  login_button: 'Login',
  // home screen
  home_new: 'Add ticket',
  home_tickets: 'Tickets',
  home_profile: 'Profile',
  // create screen
  create_title: 'Title',
  create_client: 'Client',
  create_description: 'Description',
  create_codename: 'Codename',
  create_contact: 'Contact',
  create_product: 'Product',
  create_component: 'Component',
  create_button: 'Create',
  create_select_contact: 'Select contact',
  create_select_product: 'Select product',
  create_select_component: 'Select component',
  create_success: 'Ticket created',
  // tickets screen
  tickets_name: 'Name',
  tickets_contact: 'Contact Person',
  tickets_date: 'Date',
  tickets_status: 'Status',
  // details screen
  overview_product: 'Product:',
  overview_status: 'Status:',
  overview_component: 'Component:',
  overview_date: 'Date'
}

export default vocabs
