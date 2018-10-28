import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpHelpElement
 * @class IconSharpHelpElement
 * @extends {AoflElement}
 */
class IconSharpHelpElement extends AoflElement {
  /**
   * Creates an instance of IconSharpHelpElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-help';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpHelpElement.is, IconSharpHelpElement);

export default IconSharpHelpElement;
