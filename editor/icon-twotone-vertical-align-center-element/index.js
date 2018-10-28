import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneVerticalAlignCenterElement
 * @class IconTwotoneVerticalAlignCenterElement
 * @extends {AoflElement}
 */
class IconTwotoneVerticalAlignCenterElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneVerticalAlignCenterElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-vertical-align-center';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneVerticalAlignCenterElement.is, IconTwotoneVerticalAlignCenterElement);

export default IconTwotoneVerticalAlignCenterElement;
