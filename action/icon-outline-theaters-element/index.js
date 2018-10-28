import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineTheatersElement
 * @class IconOutlineTheatersElement
 * @extends {AoflElement}
 */
class IconOutlineTheatersElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineTheatersElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-theaters';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineTheatersElement.is, IconOutlineTheatersElement);

export default IconOutlineTheatersElement;
