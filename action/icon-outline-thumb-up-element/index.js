import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineThumbUpElement
 * @class IconOutlineThumbUpElement
 * @extends {AoflElement}
 */
class IconOutlineThumbUpElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineThumbUpElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-thumb-up';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineThumbUpElement.is, IconOutlineThumbUpElement);

export default IconOutlineThumbUpElement;
