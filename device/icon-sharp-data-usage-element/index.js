import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpDataUsageElement
 * @class IconSharpDataUsageElement
 * @extends {AoflElement}
 */
class IconSharpDataUsageElement extends AoflElement {
  /**
   * Creates an instance of IconSharpDataUsageElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-data-usage';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpDataUsageElement.is, IconSharpDataUsageElement);

export default IconSharpDataUsageElement;
