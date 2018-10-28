import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneBlurOnElement
 * @class IconTwotoneBlurOnElement
 * @extends {AoflElement}
 */
class IconTwotoneBlurOnElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneBlurOnElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-blur-on';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneBlurOnElement.is, IconTwotoneBlurOnElement);

export default IconTwotoneBlurOnElement;
