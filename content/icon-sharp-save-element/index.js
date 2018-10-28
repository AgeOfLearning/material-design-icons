import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpSaveElement
 * @class IconSharpSaveElement
 * @extends {AoflElement}
 */
class IconSharpSaveElement extends AoflElement {
  /**
   * Creates an instance of IconSharpSaveElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-save';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpSaveElement.is, IconSharpSaveElement);

export default IconSharpSaveElement;
