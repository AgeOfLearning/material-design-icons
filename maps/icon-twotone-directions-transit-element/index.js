import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneDirectionsTransitElement
 * @class IconTwotoneDirectionsTransitElement
 * @extends {AoflElement}
 */
class IconTwotoneDirectionsTransitElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneDirectionsTransitElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-directions-transit';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneDirectionsTransitElement.is, IconTwotoneDirectionsTransitElement);

export default IconTwotoneDirectionsTransitElement;
