import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneStayCurrentLandscapeElement
 * @class IconTwotoneStayCurrentLandscapeElement
 * @extends {AoflElement}
 */
class IconTwotoneStayCurrentLandscapeElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneStayCurrentLandscapeElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-stay-current-landscape';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneStayCurrentLandscapeElement.is, IconTwotoneStayCurrentLandscapeElement);

export default IconTwotoneStayCurrentLandscapeElement;
