import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneLooksTwoElement
 * @class IconTwotoneLooksTwoElement
 * @extends {AoflElement}
 */
class IconTwotoneLooksTwoElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneLooksTwoElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-looks-two';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneLooksTwoElement.is, IconTwotoneLooksTwoElement);

export default IconTwotoneLooksTwoElement;
