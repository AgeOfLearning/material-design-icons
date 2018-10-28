import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneNatureElement
 * @class IconTwotoneNatureElement
 * @extends {AoflElement}
 */
class IconTwotoneNatureElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneNatureElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-nature';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneNatureElement.is, IconTwotoneNatureElement);

export default IconTwotoneNatureElement;
