import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineArrowForwardIosElement
 * @class IconOutlineArrowForwardIosElement
 * @extends {AoflElement}
 */
class IconOutlineArrowForwardIosElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineArrowForwardIosElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-arrow-forward-ios';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineArrowForwardIosElement.is, IconOutlineArrowForwardIosElement);

export default IconOutlineArrowForwardIosElement;
