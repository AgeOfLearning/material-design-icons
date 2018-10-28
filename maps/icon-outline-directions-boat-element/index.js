import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineDirectionsBoatElement
 * @class IconOutlineDirectionsBoatElement
 * @extends {AoflElement}
 */
class IconOutlineDirectionsBoatElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineDirectionsBoatElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-directions-boat';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineDirectionsBoatElement.is, IconOutlineDirectionsBoatElement);

export default IconOutlineDirectionsBoatElement;
