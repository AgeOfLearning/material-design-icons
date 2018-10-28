import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneDirectionsBoatElement
 * @class IconTwotoneDirectionsBoatElement
 * @extends {AoflElement}
 */
class IconTwotoneDirectionsBoatElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneDirectionsBoatElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-directions-boat';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneDirectionsBoatElement.is, IconTwotoneDirectionsBoatElement);

export default IconTwotoneDirectionsBoatElement;
