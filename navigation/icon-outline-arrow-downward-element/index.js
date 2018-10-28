import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineArrowDownwardElement
 * @class IconOutlineArrowDownwardElement
 * @extends {AoflElement}
 */
class IconOutlineArrowDownwardElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineArrowDownwardElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-arrow-downward';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineArrowDownwardElement.is, IconOutlineArrowDownwardElement);

export default IconOutlineArrowDownwardElement;
