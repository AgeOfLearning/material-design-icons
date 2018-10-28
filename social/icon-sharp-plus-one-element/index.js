import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpPlusOneElement
 * @class IconSharpPlusOneElement
 * @extends {AoflElement}
 */
class IconSharpPlusOneElement extends AoflElement {
  /**
   * Creates an instance of IconSharpPlusOneElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-plus-one';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpPlusOneElement.is, IconSharpPlusOneElement);

export default IconSharpPlusOneElement;
