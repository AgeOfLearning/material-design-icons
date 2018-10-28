import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneBlurLinearElement
 * @class IconTwotoneBlurLinearElement
 * @extends {AoflElement}
 */
class IconTwotoneBlurLinearElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneBlurLinearElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-blur-linear';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneBlurLinearElement.is, IconTwotoneBlurLinearElement);

export default IconTwotoneBlurLinearElement;
