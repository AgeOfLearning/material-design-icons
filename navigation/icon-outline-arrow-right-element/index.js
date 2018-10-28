import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineArrowRightElement
 * @class IconOutlineArrowRightElement
 * @extends {AoflElement}
 */
class IconOutlineArrowRightElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineArrowRightElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-arrow-right';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineArrowRightElement.is, IconOutlineArrowRightElement);

export default IconOutlineArrowRightElement;
