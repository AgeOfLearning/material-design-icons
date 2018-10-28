import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpVisibilityOffElement
 * @class IconSharpVisibilityOffElement
 * @extends {AoflElement}
 */
class IconSharpVisibilityOffElement extends AoflElement {
  /**
   * Creates an instance of IconSharpVisibilityOffElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-visibility-off';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpVisibilityOffElement.is, IconSharpVisibilityOffElement);

export default IconSharpVisibilityOffElement;
