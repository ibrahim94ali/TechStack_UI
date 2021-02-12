export const GET_TECHS = () => (`
{
  technologies {
    name
    id 
	posts {
      title 
	  id 
	  link 
	  owner 
	  date
    }
  }
}`);

export const ADD_TECH = (name) => (`
mutation {
    addTechnology(name: "${name}") {
      id
      name
    }
  }`);

export const EDIT_TECH = (id, name) => (`
mutation {
    updateTechnology(id: "${id}", name: "${name}") {
      id
      name
    }
  }`);

export const DELETE_TECH = (id) => (`
mutation {
    deleteTechnology(id: "${id}") {
      id
    }
  }`);

  export const ADD_POST = (title, owner, link, techId, date) => (`
  mutation {
    addPost(title: "${title}", owner: "${owner}", link: "${link}", date: "${date}", techId: "${techId}") {
      id
      title
    }
  }`);

