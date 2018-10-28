import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpAccessibilityNewElement
 * @class IconSharpAccessibilityNewElement
 * @extends {AoflElement}
 */
class IconSharpAccessibilityNewElement extends AoflElement {
  /**
   * Creates an instance of IconSharpAccessibilityNewElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-accessibility-new';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpAccessibilityNewElement.is, IconSharpAccessibilityNewElement);

export default IconSharpAccessibilityNewElement;
