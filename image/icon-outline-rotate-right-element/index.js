import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineRotateRightElement
 * @class IconOutlineRotateRightElement
 * @extends {AoflElement}
 */
class IconOutlineRotateRightElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineRotateRightElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-rotate-right';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineRotateRightElement.is, IconOutlineRotateRightElement);

export default IconOutlineRotateRightElement;
