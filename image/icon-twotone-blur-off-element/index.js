import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneBlurOffElement
 * @class IconTwotoneBlurOffElement
 * @extends {AoflElement}
 */
class IconTwotoneBlurOffElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneBlurOffElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-blur-off';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneBlurOffElement.is, IconTwotoneBlurOffElement);

export default IconTwotoneBlurOffElement;
