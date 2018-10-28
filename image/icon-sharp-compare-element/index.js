import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpCompareElement
 * @class IconSharpCompareElement
 * @extends {AoflElement}
 */
class IconSharpCompareElement extends AoflElement {
  /**
   * Creates an instance of IconSharpCompareElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-compare';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpCompareElement.is, IconSharpCompareElement);

export default IconSharpCompareElement;
