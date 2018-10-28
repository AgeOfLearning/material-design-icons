import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpDonutSmallElement
 * @class IconSharpDonutSmallElement
 * @extends {AoflElement}
 */
class IconSharpDonutSmallElement extends AoflElement {
  /**
   * Creates an instance of IconSharpDonutSmallElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-donut-small';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpDonutSmallElement.is, IconSharpDonutSmallElement);

export default IconSharpDonutSmallElement;
