import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneDirectionsCarElement
 * @class IconTwotoneDirectionsCarElement
 * @extends {AoflElement}
 */
class IconTwotoneDirectionsCarElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneDirectionsCarElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-directions-car';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneDirectionsCarElement.is, IconTwotoneDirectionsCarElement);

export default IconTwotoneDirectionsCarElement;
