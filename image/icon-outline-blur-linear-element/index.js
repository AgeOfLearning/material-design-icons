import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineBlurLinearElement
 * @class IconOutlineBlurLinearElement
 * @extends {AoflElement}
 */
class IconOutlineBlurLinearElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineBlurLinearElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-blur-linear';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineBlurLinearElement.is, IconOutlineBlurLinearElement);

export default IconOutlineBlurLinearElement;
