import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineLooksTwoElement
 * @class IconOutlineLooksTwoElement
 * @extends {AoflElement}
 */
class IconOutlineLooksTwoElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineLooksTwoElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-looks-two';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineLooksTwoElement.is, IconOutlineLooksTwoElement);

export default IconOutlineLooksTwoElement;
