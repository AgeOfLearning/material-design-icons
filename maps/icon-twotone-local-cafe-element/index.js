import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneLocalCafeElement
 * @class IconTwotoneLocalCafeElement
 * @extends {AoflElement}
 */
class IconTwotoneLocalCafeElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneLocalCafeElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-local-cafe';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneLocalCafeElement.is, IconTwotoneLocalCafeElement);

export default IconTwotoneLocalCafeElement;
