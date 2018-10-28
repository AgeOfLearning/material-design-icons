import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineEmailElement
 * @class IconOutlineEmailElement
 * @extends {AoflElement}
 */
class IconOutlineEmailElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineEmailElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-email';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineEmailElement.is, IconOutlineEmailElement);

export default IconOutlineEmailElement;
