import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpAccessibilityElement
 * @class IconSharpAccessibilityElement
 * @extends {AoflElement}
 */
class IconSharpAccessibilityElement extends AoflElement {
  /**
   * Creates an instance of IconSharpAccessibilityElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-accessibility';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpAccessibilityElement.is, IconSharpAccessibilityElement);

export default IconSharpAccessibilityElement;
