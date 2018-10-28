import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneVerticalAlignBottomElement
 * @class IconTwotoneVerticalAlignBottomElement
 * @extends {AoflElement}
 */
class IconTwotoneVerticalAlignBottomElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneVerticalAlignBottomElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-vertical-align-bottom';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneVerticalAlignBottomElement.is, IconTwotoneVerticalAlignBottomElement);

export default IconTwotoneVerticalAlignBottomElement;
