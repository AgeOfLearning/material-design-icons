import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneBlurCircularElement
 * @class IconTwotoneBlurCircularElement
 * @extends {AoflElement}
 */
class IconTwotoneBlurCircularElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneBlurCircularElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-blur-circular';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneBlurCircularElement.is, IconTwotoneBlurCircularElement);

export default IconTwotoneBlurCircularElement;
