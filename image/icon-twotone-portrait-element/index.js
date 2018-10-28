import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotonePortraitElement
 * @class IconTwotonePortraitElement
 * @extends {AoflElement}
 */
class IconTwotonePortraitElement extends AoflElement {
  /**
   * Creates an instance of IconTwotonePortraitElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-portrait';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotonePortraitElement.is, IconTwotonePortraitElement);

export default IconTwotonePortraitElement;
