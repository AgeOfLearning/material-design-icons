import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneVerticalAlignTopElement
 * @class IconTwotoneVerticalAlignTopElement
 * @extends {AoflElement}
 */
class IconTwotoneVerticalAlignTopElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneVerticalAlignTopElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-vertical-align-top';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneVerticalAlignTopElement.is, IconTwotoneVerticalAlignTopElement);

export default IconTwotoneVerticalAlignTopElement;
