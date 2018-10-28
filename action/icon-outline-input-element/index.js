import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineInputElement
 * @class IconOutlineInputElement
 * @extends {AoflElement}
 */
class IconOutlineInputElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineInputElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-input';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineInputElement.is, IconOutlineInputElement);

export default IconOutlineInputElement;
