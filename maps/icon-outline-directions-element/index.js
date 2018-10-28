import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineDirectionsElement
 * @class IconOutlineDirectionsElement
 * @extends {AoflElement}
 */
class IconOutlineDirectionsElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineDirectionsElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-directions';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineDirectionsElement.is, IconOutlineDirectionsElement);

export default IconOutlineDirectionsElement;
