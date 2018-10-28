import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineWhatshotElement
 * @class IconOutlineWhatshotElement
 * @extends {AoflElement}
 */
class IconOutlineWhatshotElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineWhatshotElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-whatshot';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineWhatshotElement.is, IconOutlineWhatshotElement);

export default IconOutlineWhatshotElement;
