import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpHighQualityElement
 * @class IconSharpHighQualityElement
 * @extends {AoflElement}
 */
class IconSharpHighQualityElement extends AoflElement {
  /**
   * Creates an instance of IconSharpHighQualityElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-high-quality';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpHighQualityElement.is, IconSharpHighQualityElement);

export default IconSharpHighQualityElement;
