import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineToggleOffElement
 * @class IconOutlineToggleOffElement
 * @extends {AoflElement}
 */
class IconOutlineToggleOffElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineToggleOffElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-toggle-off';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineToggleOffElement.is, IconOutlineToggleOffElement);

export default IconOutlineToggleOffElement;
