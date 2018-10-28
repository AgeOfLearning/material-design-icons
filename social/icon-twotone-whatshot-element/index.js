import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneWhatshotElement
 * @class IconTwotoneWhatshotElement
 * @extends {AoflElement}
 */
class IconTwotoneWhatshotElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneWhatshotElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-whatshot';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneWhatshotElement.is, IconTwotoneWhatshotElement);

export default IconTwotoneWhatshotElement;
