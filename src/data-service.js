import { GET_TECHS, EDIT_TECH, DELETE_TECH, ADD_TECH, ADD_POST } from "./queries";
import { technologies } from "./stores";

const graphql  = async (query) => {
    const response = await fetch(`http://localhost:4000/graphql`,{
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            query: query,
            variables: null
        })
      })
      return response;
}

export const getTechs = async () => {
    const response = await graphql(GET_TECHS());
      if (response.ok) {
          let {data} = await response.json();
          technologies.set(data.technologies);
        console.log(data.technologies)
      }
};

export const addTech = async (name) => {
  const response = await graphql(ADD_TECH(name))    
    if (response.ok) {
        let {data} = await response.json();
      if (data.addTechnology.name == name) {
          technologies.update(techs => {
            techs = techs.concat({id: data.addTechnology.id, name, posts: []})
              return techs;
          })
      }
    }
}

export const editTech = async (id, name) => {
    const response = await graphql(EDIT_TECH(id, name))    
      if (response.ok) {
          let {data} = await response.json();
        if (data.updateTechnology.id == id) {
            technologies.update(techs => {
                const techIndex = techs.findIndex(tech => tech.id === id);
                techs[techIndex] = {
                    ...techs[techIndex],
                    name
                }
                return techs;
            })
        }
      }
}

export const deleteTech = async (id) => {
    const response = await graphql(DELETE_TECH(id))    
      if (response.ok) {
          let {data} = await response.json();
        if (data.deleteTechnology.id == id) {
          technologies.update(techs => {
            const techIndex = techs.findIndex(tech => tech.id === id);
            techs = [...techs.slice(0, techIndex), ...techs.slice(techIndex + 1)]
            return techs;
        })
        }
      }
}

export const addPost = async (title, owner, link, techId, date) => {
  const response = await graphql(ADD_POST(title, owner, link, techId, date))    
    if (response.ok) {
        let {data} = await response.json();
      if (data.addPost.title == title) {
          technologies.update(techs => {
            const index = techs.findIndex(tech => tech.id === techId);
            techs[index].posts = [{
              id: data.addPost.id,
              title,
              link,
              owner,
              techId,
              date
            }, ...techs[index].posts, ]
              return techs;
          })
      }
    }
}