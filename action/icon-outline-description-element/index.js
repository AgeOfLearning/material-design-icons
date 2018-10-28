import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineDescriptionElement
 * @class IconOutlineDescriptionElement
 * @extends {AoflElement}
 */
class IconOutlineDescriptionElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineDescriptionElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-description';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineDescriptionElement.is, IconOutlineDescriptionElement);

export default IconOutlineDescriptionElement;
