import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineSaveElement
 * @class IconOutlineSaveElement
 * @extends {AoflElement}
 */
class IconOutlineSaveElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineSaveElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-save';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineSaveElement.is, IconOutlineSaveElement);

export default IconOutlineSaveElement;
