import React from 'react'
import './ProjectPage.css'
import impactImage from './IMPACT/IMPACT-icon.png'
import wdywteImage from './WDYWTE/icon.svg'
import rackimedesImage from './Rackimedes/logo.jpg'
import usbdupImage from './usbduplicator/logo.png'
import NetworkAssistantImage from './networkassistant/logo.png'
import { SiGithub } from 'react-icons/si'
import { RiPagesFill } from 'react-icons/ri'

const ProjectPage = () => {
  return (
    <>
    <h1>Projects</h1>
    <div className='content'>
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <img src={impactImage} alt="IMPACT" height="80px"/>
            <h3>IMPACT</h3>
            <h5>Configuration Management Tool</h5>
          </div>
          <div className="flip-card-back">
            <p>IMPACT is a bare metal deployment tool designed to be installed...<a href="https://github.com/karlbaker/IMPACT" arget="_blank" rel="noreferrer">Click for more info.</a></p>
            <div>
              <div><a href="https://github.com/karlbaker/IMPACT" target="_blank" rel="noreferrer"><RiPagesFill /> Live Demo</a></div>
              <div><a href="https://github.com/karlbaker/IMPACT" target="_blank" rel="noreferrer"><SiGithub /> Source</a></div>
            </div>
          </div>
        </div>
      </div>
      <div className="flip-card">
    <div className="flip-card-inner">
      <div className="flip-card-front">
        <img src={wdywteImage} alt="What do you want to eat?" height="80px" />
        <h3>What Do We Have To Eat?</h3>
      </div>
      <div className="flip-card-back">
        <p>What Do We Have To Eat? is a web application that allows you to inventory...<a href="/#" arget="_blank" rel="noreferrer">Click for more info.</a></p>
        <div>
              <div><a href="https://github.com/karlbaker/IMPACT" target="_blank" rel="noreferrer"><RiPagesFill /> Live Demo</a></div>
              <div><a href="https://github.com/karlbaker/IMPACT" target="_blank" rel="noreferrer"><SiGithub /> Source</a></div>
            </div>
      </div>
    </div>
      </div>
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <img src={rackimedesImage} alt="Rackimedes" height="80px" />
            <h3>Rackimedes</h3>
          </div>
          <div className="flip-card-back">
            <p>Rackimedes provides an easier way to generate your rack diagrams, point to point cabling diagram/table, and much more.</p>
            <div>
                  <div><a href="/#" target="_blank" rel="noreferrer"><RiPagesFill /> Live Demo</a></div>
                  <div><a href="/#" target="_blank" rel="noreferrer"><SiGithub /> Source</a></div>
                </div>
          </div>
        </div>
      </div>
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
          <img src={NetworkAssistantImage} alt="Network Assistant Tool" height="80px" />
            <h3>Network Assistant Tool</h3>
          </div>
          <div className="flip-card-back">
            <p>Allow users to change the VLAN on a specific network port.</p>
            <div>
                  <div><a href="/#" target="_blank" rel="noreferrer"><RiPagesFill /> Live Demo</a></div>
                  <div><a href="/#" target="_blank" rel="noreferrer"><SiGithub /> Source</a></div>
                </div>
          </div>
        </div>
      </div>
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <img src={usbdupImage} alt="USB Duplicator" height="80px" />
            <h3>USB Duplicator</h3>
          </div>
          <div className="flip-card-back">
            <p>Leverage the power of Linux to create a USB duplicator.</p>
            <div>
                  <div><a href="/#" target="_blank" rel="noreferrer"><RiPagesFill /> Live Demo</a></div>
                  <div><a href="/#" target="_blank" rel="noreferrer"><SiGithub /> Source</a></div>
                </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default ProjectPage