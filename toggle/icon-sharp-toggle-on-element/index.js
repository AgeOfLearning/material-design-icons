import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpToggleOnElement
 * @class IconSharpToggleOnElement
 * @extends {AoflElement}
 */
class IconSharpToggleOnElement extends AoflElement {
  /**
   * Creates an instance of IconSharpToggleOnElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-toggle-on';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpToggleOnElement.is, IconSharpToggleOnElement);

export default IconSharpToggleOnElement;
