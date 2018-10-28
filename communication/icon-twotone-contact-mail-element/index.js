import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneContactMailElement
 * @class IconTwotoneContactMailElement
 * @extends {AoflElement}
 */
class IconTwotoneContactMailElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneContactMailElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-contact-mail';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneContactMailElement.is, IconTwotoneContactMailElement);

export default IconTwotoneContactMailElement;
