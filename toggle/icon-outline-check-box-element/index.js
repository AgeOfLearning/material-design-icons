import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineCheckBoxElement
 * @class IconOutlineCheckBoxElement
 * @extends {AoflElement}
 */
class IconOutlineCheckBoxElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineCheckBoxElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-check-box';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineCheckBoxElement.is, IconOutlineCheckBoxElement);

export default IconOutlineCheckBoxElement;
