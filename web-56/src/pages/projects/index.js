import React from 'react';
import Layout from '../../components/Layout';
import ProjectCard from '../../components/ProjectCard';



export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <div
          className="full-width-image-container margin-top-0"
          style={{
            backgroundImage: `url('/img/blog-index.jpg')`
          }}
        >
          <h1
            className="has-text-weight-bold is-size-1"
            style={{
              boxShadow: '0.5rem 0 0 #f40, -0.5rem 0 0 #f40',
              backgroundColor: '#f40',
              color: 'white',
              padding: '1rem'
            }}
          >
            Our Projects
          </h1>
        </div>
        <section className="section">
          <div className="container">
            <div className="content">
              <div className="wrapper">
            

                <ProjectCard 
                    contact={{name: "Mr. Whiskerson", imgUrl: "http://placekitten.com/300/200", phone: "(212) 555-1234", email: "mr.whiskaz@catnap.meow"}}
                />
                
                <ProjectCard 
                    contact={{name: "Fluffykins", imgUrl: "http://placekitten.com/400/200", phone: "(212) 555-2345", email: "fluff@me.com"}}
                />
                
                <ProjectCard 
                    contact={{name: "Destroyer", imgUrl: "http://placekitten.com/400/300", phone: "(212) 555-3456", email: "ofworlds@yahoo.com"}}
                />
                
                <ProjectCard 
                    contact={{name: "Felix", imgUrl: "http://placekitten.com/200/100", phone: "(212) 555-4567", email: "thecat@hotmail.com"}}
                />
              

              </div>
            </div>
          </div>
        </section>
      </Layout>
    );
  }
}
