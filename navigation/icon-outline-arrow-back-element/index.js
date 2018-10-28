import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineArrowBackElement
 * @class IconOutlineArrowBackElement
 * @extends {AoflElement}
 */
class IconOutlineArrowBackElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineArrowBackElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-arrow-back';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineArrowBackElement.is, IconOutlineArrowBackElement);

export default IconOutlineArrowBackElement;
