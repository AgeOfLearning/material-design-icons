import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpUnarchiveElement
 * @class IconSharpUnarchiveElement
 * @extends {AoflElement}
 */
class IconSharpUnarchiveElement extends AoflElement {
  /**
   * Creates an instance of IconSharpUnarchiveElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-unarchive';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpUnarchiveElement.is, IconSharpUnarchiveElement);

export default IconSharpUnarchiveElement;
