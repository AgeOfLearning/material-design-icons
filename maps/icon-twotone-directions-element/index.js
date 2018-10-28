import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneDirectionsElement
 * @class IconTwotoneDirectionsElement
 * @extends {AoflElement}
 */
class IconTwotoneDirectionsElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneDirectionsElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-directions';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneDirectionsElement.is, IconTwotoneDirectionsElement);

export default IconTwotoneDirectionsElement;
