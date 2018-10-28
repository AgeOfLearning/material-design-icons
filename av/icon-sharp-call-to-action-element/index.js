import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpCallToActionElement
 * @class IconSharpCallToActionElement
 * @extends {AoflElement}
 */
class IconSharpCallToActionElement extends AoflElement {
  /**
   * Creates an instance of IconSharpCallToActionElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-call-to-action';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpCallToActionElement.is, IconSharpCallToActionElement);

export default IconSharpCallToActionElement;
