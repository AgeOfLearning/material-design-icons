import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneHighQualityElement
 * @class IconTwotoneHighQualityElement
 * @extends {AoflElement}
 */
class IconTwotoneHighQualityElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneHighQualityElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-high-quality';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneHighQualityElement.is, IconTwotoneHighQualityElement);

export default IconTwotoneHighQualityElement;
