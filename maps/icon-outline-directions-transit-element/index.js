import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineDirectionsTransitElement
 * @class IconOutlineDirectionsTransitElement
 * @extends {AoflElement}
 */
class IconOutlineDirectionsTransitElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineDirectionsTransitElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-directions-transit';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineDirectionsTransitElement.is, IconOutlineDirectionsTransitElement);

export default IconOutlineDirectionsTransitElement;
