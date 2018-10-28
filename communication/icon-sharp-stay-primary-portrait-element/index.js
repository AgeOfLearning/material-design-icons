import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpStayPrimaryPortraitElement
 * @class IconSharpStayPrimaryPortraitElement
 * @extends {AoflElement}
 */
class IconSharpStayPrimaryPortraitElement extends AoflElement {
  /**
   * Creates an instance of IconSharpStayPrimaryPortraitElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-stay-primary-portrait';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpStayPrimaryPortraitElement.is, IconSharpStayPrimaryPortraitElement);

export default IconSharpStayPrimaryPortraitElement;
