import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotone4KElement
 * @class IconTwotone4KElement
 * @extends {AoflElement}
 */
class IconTwotone4KElement extends AoflElement {
  /**
   * Creates an instance of IconTwotone4KElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-4k';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotone4KElement.is, IconTwotone4KElement);

export default IconTwotone4KElement;
