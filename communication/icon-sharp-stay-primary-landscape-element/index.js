import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpStayPrimaryLandscapeElement
 * @class IconSharpStayPrimaryLandscapeElement
 * @extends {AoflElement}
 */
class IconSharpStayPrimaryLandscapeElement extends AoflElement {
  /**
   * Creates an instance of IconSharpStayPrimaryLandscapeElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-stay-primary-landscape';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpStayPrimaryLandscapeElement.is, IconSharpStayPrimaryLandscapeElement);

export default IconSharpStayPrimaryLandscapeElement;
