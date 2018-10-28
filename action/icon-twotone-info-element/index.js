import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneInfoElement
 * @class IconTwotoneInfoElement
 * @extends {AoflElement}
 */
class IconTwotoneInfoElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneInfoElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-info';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneInfoElement.is, IconTwotoneInfoElement);

export default IconTwotoneInfoElement;
