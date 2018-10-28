import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneStayPrimaryLandscapeElement
 * @class IconTwotoneStayPrimaryLandscapeElement
 * @extends {AoflElement}
 */
class IconTwotoneStayPrimaryLandscapeElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneStayPrimaryLandscapeElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-stay-primary-landscape';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneStayPrimaryLandscapeElement.is, IconTwotoneStayPrimaryLandscapeElement);

export default IconTwotoneStayPrimaryLandscapeElement;
