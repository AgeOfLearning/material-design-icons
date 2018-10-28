import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneMailElement
 * @class IconTwotoneMailElement
 * @extends {AoflElement}
 */
class IconTwotoneMailElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneMailElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-mail';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneMailElement.is, IconTwotoneMailElement);

export default IconTwotoneMailElement;
