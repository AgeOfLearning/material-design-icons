import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineArrowRightAltElement
 * @class IconOutlineArrowRightAltElement
 * @extends {AoflElement}
 */
class IconOutlineArrowRightAltElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineArrowRightAltElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-arrow-right-alt';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineArrowRightAltElement.is, IconOutlineArrowRightAltElement);

export default IconOutlineArrowRightAltElement;
