import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineSaveAltElement
 * @class IconOutlineSaveAltElement
 * @extends {AoflElement}
 */
class IconOutlineSaveAltElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineSaveAltElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-save-alt';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineSaveAltElement.is, IconOutlineSaveAltElement);

export default IconOutlineSaveAltElement;
