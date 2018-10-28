import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpStayCurrentLandscapeElement
 * @class IconSharpStayCurrentLandscapeElement
 * @extends {AoflElement}
 */
class IconSharpStayCurrentLandscapeElement extends AoflElement {
  /**
   * Creates an instance of IconSharpStayCurrentLandscapeElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-stay-current-landscape';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpStayCurrentLandscapeElement.is, IconSharpStayCurrentLandscapeElement);

export default IconSharpStayCurrentLandscapeElement;
