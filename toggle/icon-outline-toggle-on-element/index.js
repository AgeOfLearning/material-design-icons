import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineToggleOnElement
 * @class IconOutlineToggleOnElement
 * @extends {AoflElement}
 */
class IconOutlineToggleOnElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineToggleOnElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-toggle-on';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineToggleOnElement.is, IconOutlineToggleOnElement);

export default IconOutlineToggleOnElement;
