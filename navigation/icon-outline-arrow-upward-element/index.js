import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineArrowUpwardElement
 * @class IconOutlineArrowUpwardElement
 * @extends {AoflElement}
 */
class IconOutlineArrowUpwardElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineArrowUpwardElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-arrow-upward';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineArrowUpwardElement.is, IconOutlineArrowUpwardElement);

export default IconOutlineArrowUpwardElement;
