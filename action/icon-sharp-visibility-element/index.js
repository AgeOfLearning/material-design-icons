import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpVisibilityElement
 * @class IconSharpVisibilityElement
 * @extends {AoflElement}
 */
class IconSharpVisibilityElement extends AoflElement {
  /**
   * Creates an instance of IconSharpVisibilityElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-visibility';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpVisibilityElement.is, IconSharpVisibilityElement);

export default IconSharpVisibilityElement;
