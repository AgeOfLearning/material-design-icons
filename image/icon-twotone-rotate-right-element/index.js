import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneRotateRightElement
 * @class IconTwotoneRotateRightElement
 * @extends {AoflElement}
 */
class IconTwotoneRotateRightElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneRotateRightElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-rotate-right';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneRotateRightElement.is, IconTwotoneRotateRightElement);

export default IconTwotoneRotateRightElement;
