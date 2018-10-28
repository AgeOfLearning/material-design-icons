import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineHighQualityElement
 * @class IconOutlineHighQualityElement
 * @extends {AoflElement}
 */
class IconOutlineHighQualityElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineHighQualityElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-high-quality';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineHighQualityElement.is, IconOutlineHighQualityElement);

export default IconOutlineHighQualityElement;
