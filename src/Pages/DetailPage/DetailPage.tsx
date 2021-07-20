import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './DetailPage.scss';
import { motion } from 'framer-motion';
import Projects from '../../utils/Constants';


function DetailPage() {

  type Params = {id: any}
  const {id} = useParams<Params>();
  console.log(id);
  const project = Projects.filter(project => project.id == id)[0]
  
  return (
    <div className="main">
      <div className="body">
        1
      </div>
      <div className="body">
        2
      </div>
      <div className="body">
        3
      </div>
      {/* <img 
        src={project?.image} 
        alt={project?.description.name}
      /> */}
    </div>
  );
}

export default DetailPage;
