import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpListAltElement
 * @class IconSharpListAltElement
 * @extends {AoflElement}
 */
class IconSharpListAltElement extends AoflElement {
  /**
   * Creates an instance of IconSharpListAltElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-list-alt';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpListAltElement.is, IconSharpListAltElement);

export default IconSharpListAltElement;
