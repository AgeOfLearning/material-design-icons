import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpDonutLargeElement
 * @class IconSharpDonutLargeElement
 * @extends {AoflElement}
 */
class IconSharpDonutLargeElement extends AoflElement {
  /**
   * Creates an instance of IconSharpDonutLargeElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-donut-large';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpDonutLargeElement.is, IconSharpDonutLargeElement);

export default IconSharpDonutLargeElement;
