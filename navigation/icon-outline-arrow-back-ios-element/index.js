import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineArrowBackIosElement
 * @class IconOutlineArrowBackIosElement
 * @extends {AoflElement}
 */
class IconOutlineArrowBackIosElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineArrowBackIosElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-arrow-back-ios';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineArrowBackIosElement.is, IconOutlineArrowBackIosElement);

export default IconOutlineArrowBackIosElement;
