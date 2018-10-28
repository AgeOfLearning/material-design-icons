import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpStayCurrentPortraitElement
 * @class IconSharpStayCurrentPortraitElement
 * @extends {AoflElement}
 */
class IconSharpStayCurrentPortraitElement extends AoflElement {
  /**
   * Creates an instance of IconSharpStayCurrentPortraitElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-stay-current-portrait';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpStayCurrentPortraitElement.is, IconSharpStayCurrentPortraitElement);

export default IconSharpStayCurrentPortraitElement;
