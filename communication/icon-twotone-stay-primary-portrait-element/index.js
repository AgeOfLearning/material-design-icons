import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneStayPrimaryPortraitElement
 * @class IconTwotoneStayPrimaryPortraitElement
 * @extends {AoflElement}
 */
class IconTwotoneStayPrimaryPortraitElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneStayPrimaryPortraitElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-stay-primary-portrait';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneStayPrimaryPortraitElement.is, IconTwotoneStayPrimaryPortraitElement);

export default IconTwotoneStayPrimaryPortraitElement;
