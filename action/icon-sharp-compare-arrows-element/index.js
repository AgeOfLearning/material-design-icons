import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpCompareArrowsElement
 * @class IconSharpCompareArrowsElement
 * @extends {AoflElement}
 */
class IconSharpCompareArrowsElement extends AoflElement {
  /**
   * Creates an instance of IconSharpCompareArrowsElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-compare-arrows';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpCompareArrowsElement.is, IconSharpCompareArrowsElement);

export default IconSharpCompareArrowsElement;
