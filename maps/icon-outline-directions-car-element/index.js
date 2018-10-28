import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineDirectionsCarElement
 * @class IconOutlineDirectionsCarElement
 * @extends {AoflElement}
 */
class IconOutlineDirectionsCarElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineDirectionsCarElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-directions-car';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineDirectionsCarElement.is, IconOutlineDirectionsCarElement);

export default IconOutlineDirectionsCarElement;
