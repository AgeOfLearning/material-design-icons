import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneStayCurrentPortraitElement
 * @class IconTwotoneStayCurrentPortraitElement
 * @extends {AoflElement}
 */
class IconTwotoneStayCurrentPortraitElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneStayCurrentPortraitElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-stay-current-portrait';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneStayCurrentPortraitElement.is, IconTwotoneStayCurrentPortraitElement);

export default IconTwotoneStayCurrentPortraitElement;
