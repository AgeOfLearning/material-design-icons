import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpSaveAltElement
 * @class IconSharpSaveAltElement
 * @extends {AoflElement}
 */
class IconSharpSaveAltElement extends AoflElement {
  /**
   * Creates an instance of IconSharpSaveAltElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-save-alt';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpSaveAltElement.is, IconSharpSaveAltElement);

export default IconSharpSaveAltElement;
