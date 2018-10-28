import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineArrowForwardElement
 * @class IconOutlineArrowForwardElement
 * @extends {AoflElement}
 */
class IconOutlineArrowForwardElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineArrowForwardElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-arrow-forward';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineArrowForwardElement.is, IconOutlineArrowForwardElement);

export default IconOutlineArrowForwardElement;
