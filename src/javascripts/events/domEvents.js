import navEvents from './navEvents';

const handleDomEvents = (e) => {
  if (e.target.id.includes('navbar')) navEvents(e.target.id);
};

const addDomEvents = () => document.querySelector('body').addEventListener('click', handleDomEvents);

export { handleDomEvents, addDomEvents };
