import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpHelpOutlineElement
 * @class IconSharpHelpOutlineElement
 * @extends {AoflElement}
 */
class IconSharpHelpOutlineElement extends AoflElement {
  /**
   * Creates an instance of IconSharpHelpOutlineElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-help-outline';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpHelpOutlineElement.is, IconSharpHelpOutlineElement);

export default IconSharpHelpOutlineElement;
