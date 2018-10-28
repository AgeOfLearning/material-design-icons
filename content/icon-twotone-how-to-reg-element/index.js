import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneHowToRegElement
 * @class IconTwotoneHowToRegElement
 * @extends {AoflElement}
 */
class IconTwotoneHowToRegElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneHowToRegElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-how-to-reg';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneHowToRegElement.is, IconTwotoneHowToRegElement);

export default IconTwotoneHowToRegElement;
